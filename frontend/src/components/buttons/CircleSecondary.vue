<!--
# Usage (text):
<CircleSecondary>
    Label
</CircleSecondary>

# Usage (icon):
<CircleSecondary>
    <rocket_launch fill="currentColor" width="16px" height="16px"/>
</CircleSecondary>
-->

<template>
    <button
        class="hover:text-content-selecte flex h-9 w-9 flex-row items-center justify-center gap-[10px] rounded-full border-2 border-content-secondaryLight text-sm font-medium leading-[14px] text-content-secondaryLight hover:border-content-selected hover:text-content-selected disabled:border-border-disabled disabled:text-content-disabled dark:border-content-secondaryDark dark:text-content-secondaryDark dark:hover:border-content-selected dark:hover:text-content-selected dark:disabled:border-border-disabled dark:disabled:text-content-disabled"
    >
        <slot> 01 </slot>
    </button>
</template>
