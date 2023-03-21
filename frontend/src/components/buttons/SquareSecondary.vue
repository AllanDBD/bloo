<script>
import rocket_launch from '../icons/rocket_launch.vue';
export default {
    components: {
        rocket_launch,
    },
};
</script>

<template>
    <button
        class="flex h-9 w-9 flex-row items-center justify-center gap-2 rounded-lg border-2 border-content-secondaryLight bg-transparent text-content-secondaryLight hover:border-content-selected hover:text-content-selected disabled:border-border-disabled disabled:text-content-disabled dark:border-content-secondaryDark dark:text-content-secondaryDark dark:hover:border-content-selected dark:hover:text-content-selected dark:disabled:border-border-disabled dark:disabled:text-content-disabled"
    >
        <slot>
            <rocket_launch fill="currentColor" class="h-4 w-4" />
        </slot>
    </button>
</template>
