'use server';

/**
 * @fileOverview This file defines a Genkit flow for analyzing business processes and identifying automation opportunities.
 *
 * - automationOpportunityAnalyzer - A function that takes a business process description and returns potential automation opportunities and improvements.
 * - AutomationOpportunityAnalyzerInput - The input type for the automationOpportunityAnalyzer function.
 * - AutomationOpportunityAnalyzerOutput - The return type for the automationOpportunityAnalyzer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomationOpportunityAnalyzerInputSchema = z.string().describe('A description of the current business processes.');
export type AutomationOpportunityAnalyzerInput = z.infer<typeof AutomationOpportunityAnalyzerInputSchema>;

const AutomationOpportunityAnalyzerOutputSchema = z.object({
  opportunities: z
    .array(z.string())
    .describe('A list of potential automation opportunities.'),
  improvements: z
    .array(z.string())
    .describe('A list of suggested improvements to the business processes.'),
});
export type AutomationOpportunityAnalyzerOutput = z.infer<typeof AutomationOpportunityAnalyzerOutputSchema>;

export async function automationOpportunityAnalyzer(input: AutomationOpportunityAnalyzerInput): Promise<AutomationOpportunityAnalyzerOutput> {
  return automationOpportunityAnalyzerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'automationOpportunityAnalyzerPrompt',
  input: {schema: AutomationOpportunityAnalyzerInputSchema},
  output: {schema: AutomationOpportunityAnalyzerOutputSchema},
  prompt: `You are an AI-powered business process analyst. Analyze the following business process description and identify potential automation opportunities and suggest improvements.

Business Process Description: {{{$input}}}

Respond in JSON format with a list of opportunities and improvements.`, // Changed input access
});

const automationOpportunityAnalyzerFlow = ai.defineFlow(
  {
    name: 'automationOpportunityAnalyzerFlow',
    inputSchema: AutomationOpportunityAnalyzerInputSchema,
    outputSchema: AutomationOpportunityAnalyzerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
