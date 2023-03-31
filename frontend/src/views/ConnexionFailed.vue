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
            class="bg-background-primaryLight h-[555px] mt-[150px] justify-center rounded-lg dark:bg-background-secondaryDark"
        >

        
            <span
                class="flex flex-col font-bold text-2xl text-foundation-primaryA font-display mt-8 items-center"
            >Bloo!</span>
        
            <div class="flex flex-col items-center  h-[50px] w-[250px] bg-red-300 mt-6 m-auto">
                <span
                    class="flex flex-col text-l text-foundation-negative font-display m-auto items-center"
                >Wrong Password or ID</span>  
            </div>

            <Text
                fill="currentColor"
                class="flex flex-col mt-8"
                :label="Label_ID"
                :hint="Hint_ID"
                :placeholder= "Placeholder_ID"
            ></Text>
            <Password class="flex flex-col mt-[34px]" :label="Label_Password"
                :hint="Hint_Password"
                :placeholder= "Placeholder_Password"></Password>
            <RectPrimary class="mt-10 m-auto">Login</RectPrimary>
            <RectSecondary class="mt-4 m-auto">Signup</RectSecondary>
        </div>
    </div>
</template>