<script setup lang="ts">
import { phones } from "~/data/site"

const open = ref(false)
const primaryPhone = phones[0]

function close() {
  open.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="wrap header-inner">
      <a class="wordmark" href="#top" @click="close">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <rect width="32" height="32" rx="6" fill="#14302e" />
          <path
            d="M6 20c3.2-4.2 6.2-4.2 10 0s6.8 4.2 10 0"
            fill="none"
            stroke="#f3ecdf"
            stroke-width="1.6"
            stroke-linecap="round"
          />
          <path
            d="M8 23.5h16"
            fill="none"
            stroke="#d7a15a"
            stroke-width="1.6"
            stroke-linecap="round"
          />
        </svg>
        Своя гавань
      </a>
      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="site-nav"
        @click="open = !open"
      >
        {{ open ? "Закрыть" : "Меню" }}
      </button>
      <nav id="site-nav" class="nav" :class="{ 'is-open': open }">
        <a href="#services" @click="close">Услуги</a>
        <a href="#objects" @click="close">Объекты</a>
        <a href="#contacts" @click="close">Контакты</a>
        <a class="nav-phone" :href="primaryPhone.href" @click="close">{{ primaryPhone.label }}</a>
      </nav>
      <a class="header-phone" :href="primaryPhone.href">{{ primaryPhone.label }}</a>
    </div>
  </header>
</template>
