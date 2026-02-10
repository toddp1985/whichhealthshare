import { Metadata } from "next";
import { structuredData, faqData } from "./page.mdx";
export const metadata: Metadata = { title: "Health Sharing for Small Business Owners: 2-10 Employee Plans | WhichHealthShare", description: "Affordable health sharing options for small businesses with 2-10 employees. Compare group plans, individual enrollment, and cost advantages in 2026." };
export default function BlogPost({ children }) { return (<article><script type="application/ld+json">{JSON.stringify(structuredData)}</script><script type="application/ld+json">{JSON.stringify(faqData)}</script>{children}</article>); }
