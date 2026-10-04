import { Agent, run } from "@openai/agents";

export async function askCeo(prompt: string): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    return "AI layer disabled: OPENAI_API_KEY is not configured. Deterministic V0.1 policy remains active.";
  }

  const ceo = new Agent({
    name: "Autonomous Company CEO",
    instructions:
      "You are the CEO of a small autonomous digital company. Optimize for profitable learning, not vanity metrics. Respect budget and risk limits. Never request irreversible or high-risk actions without human approval. Return concise decisions with action, reason, expected outcome, and confidence.",
    model: "gpt-5.5"
  });

  const result = await run(ceo, prompt);
  return result.finalOutput ?? "CEO returned no decision.";
}
