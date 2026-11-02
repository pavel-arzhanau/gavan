<script setup lang="ts">
import { contacts, site } from "~/data/site"
</script>

<template>
  <footer class="site-footer">
    <div class="wrap footer-inner">
      <p>{{ site.legalName }} · УНП {{ contacts.unp }}</p>
      <p>
        Лицензия {{ contacts.license }}, {{ contacts.licensor }}. Страховое свидетельство
        {{ contacts.insurance }}.
      </p>
      <p>{{ contacts.legalAddress }}</p>
    </div>
  </footer>
</template>
