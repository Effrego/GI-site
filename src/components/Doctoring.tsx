import ImagePlaceholder from "./ImagePlaceholder";
import StubButton from "./StubButton";

const services = [
  {
    title: "Сценарный фидбэк",
    description:
      "Свежий и профессиональный взгляд на ваш сценарий. Мы подготовим структурированный фидбэк в самые краткие сроки.",
    items: [
      "Внимательное прочтение материала (сценарий / сценарная заявка)",
      "Устный или краткий письменный разбор: общее впечатление, обзор проблемных моментов, сильные и слабые стороны истории",
      "Ответы на ваши вопросы",
    ],
  },
  {
    title: "Сценарный консалтинг",
    description:
      "Углубленное изучение вашей истории, выявление проблемных элементов, поиск решений. Мы отдельно разберём каждый аспект вашей истории: концепцию, сеттинг, персонажей, внешние и внутренние конфликты, сюжетную структуру. Анализ занимает от нескольких дней до двух недель.",
    items: [
      "Документ с детальным разбором вашей истории и определением драматургических ошибок",
      "Подробные рекомендации по «лечению» слабых мест истории",
      "Личная встреча для консультации",
    ],
  },
  {
    title: "Сценарное сопровождение",
    description:
      "Регулярные консультативные встречи со сценаристом — вы пишете, мы сопровождаем. Еженедельные читки, анализ, «разгоны» и консультации. Сопровождение предполагает структурированный поэтапный подход и занимает от двух месяцев и больше.",
    items: [
      "4 встречи в месяц (брейнштормы и трекинг прогресса)",
      "Читка и анализ новых материалов и драфтов между встречами",
      "Помощь в «разгоне» истории на каждом этапе",
    ],
  },
  {
    title: "Докторинг",
    description:
      "Обновлённая версия сценария на основе вашей идеи. После глубокого анализа вы получите полный разбор с объяснением, что именно стоит доработать и почему, а также план переработки. В зависимости от запроса это может быть целенаправленная работа над конкретными сценами и диалогами или полная переработка истории с сохранением вашей основной идеи. Докторинг занимает от 3 до 5 месяцев.",
    items: [
      "Профессиональная переработка сценария",
      "Правка структуры, сцен, диалогов",
      "Финальная версия высокого качества",
    ],
  },
];

export default function Doctoring() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500">
              «Лечение» сценариев
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
              GI Doctoring
            </h2>
            <p className="mt-8 text-neutral-400">
              Guiding Idea Doctoring предлагает профессиональную помощь в
              работе над вашим сценарием. Если вам необходима консультация по
              отдельным аспектам истории или помощь в доработке уже
              написанного материала — мы поддержим вас на любом этапе.
            </p>
          </div>

          <ImagePlaceholder ratio="video" label="Изображение" />
        </div>

        <div className="mt-16 grid gap-6 border-t border-neutral-800 pt-16 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 rounded-lg border border-neutral-800 p-6"
            >
              <ImagePlaceholder ratio="square" label="Иконка" className="w-12" />
              <h3 className="text-lg font-medium text-neutral-100">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-400">{service.description}</p>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-600">
                  Что вы получите
                </p>
                <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-neutral-600">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <StubButton variant="solid">Запросить прайс-лист</StubButton>
          <StubButton variant="outline">Связаться по телефону</StubButton>
        </div>
      </div>
    </section>
  );
}
