<script setup lang="ts">
import { contacts, phones } from "~/data/site"
</script>

<template>
  <section id="contacts" class="section">
    <div class="wrap contacts-grid">
      <div class="contact-card">
        <h2>Приезжайте в гости</h2>
        <p class="plain">
          {{ contacts.address }}, {{ contacts.floor }}. Ежедневно с
          {{ contacts.hours.replace("–", " до ") }}.
        </p>
        <ul class="phone-list">
          <li v-for="phone in phones" :key="phone.href">
            <a class="phone-link" :href="phone.href">{{ phone.label }}</a>
          </li>
        </ul>
        <a class="mail-link" :href="`mailto:${contacts.email}`">{{ contacts.email }}</a>
        <div class="messengers">
          <a :href="contacts.telegram" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a :href="contacts.viber">Viber</a>
          <a :href="contacts.instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div class="actions">
          <a class="button button-primary" :href="phones[0].href">Позвонить</a>
          <a class="button button-outline" :href="contacts.mapLink" target="_blank" rel="noopener noreferrer">
            Маршрут
          </a>
        </div>
      </div>
      <div class="map-panel">
        <iframe
          :src="contacts.mapEmbed"
          loading="lazy"
          title="Офис агентства «Своя Гавань» на карте: Минск, улица Ольшевского, 20/11"
        />
      </div>
    </div>
  </section>
</template>
