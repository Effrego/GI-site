import Link from "next/link";
import Image from "next/image";

const directions = [
  {
    kicker: "Разработка сценариев",
    title: "GI Screenwriting",
    description:
      "Авторская комната по созданию оригинальных сценариев для полнометражных фильмов, сериалов и театральных постановок.",
    href: "/screenwriting",
    image: "/images/Octo-screenwriting.png",
  },
  {
    kicker: "«Лечение» сценариев",
    title: "GI Doctoring",
    description:
      "Анализ, рекомендации, доработка или переработка сценария с помощью консультаций или редактуры от опытного сценариста.",
    href: "/doctoring",
    image: "/images/Octo-doctoring.png",
  },
  {
    kicker: "Сценарный курс",
    title: "GI Courses",
    description:
      "Специальная методика для начинающих и действующих авторов, направленная на последовательное освоение практических навыков сценарного мастерства.",
    href: "/courses",
    image: "/images/Octo_courses.webp",
  },
];

export default function Directions() {
  return (
    <section className="border-t border-neutral-800 px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        {directions.map((direction) => (
          <Link
            key={direction.href}
            href={direction.href}
            className="group flex flex-col rounded-lg border border-neutral-800 p-6 transition-colors hover:border-neutral-600"
          >
            <div className="relative h-48 w-full">
              <Image
                src={direction.image}
                alt={direction.title}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-6 text-xs uppercase tracking-widest text-neutral-500">
              {direction.kicker}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-neutral-100">
              {direction.title}
            </h3>
            <p className="mt-3 flex-1 text-sm text-neutral-400">
              {direction.description}
            </p>
            <span className="mt-6 text-sm font-medium text-neutral-300 transition-colors group-hover:text-neutral-100">
              Подробнее →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
