<template>
    <CompChild v-for="user in users" :key="user" :outer-bg="colors[user].outerBg" :inner-bg="colors[user].innerBg"
        :btn-text="colors[user].btnText" :btn-color='colors.btnColor' :slot-color='colors.slotColor'
        :btn-font='colors.btnFont'>Classification {{ user }}</CompChild>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import CompChild from '@/components/CompChild.vue';

type UserType = 'admin' | 'user' | 'guest'

// type colorTemplate = {
//     outerBg: string,
//     innerBg: string,
//     btnText: string
// }

type ColorsType = {
    [key in UserType]: {
        outerBg: string,
        innerBg: string,
        btnText: string
    }
} & {
    btnColor: string,
    slotColor: string,
    btnFont: string,
}



export default defineComponent({
    components: {
        CompChild
    },
    setup() {
        const colors = reactive<ColorsType>({
            admin: {
                outerBg: 'red',
                innerBg: 'orange',
                btnText: "Admin's Click"
            },
            user: {
                outerBg: 'blue',
                innerBg: 'aqua',
                btnText: "Users's Click"
            },
            guest: {
                outerBg: 'yellow',
                innerBg: 'bisque',
                btnText: "Guest's Click"
            },
            btnColor: '#532abc',
            slotColor: 'white',
            btnFont: 'white',
        })

        const users = ref<UserType[]>(['admin', 'user', 'guest'])

        return { colors, users }
    }
})
</script>

<style scoped></style>