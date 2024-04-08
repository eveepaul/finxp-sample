<script setup lang="ts">
import { Button } from '@/components/shadcn/ui/button';
import { GlobeAltIcon, Square3Stack3DIcon, CurrencyEuroIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <main class="flex flex-col justify-between w-full h-screen bg-[#03034f]">
        <section
            class="flex-grow flex items-center justify-center  iban4u h-[300px]"
        >
            <div
                class="container flex flex-col items-center w-4/6 gap-4 text-slate-50">
                <h1 class="font-bold text-8xl">IBAN4U</h1>
                <h3 class="text-4xl">veritatis ducimus alias maxime dolore</h3>
                <p class="text-xl text-center">Lorem ipsum, dolor sit amet
                    consectetur
                    adipisicing elit.
                    Accusamus similique quis, . Molestiae
                    voluptatum quo ex possimus praesentium. Id.</p>
                <Button
                    variant="secondary"
                    class="mt-4 text-md bg-finBtn hover:bg-finBtnActive text-slate-50"
                >Open an Account</Button>
            </div>
        </section>
        <section
            class="h-[298px] p-8 bg-[#07076d] flex justify-center gap-8 items-center"
        >
            <div
                class="w-[400px] bg-slate-50 rounded-lg h-[180px] flex flex-col items-center justify-center">
                <GlobeAltIcon class="w-16 h-16" />
                <p class="px-10 pt-3 text-center">Lorem ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Vel
                    numquam</p>
            </div>
            <div
                class="w-[400px] bg-slate-50 rounded-lg h-[180px] flex flex-col items-center justify-center">
                <Square3Stack3DIcon class="w-16 h-16" />
                <p class="px-10 pt-3 text-center">Lorem ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Vel
                    numquam</p>
            </div>
            <div
                class="w-[400px] bg-slate-50 rounded-lg h-[180px] flex flex-col items-center justify-center">
                <CurrencyEuroIcon class="w-16 h-16" />
                <p class="px-10 pt-3 text-center">Lorem ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Vel
                    numquam</p>
            </div>
        </section>
    </main>
</template>

<style></style>