<script setup lang="ts">
import Jumbotron from '@/components/Jumbotron.vue';
import Benefits from '@/components/Benefits.vue';
import Faq from '@/components/Faq.vue';
import Footer from '@/components/Footer.vue';

import { defineAsyncComponent, ref } from 'vue';

import image1 from '@/assets/images/unsplash-1.jpeg';
import image2 from '@/assets/images/unsplash-2.jpeg';
import image3 from '@/assets/images/unsplash-3.jpeg';


const Testimonial = defineAsyncComponent(() =>
  import('@/components/Testimonial.vue')
);

const testimonials = ref([
  {
    name: 'Yves John Paul',
    title: 'Test',
    comment: 'Quas saepe laborum eveniet cupiditate et sed ratione. Hic qui ut tempore ratione. Reiciendis est inventore. Quis occaecati cum qui labore molestias impedit nesciunt ipsa aut.',
    image: image1
  },
  {
    name: 'JKohn Test',
    title: 'Vendor',
    comment: 'Fugit laudantium corporis ipsum a rem.',
    image: image3
  },
  {
    name: 'Angelo',
    title: 'Kaikadi',
    comment: 'Reiciendis dolorem possimuo lorem et reiciendis cumque. Est repellat eius ex quae provident quibusdam eaque quasi reprehenderit. Quis rem perspiciatis commodi rerum vel.',
    image: image2
  }
]);

const benefits = ref([
  {
    title: 'Advantages for Businesses',
    sub: ["laboris nisi ut", "excepteur sint occaecat", "mollit anim id est", "consequat. Duis aute", "incididunt ut labore et", "nisi ut aliquip ex", "pariatur. Excepteur sint", "magna aliqua. Ut enim"],
    img_path: image1,
    image_first: false
  },
  {
    title: 'Key Features',
    sub: ["nisi ut aliquip ex", "laboris nisi ut", "excepteur sint occaecat", "incididunt ut labore et", "pariatur. Excepteur sint", "magna aliqua. Ut enim"],
    img_path: image2,
    image_first: true
  },
  {
    title: 'Peace of mind',
    sub: ["magna aliqua. Ut", "commodo", "xcepteur sint occaecat magna. Ut", "amet, consectetur", "culpa qui", "tempor incididunt", "aute irure dolor",],
    img_path: image3,
    image_first: false
  },
  {
    title: 'Sample section',
    sub: ["commodo", "magna. Ut", "amet, consectetur", "culpa qui", "tempor incididunt", "aute irure dolor", "magna aliqua. Ut", "consequat."],
    img_path: image1,
    image_first: true
  }
]);

</script>

<template>
  <Jumbotron />
  <Benefits :benefits="benefits" />
  <Faq />
  <Testimonial :testimonials="testimonials" />
  <Footer />
</template>

<style scoped></style>
