import ImagePlaceholder from "./ImagePlaceholder";
import StubButton from "./StubButton";

const format = [
  "4 месяца",
  "1 раз в неделю",
  "3 часа в день",
  "Обучение проводится в мини-группах по 5–6 человек",
];

const program = [
  {
    period: "1–2 месяц: теория и разработка",
    weeks: [
      {
        title: "1–2 недели",
        text: "Работа над идеей и концепцией проекта. Написание логлайна, определение элементов истории, разработка стиля, тона, жанровых элементов. Девелопмент сеттинга.",
      },
      {
        title: "3–4 недели",
        text: "Разработка персонажей и исследование темы фильма.",
      },
      {
        title: "5–6 недели",
        text: "Девелопмент сюжета фильма и создание поэпизодного плана.",
      },
      {
        title: "7–8 недели",
        text: "Написание первого драфта сценария.",
      },
    ],
  },
  {
    period: "3–4 месяц: работа над сценарием",
    weeks: [
      {
        title: "9–12 недели",
        text: "Индивидуальные консультации, обратная связь, редактура драфтов в онлайн-формате.",
      },
      {
        title: "13–16 недели",
        text: "Групповые читки сценариев и мозговые штурмы, работа с обратной связью и финальная редактура.",
      },
    ],
  },
];

const results = [
  "Библия проекта и сценарий полнометражного фильма",
  "Освоенная методика и инструменты для воплощения новых идей в готовые сценарии",
  "Навык оформления сценарных материалов для участия в питчингах и поиска финансирования",
];

export default function Courses() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500">
              Сценарный курс
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
              GI Courses
            </h2>

            <div className="mt-8 space-y-5 text-neutral-400">
              <p>
                Guiding Idea Courses — это практико-ориентированная программа
                по сценарному мастерству, позволяющая освоить навыки создания
                историй, нацеленных на широкую аудиторию и коммерческий успех.
              </p>
              <p>
                В основе обучения — авторская методика Ефрата Шарипова,
                выросшая из сценарной и преподавательской практики,
                съёмочного опыта и анализа зрительской реакции. Метод
                объединяет классические принципы драматургии с современными
                инструментами сценариста, помогая точно выстраивать
                структурную и смысловую динамику истории.
              </p>
            </div>
          </div>

          <ImagePlaceholder ratio="video" label="Изображение" />
        </div>

        <div className="mt-16 grid gap-10 border-t border-neutral-800 pt-16 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="text-lg font-medium text-neutral-100">
              Формат программы
            </h3>
            <ul className="mt-4 space-y-2 text-neutral-400">
              {format.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-neutral-600">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-neutral-100">
              Стоимость обучения
            </h3>
            <p className="mt-4 text-neutral-400">
              Весь курс — 450 000 тенге.
            </p>
            <p className="mt-2 text-neutral-400">
              Ближайший курс: начало — осень 2026 года.
            </p>
            <div className="mt-6">
              <StubButton variant="solid">Регистрация на курс</StubButton>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-800 pt-16">
          <h3 className="text-lg font-medium text-neutral-100">
            Программа курса
          </h3>
          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            {program.map((block) => (
              <div key={block.period}>
                <p className="text-sm font-medium text-neutral-200">
                  {block.period}
                </p>
                <ul className="mt-4 space-y-4 text-sm text-neutral-400">
                  {block.weeks.map((week) => (
                    <li key={week.title}>
                      <p className="text-neutral-300">{week.title}</p>
                      <p className="mt-1">{week.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-800 pt-16">
          <h3 className="text-lg font-medium text-neutral-100">
            Результат — после окончания курса у вас будет
          </h3>
          <ul className="mt-4 space-y-2 text-neutral-400">
            {results.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-neutral-600">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-neutral-500">
            Бонус: уже с первого модуля студенты начинают работать в
            специальном шаблоне GI Method в Notion — это авторский
            инструмент, который помогает систематизировать работу сценариста
            и разрабатывать истории на профессиональном уровне с нуля. Доступ
            к шаблону остаётся у студента курса.
          </p>
        </div>
      </div>
    </section>
  );
}
