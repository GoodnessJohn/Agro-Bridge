
"use server";

import { subscribeFormSchema } from "~/lib/validations/subscribe-form-schema";

// Footer Subscribe 
export async function handleSubscribe(formData: FormData): Promise<void> {
  const email = formData.get("email");

  try {
    const rawData =  { email: formData.get("email") };
    const validatedData = subscribeFormSchema.parse(rawData);

    // Send response to FormSubmit API
    const response = await fetch(`https://formsubmit.co/api/get-submissions/${process.env.FORMSUBMIT_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        form_data: { email: validatedData.email },
        form_url: "https://agro-bridge-taupe.vercel.app/",
      }),
    });

    if (!response.ok) throw new Error(`FormSubmit request failed: ${response.status}`);

  } catch (error) {
    console.error("Error submitting form:", error);
  }
}

