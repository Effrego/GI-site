import type { Metadata } from "next";
import Screenwriting from "@/components/Screenwriting";

export const metadata: Metadata = {
  title: "GI Screenwriting — Guiding Idea",
  description:
    "Авторская комната по созданию оригинальных сценариев для полнометражных фильмов, сериалов и театральных постановок.",
};

export default function ScreenwritingPage() {
  return <Screenwriting />;
}
