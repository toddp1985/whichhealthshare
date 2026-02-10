import { Metadata } from "next";
import { structuredData, faqData } from "./page.mdx";
export const metadata: Metadata = { title: "Annual Assessments Explained: Budget Impact & Hidden Costs | WhichHealthShare", description: "What are annual assessments in health sharing? How they impact your budget mid-year, real examples, and how to forecast the true cost of your contribution." };
export default function BlogPost({ children }) { return (<article><script type="application/ld+json">{JSON.stringify(structuredData)}</script><script type="application/ld+json">{JSON.stringify(faqData)}</script>{children}</article>); }
