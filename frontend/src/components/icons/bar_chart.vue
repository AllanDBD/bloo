<script>
export default {
    props: {
        fill: {
            type: String,
            default: '#282828',
        },
    },
};
</script>

<template>
    <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M36.6668 35H3.3335V5H6.66683V31.6667H10.0002V16.6667H16.6668V31.6667H20.0002V10H26.6668V31.6667H30.0002V23.3333H36.6668V35Z"
            :fill="fill"
        />
    </svg>
</template>
