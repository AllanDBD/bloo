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
            d="M18.3333 14.9999H15V3.33325H11.6667V14.9999H8.33333V3.33325H5V14.9999C5 18.5333 7.76667 21.3999 11.25 21.6166V36.6666H15.4167V21.6166C18.9 21.3999 21.6667 18.5333 21.6667 14.9999V3.33325H18.3333V14.9999ZM26.6667 9.99992V23.3333H30.8333V36.6666H35V3.33325C30.4 3.33325 26.6667 7.06659 26.6667 9.99992Z"
            :fill="fill"
        />
    </svg>
</template>
