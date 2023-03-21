<!--
# Usage (text):
<CircleTertiary>
    Label
</CircleTertiary>

# Usage (icon):
<CircleTertiary>
    <rocket_launch fill="currentColor" width="16px" height="16px"/>
</CircleTertiary>
-->

<template>
    <button
        class="hover:text-content-selecte flex h-9 w-9 flex-row items-center justify-center gap-[10px] rounded-full border-2 border-content-tertiaryLight text-sm font-medium leading-[14px] text-content-tertiaryLight hover:border-border-opaqueLight  disabled:border-border-disabled disabled:text-content-disabled dark:border-content-tertiaryDark dark:text-content-tertiaryDark dark:hover:border-content-selected dark:hover:text-content-selected dark:disabled:border-border-disabled dark:disabled:text-content-disabled"
    >
        <slot> 01 </slot>
    </button>
</template>
