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
            ID: 'ID / Email',
            Forgot: 'Forgot my ID',
            Placeholder: 'Student ID or email adress',
        };
    },
};
</script>

<template>
    <div
        class="flex flex-container bg-background-secondaryLight justify-center h-[1100px] dark:bg-background-primaryDark"
    >
        <div
            class="bg-background-primaryLight h-[550px] my-auto justify-center rounded-lg dark:bg-background-secondaryDark"
        >
            <span
                class="flex flex-col font-bold text-2xl text-foundation-primaryA font-display mt-8 items-center"
                >Bloo!</span
            >
            <Text
                fill="currentColor"
                class="flex flex-col mt-14"
                :label="ID"
                :hint="Forgot"
                :placeholder="Placeholder"
            ></Text>
            <Password class="flex flex-col mt-[50px]"></Password>
            <RectPrimary class="mt-12 m-auto">Login</RectPrimary>
            <RectSecondary class="mt-6 m-auto">Sign Up</RectSecondary>
        </div>
    </div>
</template>
