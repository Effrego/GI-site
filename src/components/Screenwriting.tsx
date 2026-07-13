import ImagePlaceholder from "./ImagePlaceholder";
import StubButton from "./StubButton";

export default function Screenwriting() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16">
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

          <ImagePlaceholder ratio="video" label="Изображение" className="md:mt-20" />
        </div>

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
              <StubButton variant="solid">Запросить КП</StubButton>
              <StubButton variant="outline">Связаться по телефону</StubButton>
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
              <StubButton variant="solid">Подать заявку в авторский пул</StubButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
