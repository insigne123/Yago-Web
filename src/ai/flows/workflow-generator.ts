// WorkflowGenerator flow generates customized automation workflows based on user input.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WorkflowGeneratorInputSchema = z.object({
  description: z
    .string()
    .describe('A description of the desired automated workflow.'),
});
export type WorkflowGeneratorInput = z.infer<typeof WorkflowGeneratorInputSchema>;

const WorkflowGeneratorOutputSchema = z.object({
  workflowPlan: z
    .string()
    .describe('A detailed plan outlining the steps and integrations needed to achieve the automated workflow.'),
});
export type WorkflowGeneratorOutput = z.infer<typeof WorkflowGeneratorOutputSchema>;

export async function generateWorkflow(input: WorkflowGeneratorInput): Promise<WorkflowGeneratorOutput> {
  return workflowGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'workflowGeneratorPrompt',
  input: {schema: WorkflowGeneratorInputSchema},
  output: {schema: WorkflowGeneratorOutputSchema},
  prompt: `You are an AI workflow generator expert. Based on the user's description, create a detailed plan outlining the steps and integrations needed to achieve the automated workflow.

Description: {{{description}}}`,
});

const workflowGeneratorFlow = ai.defineFlow(
  {
    name: 'workflowGeneratorFlow',
    inputSchema: WorkflowGeneratorInputSchema,
    outputSchema: WorkflowGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
