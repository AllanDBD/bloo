<script>
import Text from '../components/inputs/Text.vue';
import Password from '../components/inputs/Password.vue';
import eye from '../components/icons/eye.vue';
import RectPrimary from '../components/buttons/RectPrimary.vue';

export default {
    components: {
        Text,
        Password,
        eye,
        RectPrimary,
    },

    data() {
        return {
            Label_ID: 'Identifiant',
            Placeholder_ID: 'Identifiant',

            Label_Password1: 'Create a password',
            Placeholder_Password1: 'Create a password',

            Label_Password2: 'Validate the password',
            Placeholder_Password2: 'Validate the password',
        };
    },
};
</script>

<template>
    <div
        class="flex flex-container bg-background-secondaryLight justify-center h-full dark:bg-background-primaryDark"
    >
        <div
            class="bg-background-primaryLight h-[490px] my-auto justify-center rounded-lg dark:bg-background-secondaryDark"
        >
            <span
                class="flex flex-col item-center font-bold text-2xl text-foundation-primaryA font-display mt-8 items-center"
                >Bloo!</span
            >
            <Text
                fill="currentColor"
                class="flex flex-col mt-14"
                :label="Label_ID"
                :placeholder="Placeholder_ID"
            ></Text>
            <Password
                :label="Label_Password1"
                :placeholder="Placeholder_Password1"
            ></Password>
            <Password
                :label="Label_Password2"
                :placeholder="Placeholder_Password2"
            ></Password>
            <RectPrimary class="mt-6 m-auto">Create</RectPrimary>
        </div>
    </div>
</template>
