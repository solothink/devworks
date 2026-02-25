"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "@/hooks/use-toast";
import { handleProjectUploadForm } from "@/lib/actions";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  budget: z.string().optional(),
  description: z.string().min(20, { message: "Description must be at least 20 characters." }),
  files: z.any()
    .optional()
    .refine((files) => !files || files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => !files || ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      ".jpg, .png, .pdf, and .doc files are accepted."
    ),
});

export function ProjectUploadForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  const fileRef = form.register("files");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key === 'files' && value?.[0]) {
        formData.append(key, value[0]);
      } else if (value) {
        formData.append(key, value);
      }
    });

    const result = await handleProjectUploadForm(formData);

    if (result.success) {
      toast({
        title: "Project Submitted!",
        description: "Thank you! I've received your project details and will be in touch shortly.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: result.message || "There was a problem with your submission.",
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Details Form</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl><Input placeholder="john.doe@email.com" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget Range (Optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="< ₹50,000">&lt; ₹50,000</SelectItem>
                      <SelectItem value="₹50,000 - ₹2,00,000">₹50,000 - ₹2,00,000</SelectItem>
                      <SelectItem value="₹2,00,000 - ₹10,00,000">₹2,00,000 - ₹10,00,000</SelectItem>
                      <SelectItem value="₹10,00,000+">₹10,00,000+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your project in detail..." rows={8} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="files"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Project Files (Optional)</FormLabel>
                    <FormControl>
                      <Input type="file" {...fileRef} />
                    </FormControl>
                    <FormDescription>Attach mockups, requirements docs, etc. (Max 5MB)</FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <Button type="submit" className="w-full" size="lg" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Submitting..." : "Submit Project"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
