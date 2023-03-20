<!--
# Usage (no icon):
<RectPrimary>
    Label
</RectPrimary>

# Usage (with icon):
<RectPrimary>
    <template v-slot:icon>
        <rocket_launch fill="currentColor" width="16px" height="16px" />
    </template>
    Label
</RectPrimary>


-->

<script></script>

<template>
    <button
        class="flex h-[36px] w-[256px] flex-row items-center gap-2 rounded-[8px] p-3 text-content-primaryDark disabled:text-content-disabled bg-foundation-primaryA disabled:bg-background-disabled hover:bg-content-accent"
    >
        <div
            class="flex h-[16px] w-[232px] flex-row items-center justify-center gap-2 p-0"
        >
            <slot name="icon"></slot>
            <span
                class="items-center text-center flex h-[16px] w-[37px] text-sm font-medium"
            >
                <slot></slot>
            </span>
        </div>
    </button>
</template>
