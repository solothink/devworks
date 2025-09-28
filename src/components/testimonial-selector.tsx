'use client';

import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { selectClientSuccessStory, type SelectClientSuccessStoryOutput } from '@/ai/flows/client-success-story-selector';
import { clientStories, industries } from '@/lib/data';
import { Skeleton } from './ui/skeleton';
import { MessageSquare } from 'lucide-react';

export function TestimonialSelector() {
  const [selectedIndustry, setSelectedIndustry] = React.useState<string | undefined>(undefined);
  const [selectedStory, setSelectedStory] = React.useState<SelectClientSuccessStoryOutput['selectedStory'] | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSelectStory = async (industry: string) => {
    setSelectedIndustry(industry);
    setIsLoading(true);
    setError(null);
    setSelectedStory(null);

    try {
      const result = await selectClientSuccessStory({
        clientStories: clientStories,
        desiredIndustry: industry,
      });
      setSelectedStory(result.selectedStory);
    } catch (e) {
      console.error(e);
      setError('Failed to select a story. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Find a Relevant Story</CardTitle>
          <CardDescription>Select an industry to see a tailored success story powered by AI.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Select onValueChange={handleSelectStory} value={selectedIndustry}>
              <SelectTrigger className="w-full sm:w-[280px]">
                <SelectValue placeholder="Select an industry..." />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={() => handleSelectStory(selectedIndustry!)} disabled={!selectedIndustry || isLoading}>
              {isLoading ? 'Finding Story...' : 'Find Story'}
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {isLoading && (
         <Card>
            <CardContent className="p-8">
                <div className="space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </div>
            </CardContent>
        </Card>
      )}

      {error && <p className="text-destructive text-center">{error}</p>}
      
      {selectedStory && (
        <Card className="animate-in fade-in-50">
          <CardHeader>
            <CardTitle>{selectedStory.title}</CardTitle>
            <CardDescription>Industry: {selectedStory.industry}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
                <MessageSquare className="w-12 h-12 text-accent flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{selectedStory.story}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
