<!--
# Usage:
<PillSecondary>
    Label
</PillSecondary>

-->

<template>
    <button
        class="flex h-[36px] w-[61px] flex-col items-center justify-center rounded-full border-2 border-border-accent bg-transparent text-sm font-medium text-content-accent hover:bg-content-accent hover:text-content-primaryDark disabled:border-border-disabled disabled:bg-border-disabled disabled:text-border-opaqueLight"
    >
        <div
            class="flex h-full w-full flex-row items-center justify-center pt-1"
        >
            <slot class="flex items-center text-center">Label</slot>
        </div>
    </button>
</template>
