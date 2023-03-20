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
            d="M30 10.0001H14.7167L24.7167 20.0001L14.7167 30.0001H30V33.3334H10V30.0001L20 20.0001L10 10.0001V6.66675H30V10.0001Z"
            :fill="fill"
        />
    </svg>
</template>
