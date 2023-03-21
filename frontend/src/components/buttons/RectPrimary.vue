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
        class="flex h-[36px] w-[256px] flex-row items-center gap-2 rounded-[8px] bg-foundation-primaryA p-3 text-sm font-medium text-content-primaryDark hover:bg-content-accent disabled:bg-background-disabled disabled:text-content-disabled dark:disabled:bg-background-disabled dark:disabled:text-content-disabled"
    >
        <div class="flex w-full flex-row items-center justify-center gap-2 p-0">
            <slot name="icon"></slot>
            <span class="flex items-center text-center">
                <slot></slot>
            </span>
        </div>
    </button>
</template>
