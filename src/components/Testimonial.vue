<script lang="ts" setup>
import { ChevronRight, ChevronLeft } from 'lucide-vue-next';
import { Button } from '@/components/shadcn/ui/button';
</script>
<template>
    <div class="flex justify-center w-full">
        <div class="flex flex-col w-1/2">
            <h3 class="text-4xl text-center text-[#03034f]">Why customers opted
                for </h3>

            <div class="flex gap-4 my-10">
                <img
                    src="@/assets/images/unsplash-1.jpeg"
                    alt="test"
                    class="object-cover w-64 h-64 rounded-lg"
                >
                <div
                    class="container flex flex-col items-center justify-center flex-grow rounded-lg shadow-md bg-slate-50">
                    <p> Lorem
                        ipsum dolor sit amet consectetur
                        adipisicing elit. Cum, accusamus. Earum neque temporibus
                        quis praesentium animi, eius facilis provident
                        reiciendis
                        ex, minima magni unde architecto sunt nemo accusantium
                        asperiores a.</p>
                    <div class="flex justify-between w-full mt-10">
                        <div>
                            <div>Yves John Paul</div>
                            <div>Test</div>
                        </div>
                        <div>
                            <Button
                                variant="outline"
                                size="icon"
                                class="rounded-full"
                            >
                                <ChevronLeft class="w-4 h-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                class="rounded-full"
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



<style></style>