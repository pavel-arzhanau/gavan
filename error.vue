<script setup lang="ts">
import { site } from "~/data/site"

useSeoMeta({
  title: `Страница не найдена — ${site.name}`,
  robots: "noindex",
})
</script>

<template>
  <div>
    <SiteHeader />
    <main id="main" class="wrap error-page">
      <p class="eyebrow">404</p>
      <h1>Такой страницы нет</h1>
      <p>Вернитесь на главную — там услуги, объекты и контакты агентства.</p>
      <NuxtLink class="button button-dark" to="/">На главную</NuxtLink>
    </main>
    <SiteFooter />
  </div>
</template>
