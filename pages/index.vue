<script setup lang="ts">
import {
  allObjectsLink,
  collections,
  contacts,
  facts,
  jivoWidgetId,
  perks,
  phones,
  services,
  site,
} from "~/data/site"

const config = useRuntimeConfig()
const siteUrl = String(config.public.siteUrl).replace(/\/$/, "")
const pageUrl = `${siteUrl}/`
const imageUrl = `${siteUrl}/images/hero.webp`

useSeoMeta({
  title: site.title,
  description: site.description,
  ogTitle: site.title,
  ogDescription: site.description,
  ogType: "website",
  ogUrl: pageUrl,
  ogImage: imageUrl,
  ogLocale: "ru_RU",
  ogSiteName: site.name,
  twitterCard: "summary_large_image",
  twitterTitle: site.title,
  twitterDescription: site.description,
  twitterImage: imageUrl,
})

useHead({
  link: [
    { rel: "canonical", href: pageUrl },
    { rel: "dns-prefetch", href: "//code.jivosite.com" },
    { rel: "preload", as: "image", href: "/images/hero.webp", fetchpriority: "high" },
  ],
  script: [
    { src: `https://code.jivosite.com/widget/${jivoWidgetId}`, async: true },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        name: site.name,
        legalName: site.legalName,
        url: pageUrl,
        image: imageUrl,
        telephone: phones.map((phone) => phone.href.replace("tel:", "")),
        email: contacts.email,
        taxID: contacts.unp,
        address: {
          "@type": "PostalAddress",
          streetAddress: "ул. Ольшевского, 20/11, офис 101",
          addressLocality: "Минск",
          addressCountry: "BY",
        },
        openingHours: "Mo-Su 10:00-19:00",
        sameAs: [contacts.instagram, allObjectsLink],
      }),
    },
  ],
})
</script>

<template>
  <div id="top">
    <SiteHeader />
    <main id="main">
      <section class="hero">
        <div class="wrap hero-grid">
          <div>
            <h1>Своя гавань для вашей недвижимости</h1>
            <p class="lead">
              Профессиональные участники рынка с опытом более 7 лет. Полный спектр услуг по
              покупке, продаже и аренде квартир, загородной и коммерческой недвижимости.
            </p>
            <p class="lead lead-soft">
              Для нас не существует нерешаемых задач. Ваши интересы — наш приоритет.
            </p>
            <div class="actions">
              <a class="button button-primary" :href="phones[0].href">Позвонить</a>
              <a class="button button-ghost" href="#objects">Смотреть объекты</a>
            </div>
          </div>
          <figure class="hero-photo">
            <img
              src="/images/hero.webp"
              width="1400"
              height="934"
              alt="Современный дом с панорамными окнами и освещённой террасой"
              fetchpriority="high"
            />
          </figure>
        </div>
      </section>

      <section class="facts" aria-label="Об агентстве">
        <ul class="wrap facts-list">
          <li v-for="fact in facts" :key="fact.value">
            <strong>{{ fact.value }}</strong>
            <span>{{ fact.text }}</span>
          </li>
        </ul>
      </section>

      <section id="services" class="section">
        <div class="wrap split">
          <div>
            <h2>Работаем с заботой о клиенте</h2>
            <ul class="service-list">
              <li v-for="service in services" :key="service.title">
                <h3>{{ service.title }}</h3>
                <p>{{ service.text }}</p>
              </li>
            </ul>
          </div>
          <figure class="side-photo">
            <img
              src="/images/interior.webp"
              width="1200"
              height="816"
              alt="Светлая гостиная, совмещённая с кухней и выходом на террасу"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section class="perks">
        <div class="wrap">
          <h2>Балуем своих</h2>
          <ul class="perk-list">
            <li v-for="perk in perks" :key="perk">{{ perk }}</li>
          </ul>
        </div>
      </section>

      <section id="objects" class="section">
        <div class="wrap">
          <ul class="collection-list">
            <li v-for="item in collections" :key="item.href">
              <a :href="item.href" target="_blank" rel="noopener noreferrer">
                <span>{{ item.title }}</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </li>
          </ul>
          <div class="actions">
            <a class="button button-dark" :href="allObjectsLink" target="_blank" rel="noopener noreferrer">
              Все объекты агентства
            </a>
          </div>
        </div>
      </section>

      <ContactsSection />
    </main>
    <SiteFooter />
  </div>
</template>
