<script>
import Text from '../components/inputs/Text.vue';
import Password from '../components/inputs/Password.vue';
import eye from '../components/icons/eye.vue';
import RectPrimary from '../components/buttons/RectPrimary.vue';
import RectSecondary from '../components/buttons/RectSecondary.vue';

export default {
    components: {
        Text,
        Password,
        eye,
        RectPrimary,
        RectSecondary,
    },

    data() {
        return {
            Label: 'ID / Email',
            Hint: 'Forgot my ID',
            Placeholder: 'Student ID or email adress',
        };
    },
};
</script>

<template>
    <div
        class="flex flex-container bg-background-secondaryLight justify-center h-full dark:bg-background-primaryDark"
    >
        <div
            class="bg-background-primaryLight h-[550px] mt-[150px] justify-center rounded-lg dark:bg-background-secondaryDark"
        >
            <span
                class="flex flex-col item-center font-bold text-2xl text-foundation-primaryA font-display mt-8 items-center"
                >Bloo!</span
            >
            <Text
                fill="currentColor"
                class="flex flex-col mt-14"
                :label="Label"
                :hint="Hint"
                :placeholder= "Placeholder"
            ></Text>
            <Password class="flex flex-col mt-[50px]"></Password>
            <RectPrimary class="mt-12 m-auto">Login</RectPrimary>
            <RectSecondary class="mt-6 m-auto">Signup</RectSecondary>
        </div>
    </div>
</template>
