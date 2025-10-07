import { z } from "zod";

// Stats data type
export type Stat = {
  number: string;
  label: string;
};

// Service data type
export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

// Product data type
export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

// Benefit data type
export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

// Contact form schema
export const contactFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
