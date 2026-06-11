import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED for electrical engineering, MEP design, fire safety, HVAC, plumbing, solar and automation project consultation.",
  path: "/contact",
  keywords: [
    "Contact POWERON ELECTROTECH",
    "MEP Project Consultation",
    "Electrical Engineering Contact",
  ],
});

export default function ContactLayout({ children }) {
  return children;
}
