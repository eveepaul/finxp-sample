<script setup lang="ts">
import Jumbotron from '@/components/Jumbotron.vue';
import Benefits from '@/components/Benefits.vue';
import Faq from '@/components/Faq.vue';
import Footer from '@/components/Footer.vue';

import { defineAsyncComponent } from 'vue';

const Testimonial = defineAsyncComponent(() =>
  import('@/components/Testimonial.vue')
)

</script>

<template>
  <Jumbotron />
  <Benefits />
  <Faq />
  <Testimonial />
  <Footer />
</template>

<style scoped></style>
