<script>
export default {
    props: {
        label: String,
        hint: String,
        placeholder: String,
    },
};
</script>

<template>
    <div class="flex flex-col items-start py-0 px-4 gap-2 w-[375px] h-[96px]">
        <span class="text-sm flex flex-col items-start h-6">{{ label }}</span>
        <input
            class="flex flex-row items-center py-2 px-4 gap-4 w-[343px] h-[36px] bg-content-secondaryDark rounded-lg placeholder-content-tertiaryLight text-sm dark:bg-background-primaryDark dark:placeholder-content-secondaryDark focus:outline-foundation-primaryA focus:outline-none focus:ring-2 focus:ring-foundation-primaryA"
            :placeholder="[[placeholder]]"
        />
        <a href="#"
            ><span class="h-5 text-xs"
                ><u>{{ hint }}</u></span
            ></a
        >
    </div>
</template>
