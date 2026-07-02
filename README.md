# Hotel Management Solutions (HMS)

Корпоративный сайт управляющей компании гостиничных активов в Санкт-Петербурге
(5 объектов под управлением). Институциональный редакционный стиль уровня
инвестиционного отчёта JLL / CBRE: типографика как основной инструмент, воздух,
тонкие линии, асимметрия — не SaaS и не дашборд.

## Дизайн

- Фон `#F6F5F2`, графит `#1C1F26`, акцент `#2F6BFF`, линии `#DADCE0`.
- Типографика: **Inter** (текст) + **Source Serif 4** (заголовки).
- Без карточек, сеток-как-основы, dashboard-интерфейсов, glassmorphism и
  icon-driven UI. Текст > UI.
- Framer Motion — только мягкое появление секций (уважает `prefers-reduced-motion`).

## Технологии

- **Next.js 14** (App Router, server-first — почти всё статически пререндерится)
- **TypeScript**
- **Tailwind CSS** (минимально, на токенах)
- **Framer Motion** (только fade-in)
- SEO-first (metadata, OpenGraph, sitemap, robots, JSON-LD), `lang="ru"`

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Структура

```
app/
  page.tsx              # Hero → О компании → Чем мы занимаемся → Подход →
                        # Портфель → Результаты → Владельцам → Контакты
  objects/              # Портфель (список)
  objects/[id]/         # Страница объекта (SSG + динамические metadata)
  services/             # Услуги (чем мы занимаемся)
  cases/                # Результаты (кейсы, до/после)
  about/                # О компании
  contacts/             # Контакты (реквизиты + форма запроса)
  layout.tsx sitemap.ts robots.ts manifest.ts icon.svg not-found.tsx

sections/               # Секции главной: Hero, About, Services, Approach,
                        # Portfolio, Results, Owners, Contacts, CTA
components/             # ObjectRow, Layer, PageHeader, BeforeAfter, ContactForm,
                        # Navbar, Footer, Logo, Button, Container, Reveal, …
data/                   # assets, system (about / services / approach / results /
                        # owners), cases, company, types
lib/                    # site config + utils
```

## Подготовлено к развитию

- Единый источник данных (`lib/site.ts`) и типизированная доменная модель
  (`data/types.ts`) под будущие разделы (кабинет собственника, отчётность, CRM).
- Отправка формы вынесена в `submit()` — легко подключить API/CRM.

> Названия объектов и показатели — демонстрационные данные. Перед запуском
> замените их и контакты в `lib/site.ts` на реальные.
