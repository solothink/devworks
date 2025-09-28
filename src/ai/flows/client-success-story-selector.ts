'use server';

/**
 * @fileOverview A client success story selector AI agent.
 *
 * - selectClientSuccessStory - A function that handles the selection of a client success story.
 * - SelectClientSuccessStoryInput - The input type for the selectClientSuccessStory function.
 * - SelectClientSuccessStoryOutput - The return type for the selectClientSuccessStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SelectClientSuccessStoryInputSchema = z.object({
  clientStories: z.array(
    z.object({
      title: z.string().describe('The title of the client story.'),
      story: z.string().describe('The full text of the client story.'),
      industry: z.string().describe('The industry of the client.'),
    })
  ).describe('An array of client success stories to choose from.'),
  desiredIndustry: z.string().describe('The industry to filter client stories by.'),
});
export type SelectClientSuccessStoryInput = z.infer<typeof SelectClientSuccessStoryInputSchema>;

const SelectClientSuccessStoryOutputSchema = z.object({
  selectedStory: z.object({
    title: z.string().describe('The title of the selected client story.'),
    story: z.string().describe('The full text of the selected client story.'),
    industry: z.string().describe('The industry of the client.'),
  }).describe('The selected client success story.'),
});
export type SelectClientSuccessStoryOutput = z.infer<typeof SelectClientSuccessStoryOutputSchema>;

export async function selectClientSuccessStory(input: SelectClientSuccessStoryInput): Promise<SelectClientSuccessStoryOutput> {
  return selectClientSuccessStoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'selectClientSuccessStoryPrompt',
  input: {schema: SelectClientSuccessStoryInputSchema},
  output: {schema: SelectClientSuccessStoryOutputSchema},
  prompt: `You are an expert at selecting the best client success story for a given purpose.

You will be provided with a list of client success stories, and a desired industry.

Your job is to select the single most relevant client success story from the list, based on the desired industry.

Here are the client stories:

{{#each clientStories}}
Title: {{this.title}}
Story: {{this.story}}
Industry: {{this.industry}}
\n
{{/each}}

Desired Industry: {{{desiredIndustry}}}


Output the selected story.
`,
});

const selectClientSuccessStoryFlow = ai.defineFlow(
  {
    name: 'selectClientSuccessStoryFlow',
    inputSchema: SelectClientSuccessStoryInputSchema,
    outputSchema: SelectClientSuccessStoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
