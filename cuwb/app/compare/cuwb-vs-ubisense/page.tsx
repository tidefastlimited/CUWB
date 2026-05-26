import type { Metadata } from "next";
import { getCompetitor } from "../data";
import ComparisonPage from "../ComparisonPage";

const c = getCompetitor("cuwb-vs-ubisense")!;

export const metadata: Metadata = {
  title: c.seoTitle,
  description: c.seoDescription,
};

export default function Page() {
  return <ComparisonPage c={c} />;
}
