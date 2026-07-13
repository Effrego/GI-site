import type { Metadata } from "next";
import Courses from "@/components/Courses";

export const metadata: Metadata = {
  title: "GI Courses — Guiding Idea",
  description:
    "Практико-ориентированная программа по сценарному мастерству для начинающих и действующих авторов.",
};

export default function CoursesPage() {
  return <Courses />;
}
