import { Metadata } from "next";
import { structuredData, faqData } from "./page.mdx";
export const metadata: Metadata = { title: "Health Sharing for Remote Workers & Contractors | WhichHealthShare", description: "Why health sharing makes sense for remote workers and contractors. No employer plan? No problem. Compare options and calculate real savings with no employer dependency." };
export default function BlogPost({ children }) { return (<article><script type="application/ld+json">{JSON.stringify(structuredData)}</script><script type="application/ld+json">{JSON.stringify(faqData)}</script>{children}</article>); }
