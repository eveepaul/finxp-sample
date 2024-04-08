<script lang="ts" setup>
import { Button } from '@/components/shadcn/ui/button';
import { Input } from '@/components/shadcn/ui/input';
</script>
<template>

    <div class="flex flex-col justify-center bg-[#07076d] w-full h-[650px]">
        <div class="grid self-center w-3/4 grid-cols-3 mt-20 text-slate-50">
            <div class="grid items-start self-start grid-cols-1">
                <h3 class="mb-2 text-3xl font-bold">Driver Executive Plastic
                </h3>
                <div class="mt-20 text-sm leading-8 text-[#ffffff80]">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Illum adipisci explicabo dolorem, aspernatur assumenda
                        ab?
                        Commodi minima facere qui explicabo culpa est veritatis,
                        ratione, corporis sapiente enim porro, quos maxime.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Illum adipisci explicabo dolorem, aspernatur assumenda
                        ab?
                        Commodi minima facere qui explicabo culpa est veritatis,
                        ratione, corporis sapiente enim porro, quos maxime.</p>
                </div>

            </div>
            <div class="grid self-start grid-cols-1 col-span-2">
                <div
                    class="flex w-full max-w-sm items-center gap-1.5 justify-self-end self-start">
                    <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        class="bg-transparent"
                    />
                    <Button
                        type="submit"
                        class="text-md bg-finBtn hover:bg-finBtnActive text-slate-50"
                    >
                        Subscribe
                    </Button>
                </div>
                <div
                    class="flex justify-between w-2/3 gap-5 mt-20 justify-self-end">
                    <div>
                        <div class="text-[#ffffff80] mb-5"> Products</div>
                        <div>About us</div>
                        <div>Rial Mandatory digital</div>
                        <div>FXTP</div>
                        <div>Optical</div>
                    </div>
                    <div>
                        <div class="text-[#ffffff80] mb-5"> Company</div>
                        <div>About us</div>
                        <div>News Letter</div>
                        <div>Test</div>
                        <div>Sitemap</div>
                    </div>
                    <div>
                        <div class="text-[#ffffff80] mb-5"> Support</div>
                        <div>FAQ</div>
                        <div>Granite</div>
                        <div>Open-architected</div>
                        <div>About us</div>
                    </div>
                </div>
            </div>
        </div>
        <hr
            class="self-center w-3/4 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    </div>
</template>

<style></style>