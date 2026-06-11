import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "POWERON ELECTROTECH provides electrical systems, HVAC engineering, plumbing, fire fighting systems, solar energy solutions and industrial automation services.",
  path: "/services",
  keywords: [
    "MEP Services",
    "Electrical Systems",
    "HVAC Engineering",
    "Plumbing Systems",
    "Fire Fighting Systems",
    "Solar Energy Solutions",
    "Industrial Automation",
  ],
});

export default function ServicesLayout({ children }) {
  return children;
}
