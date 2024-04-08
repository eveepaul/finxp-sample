<script setup lang="ts">
import { ref } from 'vue';
import image1 from '@/assets/images/unsplash-1.jpeg';
import image2 from '@/assets/images/unsplash-2.jpeg';
import image3 from '@/assets/images/unsplash-3.jpeg';
const attributes = ref([
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
    <main class="flex flex-col items-center justify-center w-full bg-slate-50">
        <section
            class="flex w-3/4 gap-5 my-20"
            v-for="attribute in attributes"
            :key="attribute.title"
        >
            <div class="flex flex-col justify-center w-1/2 pl-20">
                <h3 class="p-4 pl-0 text-4xl font-bold text-[#03034f]">
                    {{ attribute.title }}</h3>
                <ul
                    class="text-lg font-light leading-10 list-disc list-insid"
                    v-for="properties in attribute.sub"
                    :key="properties"
                >
                    <li>{{ properties }}</li>
                </ul>
            </div>
            <div
                class="flex justify-center w-1/2"
                :class="{ 'order-first': attribute.image_first }"
            >
                <img
                    class="h-[500px] w-3/4 rounded-2xl object-cover shadow-md"
                    :src="attribute.img_path"
                    :alt="`${attribute.title} photo`"
                >
            </div>
        </section>
    </main>
</template>
<style></style>