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
        class="flex h-[36px] w-[256px] flex-row items-center gap-2 rounded-[8px] border-2 border-content-tertiaryLight bg-transparent p-3 text-sm font-medium text-content-tertiaryLight hover:border-border-opaqueLight disabled:border-border-disabled disabled:text-content-disabled dark:border-content-tertiaryDark dark:text-content-tertiaryDark dark:hover:border-border-opaqueDark"
    >
        <div class="flex w-full flex-row items-center justify-center gap-2 p-0">
            <slot name="icon"></slot>
            <span class="flex items-center text-center">
                <slot></slot>
            </span>
        </div>
    </button>
</template>
