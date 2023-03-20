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
            d="M20.0002 9.48333L28.3335 16.9833V30H25.0002V20H15.0002V30H11.6668V16.9833L20.0002 9.48333ZM20.0002 5L3.3335 20H8.3335V33.3333H18.3335V23.3333H21.6668V33.3333H31.6668V20H36.6668"
            :fill="fill"
        />
    </svg>
</template>
