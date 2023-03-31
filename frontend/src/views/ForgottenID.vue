<script>
import Text from '../components/inputs/Text.vue';
import RectPrimary from '../components/buttons/RectPrimary.vue';


export default {
    components: {
        Text,
        RectPrimary,
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
            class="bg-background-primaryLight h-[320px] mt-[150px] justify-center rounded-lg dark:bg-background-secondaryDark"
        >
            <span
                class="flex flex-col item-center font-bold text-2xl text-foundation-primaryA font-display mt-8 items-center"
                >Bloo!</span
            >
            <Text
                fill="currentColor"
                class="flex flex-col mt-14"
                :label="Label_ID"
                :placeholder= "Placeholder_ID"
            ></Text>
            
            <RectPrimary class="mt-5 m-auto">Send me an email</RectPrimary>
            
        </div>
    </div>
</template>