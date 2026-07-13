import Link from "next/link";
import Image from "next/image";

export default function Screenwriting() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Main content - 2 columns */}
        <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16">
          {/* Left: Illustration */}
          <div className="relative h-96 w-full overflow-hidden rounded-lg md:sticky md:top-24">
            <Image
              src="/images/Octo-screenwriting.png"
              alt="Screenwriting octopus"
              fill
              className="object-contain"
            />
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500">
              Разработка сценариев
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
              GI Screenwriting
            </h2>

            <div className="mt-8 space-y-5 text-neutral-400">
              <p>
                Мы занимаемся полным циклом работы с творческими идеями — от
                замысла до воплощения в готовые сценарные проекты для кино,
                сериалов и театра.
              </p>
              <p>
                Более 15 лет опыта в индустрии — это гарантия качества на
                каждом этапе разработки: от концепции до финального драфта. Мы
                тщательно прорабатываем библии персонажей, тематические
                конфликты и сюжетные структуры, держа в фокусе художественную
                ценность, актуальность посылов и интерес зрителя.
              </p>
              <p>
                Вы можете обратиться к нам для работы над вашими историями или
                познакомиться с готовыми сценариями, созданными в наших
                авторских комнатах.
              </p>
            </div>
          </div>
        </div>

        {/* Collaboration sections */}
        <div className="mt-16 grid gap-8 border-t border-neutral-800 pt-16 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="text-lg font-medium text-neutral-100">
              Сотрудничество — для продюсеров и заказчиков
            </h3>
            <p className="mt-4 text-neutral-400">
              Если вы ищете пути реализации своей идеи или хотите приобрести
              права на готовый сценарий — мы готовы помочь на любом этапе.
              Сформируем коммерческое предложение под вашу задачу: с
              концепцией, командой и структурой работы.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contacts"
                className="inline-block rounded-full border border-neutral-300 px-6 py-2 text-sm font-medium text-neutral-100 transition-colors hover:border-neutral-100"
              >
                Запросить КП
              </Link>
              <Link
                href="/contacts"
                className="inline-block rounded-full border border-neutral-700 px-6 py-2 text-sm font-medium text-neutral-400 transition-colors hover:border-neutral-500 hover:text-neutral-300"
              >
                Связаться по телефону
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-neutral-100">
              Сотрудничество — для авторов
            </h3>
            <p className="mt-4 text-neutral-400">
              Если вы сценарист, хотите работать в команде и расти
              профессионально — подайте заявку в авторский пул Guiding Idea.
              Мы приглашаем в проекты, соответствующие вашему опыту, жанровым
              интересам и сильным сторонам.
            </p>
            <div className="mt-6">
              <Link
                href="/contacts"
                className="inline-block rounded-full border border-neutral-300 px-6 py-2 text-sm font-medium text-neutral-100 transition-colors hover:border-neutral-100"
              >
                Подать заявку в авторский пул
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
