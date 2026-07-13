import Link from "next/link";
import Image from "next/image";

const directions = [
  {
    title: "GI Screenwriting",
    href: "/screenwriting",
    icon: "/images/Screenwriting_icon.png",
    lead: "Разработка сценариев.",
    text: " Авторская комната по созданию оригинальных сценариев для полнометражных фильмов, сериалов и театральных постановок.",
  },
  {
    title: "GI Doctoring",
    href: "/doctoring",
    icon: "/images/Doctoring_icon.png",
    lead: "«Лечение» сценариев.",
    text: " Анализ, рекомендации, доработка или переработка сценария с помощью консультаций или редактуры от опытного сценариста.",
  },
  {
    title: "GI courses",
    href: "/courses",
    icon: "/images/Courses_icon.png",
    lead: "Сценарный курс.",
    text: " Специальная методика, для начинающих и действующих авторов направленная на последовательное освоение практических навыков сценарного мастерства.",
  },
];

export default function Directions() {
  return (
    <section className="px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-[1400px] gap-x-12 gap-y-10 md:grid-cols-3">
        {directions.map((d) => (
          <div key={d.href} className="flex flex-col items-center">
            <Link
              href={d.href}
              className="group flex flex-col items-center"
            >
              <Image
                src={d.icon}
                alt={d.title}
                width={90}
                height={90}
                className="h-16 w-auto"
              />
              <h3 className="mt-5 font-display text-2xl text-neutral-200 underline decoration-neutral-500 decoration-1 underline-offset-[6px] transition-colors group-hover:text-white group-hover:decoration-neutral-300">
                {d.title}
              </h3>
            </Link>

            <div className="mt-6 w-full rounded-md bg-card px-6 py-5">
              <p className="text-[15px] leading-relaxed text-neutral-400">
                <span className="text-accent">{d.lead}</span>
                {d.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
