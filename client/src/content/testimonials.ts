export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
  project?: string;
  date?: string;
}

/**
 * Only approved, attributable client feedback belongs in this array.
 * It intentionally starts empty rather than using fabricated review copy.
 */
export const testimonialsData: Testimonial[] = [];

export const testimonialsContentNote = "Add exact client-approved quotes, names, roles, and project context here before publishing.";
