import { Metadata } from "next";
import { structuredData, faqData } from "./page.mdx";
export const metadata: Metadata = { title: "State-by-State Health Sharing Regulations (What You Need to Know) | WhichHealthShare", description: "Are health sharing plans legal in your state? State-by-state regulations, disclosure rules, and regulatory changes in 2026. Restrictions by state." };
export default function BlogPost({ children }) { return (<article><script type="application/ld+json">{JSON.stringify(structuredData)}</script><script type="application/ld+json">{JSON.stringify(faqData)}</script>{children}</article>); }
