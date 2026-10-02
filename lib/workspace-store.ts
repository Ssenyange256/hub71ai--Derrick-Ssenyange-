import {env} from 'cloudflare:workers';
import {firstWeekSchema} from './first-week';
import {careerSchema} from './career';
import {z} from 'zod';
import {profileSchema,buildPlan,setTaskComplete} from './planner';
export const workspaceSchema=z.object({profile:profileSchema,done:z.array(z.string().max(100)).max(80),summary:z.string().max(3000),mode:z.enum(['Rules-based planning','AI-assisted planning','Rules-based planning · fictional sample','AI-assisted planning · fictional sample']),career:careerSchema.nullable().optional(),firstWeek:firstWeekSchema.optional(),enquiry:z.string().max(2500).optional(),agentTrace:z.array(z.object({tool:z.enum(['lookup_curated_guidance','build_preparation_roadmap','draft_preparation_enquiry']),callId:z.string().max(200),detail:z.string().max(1000),elapsedMs:z.number().int().min(0).max(90000)})).max(6).optional()});
export type WorkspaceState=z.infer<typeof workspaceSchema>;
function database(){const db=(env as unknown as {DB?:D1Database}).DB;if(!db)throw Error('Saved workspace is unavailable. Keep your inputs and retry.');return db;}
export async function readWorkspace(userId:string){const row=await database().prepare('SELECT state FROM workspaces WHERE user_id = ?').bind(userId).first<{state:string}>();return row?workspaceSchema.parse(JSON.parse(row.state)):null;}
export async function saveWorkspace(userId:string,input:unknown){const state=workspaceSchema.parse(input);const tasks=buildPlan(state.profile);let valid:string[]=[];for(const t of tasks)if(state.done.includes(t.id))valid=setTaskComplete(tasks,valid,t.id,true);if(valid.length!==new Set(state.done).size)throw Error('Review your task progress before saving.');await database().prepare('INSERT INTO workspaces (user_id,state,updated_at) VALUES (?,?,?) ON CONFLICT(user_id) DO UPDATE SET state=excluded.state,updated_at=excluded.updated_at').bind(userId,JSON.stringify({...state,done:valid}),new Date().toISOString()).run();}
