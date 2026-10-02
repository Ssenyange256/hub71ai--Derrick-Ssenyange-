import LandingContent from '@/components/landing-content';
import {getChatGPTUser,chatGPTSignInPath} from './chatgpt-auth';
export const dynamic='force-dynamic';
export default async function Landing(){const user=await getChatGPTUser();return <LandingContent signedIn={Boolean(user)} accountName={user?.displayName||''} signInPath={chatGPTSignInPath('/workspace')}/>;}
