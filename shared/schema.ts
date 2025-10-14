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

// Plantation Survey schema
export const plantationSurveySchema = z.object({
  estateSize: z.enum(["less_than_500", "500_to_2000", "more_than_2000"], {
    required_error: "Please select your estate size",
  }),
  primaryGoal: z.enum([
    "accurate_maps",
    "yield_forecasting",
    "pest_detection",
  ], {
    required_error: "Please select your primary goal",
  }),
  yieldConfidence: z.enum([
    "very_confident",
    "moderately_confident",
    "low_confidence",
  ], {
    required_error: "Please select your confidence level",
  }),
  criticalData: z.enum([
    "spatial_data",
    "yield_data",
  ], {
    required_error: "Please select your critical data requirement",
  }),
  matureStands: z.enum(["yes", "no"], {
    required_error: "Please select your stand composition",
  }),
});

export type PlantationSurvey = z.infer<typeof plantationSurveySchema>;
