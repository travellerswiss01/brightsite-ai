import type {Decision,Experiment,Opportunity} from "./types.js";
export class CompanyMemory{private decisions:Decision[]=[];private opportunities:Opportunity[]=[];private experiments:Experiment[]=[];
addDecision(v:Decision){this.decisions.unshift(v)} addOpportunity(v:Opportunity){this.opportunities.unshift(v)} addExperiment(v:Experiment){this.experiments.unshift(v)}
getDecisions(){return [...this.decisions]} getOpportunities(){return [...this.opportunities]} getExperiments(){return [...this.experiments]}}
