export const areaSnapshot=[
{area:'Al Bahyah',transactions:161,median:4958,offPlan:99},
{area:'Mohamed Bin Zayed City',transactions:8,median:7057,offPlan:0},
{area:'Al Shamkhah',transactions:82,median:11738,offPlan:45},
{area:'Zayed City',transactions:64,median:16298,offPlan:78},
{area:'Al Reem Island',transactions:356,median:18532,offPlan:76},
{area:'Al Hudayriyyat',transactions:627,median:19947,offPlan:100},
{area:'Yas Island',transactions:206,median:20711,offPlan:74},
{area:'Al Saadiyat Island',transactions:235,median:31912,offPlan:79},
{area:'Fahid Island',transactions:20,median:37415,offPlan:100},
{area:'Ramhan Island',transactions:128,median:42836,offPlan:100},
{area:'Khalifa City',transactions:30,median:366956,offPlan:37,flag:'Unusually high value: confirm metric, units and property mix before using.'}];
export const constructionSnapshot={period:'Q4 2025',permits:3196,completions:7249,agriculturalPermits:61,publicFacilitiesPermits:254,regions:[{name:'Abu Dhabi',permits:2375,completions:4827},{name:'Al Ain',permits:929,completions:2423},{name:'Al Dhafra',permits:165,completions:272}]};
export function constructionQuality(){const p=constructionSnapshot.regions.reduce((n,r)=>n+r.permits,0),c=constructionSnapshot.regions.reduce((n,r)=>n+r.completions,0);return {regionalPermits:p,regionalCompletions:c,permitsMatch:p===constructionSnapshot.permits,completionsMatch:c===constructionSnapshot.completions};}
export type BudgetValues={income:string;rent:string;utilities:string;insurance:string;transport:string;serviceCharges:string;schoolFees:string};
export const emptyBudget:BudgetValues={income:'',rent:'',utilities:'',insurance:'',transport:'',serviceCharges:'',schoolFees:''};
export function calculateBudget(v:BudgetValues){const entries=Object.entries(v);if(entries.some(([,x])=>x!==''&&(!Number.isFinite(Number(x))||Number(x)<0)))throw Error('Use non-negative AED amounts.');const n=(x:string)=>x===''?0:Number(x);const monthly=n(v.rent)/12+n(v.utilities)+n(v.insurance)/12+n(v.transport)+n(v.serviceCharges)/12+n(v.schoolFees)/12;return {monthly,remainder:v.income===''?null:n(v.income)-monthly,unknownCosts:entries.filter(([k,x])=>k!=='income'&&x==='').map(([k])=>k),hasRent:v.rent!==''};}
