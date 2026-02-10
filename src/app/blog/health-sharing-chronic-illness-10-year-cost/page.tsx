import { Metadata } from "next";
import { structuredData, faqData } from "./page.mdx";
export const metadata: Metadata = { title: "Cost of Health Sharing with Chronic Illness (Realistic 10-Year Breakdown) | WhichHealthShare", description: "Real-world 10-year cost analysis for chronic conditions under health sharing. Diabetes, hypertension, asthma: actual numbers and coverage limits compared to insurance." };
export default function BlogPost({ children }) { return (<article><script type="application/ld+json">{JSON.stringify(structuredData)}</script><script type="application/ld+json">{JSON.stringify(faqData)}</script>{children}</article>); }
