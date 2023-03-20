<template>
    <button
        class="w-[61px] h-[36px] flex flex-col justify-center items-center bg-transparent hover:bg-content-accent hover:text-content-primaryDark border-2 border-border-accent rounded-full font-medium text-content-accent text-sm disabled:bg-border-disabled disabled:border-border-disabled disabled:text-border-opaqueLight"
    >
        <div
            class="flex flex-row justify-center items-center w-full h-full pt-1"
        >
            <slot class="flex items-center text-center">Label</slot>
        </div>
    </button>
</template>
