import type { Metadata } from "next";
import Doctoring from "@/components/Doctoring";

export const metadata: Metadata = {
  title: "GI Doctoring — Guiding Idea",
  description:
    "Анализ, рекомендации, доработка или переработка сценария с помощью консультаций или редактуры от опытного сценариста.",
};

export default function DoctoringPage() {
  return <Doctoring />;
}
