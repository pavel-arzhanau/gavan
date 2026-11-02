const agencyUuid = "e9ad7d70-64db-11ed-a014-e9413d9fc232"
const selection = `agencyUuids=${agencyUuid}&seller=false`

export const site = {
  name: "Своя Гавань",
  legalName: "ООО «Своя гавань»",
  title: "Своя Гавань — агентство недвижимости в Минске",
  description:
    "Покупка, продажа и аренда квартир, домов и коммерческой недвижимости в Минске и по Беларуси. Опыт более 7 лет. Офис: ул. Ольшевского, 20/11.",
}

/** ID виджета JivoChat (тот же, что на gavan.by). */
export const jivoWidgetId = "uxfsSmIS4i"

export const phones = [
  { label: "+375 (29) 150-77-22", href: "tel:+375291507722" },
  { label: "+375 (29) 335-40-70", href: "tel:+375293354070" },
]

export const contacts = {
  email: "svoyagavan7@gmail.com",
  address: "г. Минск, ул. Ольшевского, 20/11, офис 101",
  floor: "цокольный этаж (−1)",
  legalAddress: "г. Минск, ул. Ольшевского, д. 20/11, пом. 8",
  unp: "193650887",
  license: "02240/453 от 10.11.2022",
  licensor: "Министерство юстиции Республики Беларусь",
  insurance: "0004363",
  hours: "10:00–19:00",
  instagram: "https://instagram.com/svoyagavan",
  telegram: "https://t.me/+375293354070",
  viber: "viber://add?number=375291507722",
  mapEmbed:
    "https://yandex.ru/map-widget/v1/?um=constructor%3A7bf506f114d00e2acc823c77bd7ad6f9ebfa0dcdad96b8b592a2c0053bc495e3&source=constructor",
  mapLink:
    "https://yandex.by/maps/?text=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9E%D0%BB%D1%8C%D1%88%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%2020%2F11",
}

/** Ссылки на текущие объявления агентства. */
export const collections = [
  { title: "Квартиры", href: `https://realt.by/belarus/sale/flats/?${selection}` },
  { title: "Дома и коттеджи", href: `https://realt.by/belarus/sale/cottages/?${selection}` },
  { title: "Дачи", href: `https://realt.by/belarus/sale/dachi/?${selection}` },
  { title: "Участки", href: `https://realt.by/belarus/sale/plots/?${selection}` },
  { title: "Коммерческая недвижимость", href: `https://realt.by/belarus/sale/shops/?${selection}` },
  { title: "Аренда", href: `https://realt.by/belarus/rent/shops/?${selection}` },
]

export const allObjectsLink = "https://realt.by/agency/svoya-gavan/"

export const facts = [
  { value: "7+", text: "лет на рынке недвижимости" },
  { value: "24/7", text: "на связи, 365 дней в году" },
  { value: "Бесплатно", text: "фотосессия, оценка и консультация" },
]

export const services = [
  {
    title: "Квартиры и комнаты",
    text: "Покупка и продажа на вторичном рынке и в новостройках.",
  },
  {
    title: "Дома, коттеджи, дачи, участки",
    text: "Охват объектов — вся страна. Любая форма собственности.",
  },
  {
    title: "Коммерческая недвижимость",
    text: "Офисы, административные здания, склады и другие объекты.",
  },
  {
    title: "Подбор недвижимости",
    text: "Сопровождаем до получения правоустанавливающих документов.",
  },
]

export const perks = [
  "Фотосессия, оценка, консультации — бесплатно",
  "Уютный офис, удобное расположение, гибкие условия сотрудничества для всех",
  "Уверены в своих силах? Расскажем, как всё сделать самостоятельно — без агентств",
]
