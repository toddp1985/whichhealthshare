import { Metadata } from "next";
import { structuredData, faqData } from "./page.mdx";
export const metadata: Metadata = { title: "Medicare + Health Sharing: Supplement Strategy 2026 | WhichHealthShare", description: "Should you combine Medicare with health sharing? Strategy guide for retirees exploring hybrid coverage models in 2026. Costs, regulations, and real scenarios." };
export default function BlogPost({ children }) { return (<article><script type="application/ld+json">{JSON.stringify(structuredData)}</script><script type="application/ld+json">{JSON.stringify(faqData)}</script>{children}</article>); }
