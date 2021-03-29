import { CourseJsonLd } from "next-seo";
import { NextSeo } from "next-seo";

export const HomeSEO = (): JSX.Element => {
  return (
    <>
      <CourseJsonLd
        courseName="Javascript algorithms"
        providerName="JSPrep.org"
        providerUrl="https://jsprep.org"
        description="Prepare your algorithms in Javascript"
      />

      <NextSeo
        title="Page Meta Title"
        description="This will be the page meta description"
        canonical="https://www.canonicalurl.ie/"
        openGraph={{
          url: "https://www.canonicalurl.ie/",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
        }}
      />
    </>
  );
};
