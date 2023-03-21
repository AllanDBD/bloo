<script>
import TheHelloWorld from '../components/TheHelloWorld.vue';
import RectPrimary from '../components/buttons/RectPrimary.vue';
import rocket_launch from '../components/icons/rocket_launch.vue';
import PillSecondary from '../components/buttons/PillSecondary.vue';
import Text from '../components/inputs/Text.vue';

export default {
    components: {
        TheHelloWorld,
        RectPrimary,
        rocket_launch,
        PillSecondary,
        Text,
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
        <PillSecondary class="m-auto mt-10" />
    </main>
</template>
