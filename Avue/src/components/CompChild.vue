<template>
    <div class="outer" :style="{ backgroundColor: outerBg }">
        <div class="inner" :style="{ backgroundColor: innerBg }">
            <slot class="slot" :style="{ color: slotColor }"></slot>
            <button class="btn" :style="{ backgroundColor: btnColor, color: btnFont }" @click="btnClick">{{ btnText
                }}</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
    props: {
        outerBg: {
            type: String,
            required: true
        },
        innerBg: {
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
    setup(props) {

        const { outerBg, innerBg, slotColor, btnColor, btnFont, btnText } = toRefs(props)

        function btnClick() {
            alert(`Slot ${btnText.value} Comp`)
        }

        return { outerBg, innerBg, slotColor, btnColor, btnFont, btnText, btnClick }

    }
})
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