<script>
import TheHelloWorld from '../components/TheHelloWorld.vue';
import RectPrimary from '../components/buttons/RectPrimary.vue';
import rocket_launch from '../components/icons/rocket_launch.vue';
import PillTertiary from '../components/buttons/PillTertiary.vue';

export default {
    components: {
        TheHelloWorld,
        RectPrimary,
        rocket_launch,
        PillTertiary,
    },
};
</script>

<template>
    <main class="flex flex-col">
        <TheHelloWorld />
        <RectPrimary class="m-auto mt-10 h-[46px] text-base md:w-[512px]">
            <template v-slot:icon>
                <rocket_launch fill="currentColor" width="20px" height="20px" />
            </template>
            Let's Bloo!
        </RectPrimary>
        <PillTertiary class="m-auto mt-10" />
    </main>
</template>
