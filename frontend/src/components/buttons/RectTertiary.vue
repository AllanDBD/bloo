<!--
# Usage (no icon):
<RectTertiary>
    Label
</RectTertiary>

# Usage (with icon):
<RectTertiary>
    <template v-slot:icon>
        <rocket_launch fill="currentColor" width="16px" height="16px" />
    </template>
    Label
</RectTertiary>


-->

<script></script>

<template>
    <button
        class="text-sm font-medium flex h-[36px] w-[256px] flex-row items-center gap-2 rounded-[8px] p-3 bg-transparent border-2 text-content-tertiaryLight dark:text-content-tertiaryDark border-content-tertiaryLight dark:border-content-tertiaryDark hover:border-border-opaqueLight dark:hover:border-border-opaqueDark disabled:text-content-disabled disabled:border-border-disabled"
    >
        <div class="flex w-full flex-row items-center justify-center gap-2 p-0">
            <slot name="icon"></slot>
            <span class="items-center text-center flex">
                <slot></slot>
            </span>
        </div>
    </button>
</template>
