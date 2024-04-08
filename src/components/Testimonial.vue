<script lang="ts" setup>
import { ChevronRight, ChevronLeft } from 'lucide-vue-next';
import { Button } from '@/components/shadcn/ui/button';
import { Opted } from '@/types/opted';
import { ref, computed } from 'vue';

const props = defineProps<{
    testimonials: Opted[];
}>();

const current = ref(0);

const activeTestimony = computed(() => props.testimonials[current.value]);
const next = () => {
    if (current.value < props.testimonials.length - 1) {
        current.value++;
    }
    else {
        current.value = 0;
    }
    console.log('next!', current.value);
};

const prev = () => {
    if (current.value > 0) {
        current.value--;
    } else {
        current.value = props.testimonials.length - 1;
    }
    console.log('prev!', current.value);
};
</script>

<template>
    <div class="flex justify-center w-full">
        <div class="flex flex-col w-1/2">
            <h3 class="text-4xl text-center text-[#03034f]">Why customers opted
                for </h3>

            <div class="flex gap-4 my-10">
                <img
                    :src="activeTestimony.image"
                    alt="test"
                    class="object-cover w-64 h-64 rounded-lg"
                >
                <div
                    class="container flex flex-col justify-between flex-grow rounded-lg shadow-md bg-slate-50">
                    <p class="mt-10"> {{ activeTestimony.comment }}</p>
                    <div class="flex justify-between w-full my-10">
                        <div>
                            <div>{{ activeTestimony.name }}</div>
                            <div>{{ activeTestimony.title }}</div>
                        </div>
                        <div>
                            <Button
                                variant="outline"
                                size="icon"
                                class="rounded-full"
                                @click="prev"
                            >
                                <ChevronLeft class="w-4 h-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                class="rounded-full"
                                @click="next"
                            >
                                <ChevronRight class="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>