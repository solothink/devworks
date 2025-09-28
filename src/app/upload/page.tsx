import { ProjectUploadForm } from "@/components/project-upload-form";
import { FileText, DollarSign, PenSquare } from 'lucide-react';

export default function UploadPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Get a Project Quote
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Provide your project details below, and I'll get back to you with a customized quote and proposal.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center p-4">
              <PenSquare className="h-10 w-10 text-accent mb-4"/>
              <h3 className="font-semibold">1. Describe Your Vision</h3>
              <p className="text-sm text-muted-foreground mt-1">Tell me about your project, goals, and target audience.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <DollarSign className="h-10 w-10 text-accent mb-4"/>
              <h3 className="font-semibold">2. Set Your Budget</h3>
              <p className="text-sm text-muted-foreground mt-1">Provide an estimated budget range to help tailor the solution.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <FileText className="h-10 w-10 text-accent mb-4"/>
              <h3 className="font-semibold">3. Attach Any Files</h3>
              <p className="text-sm text-muted-foreground mt-1">Upload wireframes, design mockups, or requirement documents.</p>
            </div>
          </div>
          <ProjectUploadForm />
        </div>
      </div>
    </div>
  );
}
