<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/shadcn/ui/accordion';

const defaultValue = 'item-1';

const accordionItems = [
    { value: 'item-1', title: 'Tariatur. Excepteur sint?', content: 'dipisicing elit. Consequatur vitae totam eligendi reiciendis evenie. Ipsam placeat ratione unde at provident officiis laudantium, corporis odit quaerat omnis quas nam praesentium repellat aut facilis ex, itaque veritatis ut.' },
    { value: 'item-2', title: 'Magna aliqua. Ut enim?', content: 'niet, quisquam molestias odit ad. Rerum volupt. Ipsam placeat ratione unde at provident officiis laudantium, corporis odit quaerat omnis quas nam praesentium repellat aut facilis ex, itaque veritatis ut.' },
    { value: 'item-3', title: 'Aute irure dolor?', content: 'm dolor, sit amet consectetur adipisicing elit. Consequatur vitae tota. Ipsam placeat ratione unde at provident officiis laudantium, corporis odit quaerat omnis quas nam praesentium repellat aut facilis ex, itaque veritatis ut.' },
    { value: 'item-4', title: 'Aculpa qui am placeat ratione und?', content: 'Yes! est. Non itaque consequuntur faci. Ipsam placeat ratione unde at provident officiis laudantium, corporis odit quaerat omnis quas nam praesentium repellat aut facilis ex, itaque veritatis ut.' },
    { value: 'item-5', title: 'Irure qui nsectetur adipisicing el?', content: 'it. Consequatur vitae totam eligendi reiciendis eveniet, quisqua. Ipsam placeat ratione unde at provident officiis laudantium, corporis odit quaerat omnis quas nam praesentium repellat aut facilis ex, itaque veritatis ut.' },
];
</script>

<template>
    <main class="flex flex-col items-center justify-center w-full my-20">
        <span class="text-4xl font-bold text-[#03034f]">FAQ</span>
        <section class="w-2/3">
            <Accordion
                type="single"
                class="w-full text-2xl"
                collapsible
                :default-value="defaultValue"
            >
                <AccordionItem
                    v-for="item in accordionItems"
                    :key="item.value"
                    :value="item.value"
                >
                    <AccordionTrigger class="text-[#07076d]">{{ item.title }}
                    </AccordionTrigger>
                    <AccordionContent>
                        {{ item.content }}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    </main>
</template>
<style></style>