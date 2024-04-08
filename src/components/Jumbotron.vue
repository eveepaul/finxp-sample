<script setup lang="ts">
import { Button } from '@/components/shadcn/ui/button';
</script>

<template>
    <main class="flex flex-col justify-between w-full h-screen bg-[#03034f]">
        <section
            class="flex-grow flex items-center justify-center  iban4u h-[300px]"
        >
            <div
                class="container flex flex-col items-center w-4/6 text-slate-50 ">
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
        <section class="h-[298px] p-8 bg-[#07076d]">
            asdasd
        </section>
    </main>
</template>

<style></style>