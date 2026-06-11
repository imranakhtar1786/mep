import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED, an MEP engineering company delivering electrical, HVAC, plumbing, fire safety, solar and automation solutions.",
  path: "/about",
  keywords: [
    "About POWERON ELECTROTECH",
    "MEP Engineering Company",
    "Electrical Engineering Company India",
  ],
});

export default function AboutLayout({ children }) {
  return children;
}
