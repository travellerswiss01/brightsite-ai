export type RiskLevel="low"|"medium"|"high"|"critical";
export interface CompanyState{cashChf:number;revenueChf:number;costsChf:number;customers:number;visitors:number;conversionRate:number;activeProduct?:string;cycle:number}
export interface Opportunity{id:string;problem:string;targetCustomer:string;solution:string;estimatedPriceChf:number;estimatedMvpDays:number;estimatedMvpCostChf:number;competition:"low"|"medium"|"high";automationPotential:number;score:number}
export interface Decision{id:string;timestamp:string;agent:string;action:string;reason:string;expectedOutcome:string;confidence:number;costChf:number}
export interface Experiment{id:string;hypothesis:string;metric:string;control:string;variant:string;status:"planned"|"running"|"completed"|"killed"}
export interface ApprovalRequest{id:string;action:string;amountChf:number;risk:RiskLevel;reason:string;status:"pending"|"approved"|"rejected"}
