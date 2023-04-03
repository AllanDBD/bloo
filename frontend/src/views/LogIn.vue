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
            Label_ID: 'Identifiant',
            Hint_ID: 'Forgot my ID',
            Placeholder_ID: 'Identifiant',

            Label_Password: 'Password',
            Hint_Password: 'Forgot my password',
            Placeholder_Password: 'Password',
        };
    },
};
</script>

<template>
    <div
        class="flex flex-container bg-background-secondaryLight justify-center h-full dark:bg-background-primaryDark"
    >
        <div
            class="bg-background-primaryLight h-[550px] my-auto justify-center rounded-lg dark:bg-background-secondaryDark"
        >
            <span
                class="flex flex-col item-center font-bold text-2xl text-foundation-primaryA font-display mt-8 items-center"
                >Bloo!</span
            >
            <Text
                fill="currentColor"
                class="flex flex-col mt-14"
                :label="Label_ID"
                :hint="Hint_ID"
                :placeholder="Placeholder_ID"
            ></Text>
            <Password
                class="flex flex-col mt-[50px]"
                :label="Label_Password"
                :hint="Hint_Password"
                :placeholder="Placeholder_Password"
            ></Password>
            <RectPrimary class="mt-12 m-auto">Login</RectPrimary>
            <RectSecondary class="mt-6 m-auto">Signup</RectSecondary>
        </div>
    </div>
</template>
