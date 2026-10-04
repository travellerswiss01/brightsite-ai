import type {RiskLevel} from "./types.js";
export interface Policy{maxDailySpendChf:number;maxSingleTransactionChf:number}
export function classifyRisk(action:string,amountChf=0):RiskLevel{const t=action.toLowerCase();if(/delete|destroy|legal|contract|tax|bank transfer|irreversible/.test(t))return"critical";if(amountChf>20||/production deploy|bulk email|pricing/.test(t))return"high";if(amountChf>3||/ad campaign|external message/.test(t))return"medium";return"low"}
export function requiresApproval(risk:RiskLevel,amountChf:number,policy:Policy){return risk==="critical"||risk==="high"||amountChf>policy.maxSingleTransactionChf}
