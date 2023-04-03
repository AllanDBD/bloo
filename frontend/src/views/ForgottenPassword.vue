<script>
import Text from '../components/inputs/Text.vue';
import RectPrimary from '../components/buttons/RectPrimary.vue';
import RectSecondary from '../components/buttons/RectSecondary.vue';

export default {
    components: {
        Text,
        RectPrimary,
        RectSecondary,
    },

    data() {
        return {
            Label_ID: 'School Email',
            Placeholder_ID: 'FirstName.Name@...',
        };
    },
};
</script>

<template>
    <div
        class="flex flex-container bg-background-secondaryLight justify-center h-full dark:bg-background-primaryDark"
    >
        <div
            class="bg-background-primaryLight h-[440px] my-auto justify-center rounded-lg dark:bg-background-secondaryDark"
        >
            <span
                class="flex flex-col item-center font-bold text-2xl text-foundation-primaryA font-display mt-8 items-center"
                >Bloo!</span
            >

            <div
                class="flex flex-col items-center h-[40px] w-[250px] bg-blue-300 mt-6 m-auto dark:bg-blue-400"
            >
                <span
                    class="flex flex-col text-l text-foundation-primaryB font-display m-auto items-center dark:text-blue-900"
                    >Forgotten Password</span
                >
            </div>

            <Text
                fill="currentColor"
                class="flex flex-col mt-8"
                :label="Label_ID"
                :placeholder="Placeholder_ID"
            ></Text>

            <RectPrimary class="mt-7 m-auto">Send me an email</RectPrimary>

            <RectSecondary class="mt-10 m-auto">Back to Login</RectSecondary>
        </div>
    </div>
</template>
