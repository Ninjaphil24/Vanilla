<template>
    <div class="outer" :style="{ backgroundColor: outerBG }">
        <div class="inner" :style="{ backgroundColor: innerBG }">
            <slot class="slot" :style="{ color: slotColor }"></slot>
            <button class="btn" :style="{ backgroundColor: btnColor, color: btnFont }" @click="btnClick">{{ btnText
                }}</button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        outerBG: {
            type: String,
            required: true
        },
        innerBG: {
            type: String,
            required: true
        },
        slotColor: {
            type: String,
            required: true
        },
        btnColor: {
            type: String,
            required: true
        },
        btnFont: {
            type: String,
            required: true
        },
        btnText: {
            type: String,
            required: true
        }
    },
    methods: {
        btnClick() {
            alert(`Slot ${this.btnText}`)
        }
    },
}
</script>

<style scoped>
.outer {
    padding: 10px;
}

.inner {
    padding: 10px;
}

.slot {
    margin-top: 20px;
    font-size: 20px;
}

.btn {
    height: 70px;
    width: 100px;
    font-size: 20px;
    cursor: pointer;
}
</style>