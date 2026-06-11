import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore POWERON ELECTROTECH projects including electrical engineering, fire alarm systems, lighting layouts and power distribution for modern infrastructure.",
  path: "/projects",
  keywords: [
    "MEP Projects",
    "Electrical Engineering Projects",
    "Power Distribution Projects",
    "Fire Alarm System Projects",
  ],
});

export default function ProjectsLayout({ children }) {
  return children;
}
