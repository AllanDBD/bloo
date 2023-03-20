<!--
# Usage (no icon):
<RectSecondary>
    Label
</RectSecondary>

# Usage (with icon):
<RectSecondary>
    <template v-slot:icon>
        <rocket_launch fill="currentColor" width="16px" height="16px" />
    </template>
    Label
</RectSecondary>


-->

<script></script>

<template>
    <button
        class="text-sm font-medium flex h-[36px] w-[256px] flex-row items-center gap-2 rounded-[8px] p-3 text-foundation-primaryA disabled:text-content-disabled border-border-selectedLight disabled:border-border-disabled border-2 hover:border-border-accent bg-transparent hover:text-content-accent"
    >
        <div class="flex w-full flex-row items-center justify-center gap-2 p-0">
            <slot name="icon"></slot>
            <span class="items-center text-center flex">
                <slot></slot>
            </span>
        </div>
    </button>
</template>
