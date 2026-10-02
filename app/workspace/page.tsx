import {requireChatGPTUser,chatGPTSignOutPath} from '@/app/chatgpt-auth';
import Workspace from '@/components/workspace';
export const dynamic='force-dynamic';
export default async function Page(){const user=await requireChatGPTUser('/workspace');return <Workspace accountName={user.displayName} signOutPath={chatGPTSignOutPath('/')}/>;}
