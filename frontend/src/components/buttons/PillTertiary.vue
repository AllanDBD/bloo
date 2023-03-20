<!--
# Usage:
<PillSecondary>
    Label
</PillSecondary>

-->

<template>
    <button
        class="flex h-[36px] w-[61px] flex-col items-center justify-center rounded-full border-2 border-content-tertiaryLight bg-transparent text-sm font-medium text-content-tertiaryLight hover:border-border-opaqueLight disabled:border-border-disabled disabled:text-border-disabled dark:border-content-tertiaryDark dark:text-content-tertiaryDark dark:hover:border-border-opaqueDark"
    >
        <div
            class="flex h-full w-full flex-row items-center justify-center pt-1"
        >
            <slot class="flex items-center text-center">Label</slot>
        </div>
    </button>
</template>
