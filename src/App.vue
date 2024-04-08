<script setup lang="ts">
import Jumbotron from '@/components/Jumbotron.vue';
import Benefits from '@/components/Benefits.vue';
import Faq from '@/components/Faq.vue';
import Footer from '@/components/Footer.vue';

import { defineAsyncComponent, ref } from 'vue';
import { Opted } from './types/opted';

import image1 from '@/assets/images/unsplash-1.jpeg';
import image3 from '@/assets/images/unsplash-3.jpeg';



const Testimonial = defineAsyncComponent(() =>
  import('@/components/Testimonial.vue')
);


const testimonials = ref<Array<Opted>>([{
  name: 'Yves John Paul',
  title: 'Test',
  comment: 'Quas saepe laborum eveniet cupiditate et sed ratione. Hic qui ut tempore ratione. Reiciendis est inventore. Quis occaecati cum qui labore molestias impedit nesciunt ipsa aut.',
  image: image1
}, {
  name: 'JKohn Test',
  title: 'Vendor',
  comment: 'Fugit laudantium corporis ipsum a rem.',
  image: image3
}])

</script>

<template>
  <Jumbotron />
  <Benefits />
  <Faq />
  <Testimonial :testimonials="testimonials" />
  <Footer />
</template>

<style scoped></style>
