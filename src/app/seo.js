const siteName = "POWERON ELECTROTECH";
const companyName = "POWERON ELECTROTECH SOLUTIONS PRIVATE LIMITED";
const defaultImage = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: companyName,
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}) {
  return {
    title,
    description,
    keywords: [
      "POWERON ELECTROTECH",
      "Electrical Engineering",
      "MEP Engineering",
      ...keywords,
    ],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      siteName,
      locale: "en_US",
      type: "website",
      images: [defaultImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [defaultImage.url],
    },
  };
}
