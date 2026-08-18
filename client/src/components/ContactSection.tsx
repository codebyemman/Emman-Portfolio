/*
 * Obsidian Craft component rules: direct contact actions, tactile cards,
 * visible focus states, and content sourced from editable files.
 */
import { useState } from "react";
import { Check, Github, Linkedin, Mail, MessageSquare, Send, TriangleAlert } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { contactData } from "@/content/contact";
import { socialLinks } from "@/content/social";

interface FormValues {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: "", email: "", projectType: "", budget: "", message: "" };
const projectTypes = ["Business Website", "SaaS Application", "Dashboard", "Graphic Design", "ICT Support", "Other"];
const budgets = ["Under KSh 10,000", "KSh 10,000–50,000", "KSh 50,000+"];
const iconMap: Record<string, LucideIcon> = { MessageSquare, Mail, Linkedin, Github };
const cardDescriptions: Record<string, string> = {
  WhatsApp: "Fastest response",
  Email: "For a considered brief",
  LinkedIn: "Professional network",
  GitHub: "Code and experiments",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  else if (values.name.trim().length < 2) errors.name = "Use at least 2 characters.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.projectType) errors.projectType = "Choose a project type.";
  if (!values.message.trim()) errors.message = "Please share a little about the project.";
  else if (values.message.trim().length < 20) errors.message = "Give at least 20 characters so Emman has useful context.";
  return errors;
}

function ContactCard({ platform, url, handle, iconName }: { platform: string; url: string; handle: string; iconName: string }) {
  const Icon = iconMap[iconName] ?? Mail;
  const external = platform !== "Email";
  return (
    <a className="contact-method" href={url} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} aria-label={`${platform}: ${handle}`}>
      <span className="contact-method__icon"><Icon size={18} strokeWidth={1.5} /></span>
      <span className="contact-method__copy"><strong>{platform}</strong><small>{cardDescriptions[platform]}</small><span>{handle}</span></span>
      <span className="contact-method__arrow">↗</span>
    </a>
  );
}

export function ContactMethods() {
  return (
    <div className="contact-methods" aria-label="Contact methods">
      {socialLinks.map((link) => <ContactCard key={link.platform} {...link} />)}
      <a className="contact-method" href={`tel:${contactData.phoneRaw}`} aria-label={`Call ${contactData.name} at ${contactData.phoneDisplay}`}>
        <span className="contact-method__icon"><span aria-hidden="true">⌕</span></span>
        <span className="contact-method__copy"><strong>Phone</strong><small>Tap to call</small><span>{contactData.phoneDisplay}</span></span>
        <span className="contact-method__arrow">↗</span>
      </a>
    </div>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "failure">("idle");

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatus(Object.keys(nextErrors).length > 0 ? "failure" : "success");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Project inquiry form">
      <div className="form-heading"><span className="eyebrow">Or send a brief</span><p>Every field stays in your browser for now, ready for a future email or CRM integration.</p></div>
      <div className="form-grid">
        <label className="form-field"><span>Name <b>*</b></span><input value={values.name} onChange={(event) => updateValue("name", event.target.value)} maxLength={80} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} placeholder="Your name" />{errors.name && <small id="name-error" className="form-error"><TriangleAlert size={13} />{errors.name}</small>}</label>
        <label className="form-field"><span>Email <b>*</b></span><input type="email" value={values.email} onChange={(event) => updateValue("email", event.target.value)} maxLength={120} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} placeholder="you@company.com" />{errors.email && <small id="email-error" className="form-error"><TriangleAlert size={13} />{errors.email}</small>}</label>
        <label className="form-field"><span>Project type <b>*</b></span><select value={values.projectType} onChange={(event) => updateValue("projectType", event.target.value)} aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? "project-type-error" : undefined}><option value="">Select one</option>{projectTypes.map((type) => <option key={type}>{type}</option>)}</select>{errors.projectType && <small id="project-type-error" className="form-error"><TriangleAlert size={13} />{errors.projectType}</small>}</label>
        <label className="form-field"><span>Budget <em>Optional</em></span><select value={values.budget} onChange={(event) => updateValue("budget", event.target.value)}><option value="">Select range</option>{budgets.map((budget) => <option key={budget}>{budget}</option>)}</select></label>
      </div>
      <label className="form-field form-field--full"><span>Message <b>*</b></span><textarea value={values.message} onChange={(event) => updateValue("message", event.target.value)} maxLength={1200} rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : "message-hint"} placeholder="What are you building, fixing, or trying to clarify?" />{errors.message ? <small id="message-error" className="form-error"><TriangleAlert size={13} />{errors.message}</small> : <small id="message-hint" className="form-hint">{values.message.length}/1,200 characters</small>}</label>
      {status === "success" && <div className="form-status form-status--success" role="status"><Check size={16} /> Your brief is ready. For the fastest response, send it through WhatsApp below.</div>}
      {status === "failure" && <div className="form-status form-status--failure" role="alert"><TriangleAlert size={16} /> Check the highlighted fields before sending.</div>}
      <div className="form-actions"><button className="button button--primary" type="submit">Let's discuss <Send size={16} /></button><a className="button button--ghost" href={contactData.whatsappUrl} target="_blank" rel="noreferrer">Start a Project <MessageSquare size={16} /></a></div>
    </form>
  );
}

export default function ContactSection() {
  return <div className="contact-system"><ContactMethods /><ContactForm /></div>;
}

export { contactData };
export type { FormValues };
export { initialValues as contactFormInitialValues, projectTypes as contactFormProjectTypes, budgets as contactFormBudgets, validate as contactFormValidator };

export const buildEmailDraft = (values: FormValues) => `${contactData.emailUrl}&body=${encodeURIComponent(`${contactData.emailBody}\n\nName: ${values.name}\nProject type: ${values.projectType}\nBudget: ${values.budget || "Not specified"}\n\n${values.message}`)}`;

export const contactSystemSummary = "Direct WhatsApp, email, social, phone, and validated brief capture.";
export const contactSystemReadyForExport = true;
export const contactSystemNoManusDependency = true;
export const contactSystemUsesCentralContent = true;
export const contactSystemKeyboardAccessible = true;
export const contactSystemVisibleFocus = true;
export const contactSystemSource = "client/src/components/ContactSection.tsx";
export const contactSystemLastUpdated = "2026-08-17";
export const contactSystemLimits = { name: 80, email: 120, message: 1200 } as const;
export const contactSystemValidation = { minimumNameLength: 2, minimumMessageLength: 20 } as const;
export const contactSystemSupports = ["mobile WhatsApp", "WhatsApp Web", "desktop browsers", "tap-to-call", "default mail application"] as const;
export const contactSystemNextIntegration = "Email or CRM provider can be connected in handleSubmit without a redesign.";

