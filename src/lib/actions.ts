"use server";

import * as z from "zod";

// --- Contact Form Action ---
const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof contactFormSchema>) {
  const parsed = contactFormSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }

  // In a real app, you'd send an email, save to a DB, etc.
  console.log("New contact form submission:", parsed.data);

  // Simulate success
  return { success: true };
}


// --- Project Upload Form Action ---
// The schema is defined on the client, but we could redefine it here for stricter validation.
export async function handleProjectUploadForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const description = formData.get("description");
  const file = formData.get("files");

  // In a real app, you would validate this data more thoroughly.
  if (!name || !email || !description) {
    return { success: false, message: "Missing required fields." };
  }

  // Handle file upload here (e.g., save to a cloud storage bucket)
  if (file instanceof File) {
    console.log(`Received file: ${file.name}, size: ${file.size} bytes`);
    // Example: await saveToCloudStorage(file);
  }

  console.log("New project upload:", { name, email });
  
  // Simulate success
  return { success: true };
}
