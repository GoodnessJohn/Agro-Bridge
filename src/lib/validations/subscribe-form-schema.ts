
// Define and exports zod schema & TypeScript types.
// Validates that the input is a valid email.
// Exports the TypeScript type for safe usage later.

import { z } from "zod";

export const subscribeFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type SubscribeFormInput = z.infer<typeof subscribeFormSchema>;