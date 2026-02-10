import { Metadata } from "next";
import { structuredData, faqData } from "./page.mdx";
export const metadata: Metadata = { title: "Health Sharing vs Short-Term Insurance: When to Use Each | WhichHealthShare", description: "When is short-term insurance better? When is health sharing the right choice? Coverage gaps, costs, and actual use cases compared side-by-side." };
export default function BlogPost({ children }) { return (<article><script type="application/ld+json">{JSON.stringify(structuredData)}</script><script type="application/ld+json">{JSON.stringify(faqData)}</script>{children}</article>); }
