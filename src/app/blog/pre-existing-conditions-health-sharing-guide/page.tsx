import { Metadata } from "next";
import { structuredData, faqData } from "./page.mdx";
export const metadata: Metadata = { title: "Pre-Existing Conditions Guide: What Counts, What Doesn't | WhichHealthShare", description: "Complete guide to how health sharing plans handle pre-existing conditions. Waiting periods, exclusions, exemptions, and what conditions typically qualify." };
export default function BlogPost({ children }) { return (<article><script type="application/ld+json">{JSON.stringify(structuredData)}</script><script type="application/ld+json">{JSON.stringify(faqData)}</script>{children}</article>); }
