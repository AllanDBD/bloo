<script>
import TheHelloWorld from '../components/TheHelloWorld.vue';
import RectPrimary from '../components/buttons/RectPrimary.vue';
import RectSecondary from '../components/buttons/RectSecondary.vue';
import rocket_launch from '../components/icons/rocket_launch.vue';
import bed from '../components/icons/bed.vue';

export default {
    components: {
        TheHelloWorld,
        RectPrimary,
        RectSecondary,
        rocket_launch,
        bed,
    },
};
</script>

<template>
    <main class="flex flex-col">
        <TheHelloWorld />
        <RectPrimary class="md:w-[512px] h-[46px] text-base m-auto mt-10">
            <template v-slot:icon>
                <rocket_launch fill="currentColor" width="20px" height="20px" />
            </template>
            Let's Bloo!
        </RectPrimary>
        <RectSecondary
            class="md:w-[512px] h-[46px] text-base m-auto mt-10"
            disabled
        >
            <template v-slot:icon>
                <bed fill="currentColor" width="20px" height="20px" />
            </template>
            I don't care
        </RectSecondary>
    </main>
</template>
