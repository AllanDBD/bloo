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
        class="flex h-[36px] w-[256px] flex-row items-center gap-2 rounded-[8px] border-2 border-border-selectedLight bg-transparent p-3 text-sm font-medium text-foundation-primaryA hover:border-border-accent hover:text-content-accent disabled:border-border-disabled disabled:text-content-disabled"
    >
        <div class="flex w-full flex-row items-center justify-center gap-2 p-0">
            <slot name="icon"></slot>
            <span class="flex items-center text-center">
                <slot></slot>
            </span>
        </div>
    </button>
</template>
