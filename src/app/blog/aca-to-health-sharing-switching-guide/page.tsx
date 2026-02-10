import { Metadata } from "next";
import { structuredData, faqData } from "./page.mdx";

export const metadata: Metadata = {
  title: "How to Switch from ACA to Health Sharing Without Losing Coverage | WhichHealthShare",
  description: "Step-by-step guide to transitioning from ACA insurance to health sharing plans. Avoid coverage gaps, understand waiting periods, and time your switch properly for 2026.",
};

export default function BlogPost({ children }) {
  return (
    <article>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqData)}
      </script>
      {children}
    </article>
  );
}
