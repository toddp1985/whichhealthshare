import { Metadata } from "next";
import { structuredData, faqData } from "./page.mdx";
export const metadata: Metadata = { title: "Health Sharing Family Planners: Best Options for Multigenerational Families | WhichHealthShare", description: "Health sharing for families with parents, kids, and grandparents. Coverage limits, cost structure, and best plans for multiple generations and family sizes." };
export default function BlogPost({ children }) { return (<article><script type="application/ld+json">{JSON.stringify(structuredData)}</script><script type="application/ld+json">{JSON.stringify(faqData)}</script>{children}</article>); }
