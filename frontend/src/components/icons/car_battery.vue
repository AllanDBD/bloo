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
            d="M6.6665 5V10H1.6665V33.3333H38.3332V10H33.3332V5H23.3332V10H16.6665V5H6.6665ZM4.99984 13.3333H34.9998V30H4.99984V13.3333ZM24.9998 16.6667V20H21.6665V23.3333H24.9998V26.6667H28.3332V23.3333H31.6665V20H28.3332V16.6667H24.9998ZM8.33317 20V23.3333H18.3332V20H8.33317Z"
            :fill="fill"
        />
    </svg>
</template>
