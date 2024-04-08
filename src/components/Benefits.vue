<script setup lang="ts">
import { Benefit } from '@/types/benefit';


const { benefits } = defineProps<{
    benefits: Benefit[];
}>();
</script>
<template>
    <main class="flex flex-col items-center justify-center w-full bg-slate-50">
        <section
            class="flex w-3/4 gap-5 my-20"
            v-for="benefit in benefits"
            :key="benefit.title"
        >
            <div class="flex flex-col justify-center w-1/2 pl-20">
                <h3 class="p-4 pl-0 text-4xl font-bold text-[#03034f]">
                    {{ benefit.title }}</h3>
                <ul
                    class="text-lg font-light leading-10 list-disc list-insid"
                    v-for="properties in benefit.sub"
                    :key="properties"
                >
                    <li>{{ properties }}</li>
                </ul>
            </div>
            <div
                class="flex justify-center w-1/2"
                :class="{ 'order-first': benefit.image_first }"
            >
                <img
                    class="h-[500px] w-3/4 rounded-2xl object-cover shadow-md"
                    :src="benefit.img_path"
                    :alt="`${benefit.title} photo`"
                >
            </div>
        </section>
    </main>
</template>
<style></style>