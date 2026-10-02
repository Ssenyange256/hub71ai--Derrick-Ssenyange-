import {sqliteTable,text} from 'drizzle-orm/sqlite-core';
export const workspaces=sqliteTable('workspaces',{userId:text('user_id').primaryKey(),state:text('state').notNull(),updatedAt:text('updated_at').notNull()});
