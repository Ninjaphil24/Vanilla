<template>
    <OptChild v-for="user in users" :key="user" :outer-bg="colors[user].outerBg" :inner-bg="colors[user].innerBg"
        :btn-text="colors[user].btnText" :btn-color='colors.btnColor' :slot-color='colors.slotColor'
        :btn-font='colors.btnFont'>Classification {{ user }}</OptChild>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OptChild from '@/components/OptChild.vue';

type UserType = 'admin' | 'user' | 'guest'

type colorTemplate = {
    outerBg: string,
    innerBg: string,
    btnText: string
}

type ColorsType = {
    [key in UserType]: colorTemplate
} & {
    btnColor: string,
    slotColor: string,
    btnFont: string,
}



export default defineComponent({
    components: {
        OptChild
    },
    data() {
        return {
            colors: {
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
            } as ColorsType,

            users: ['admin', 'user', 'guest'] as UserType[]
        }
    },
})
</script>

<style scoped></style>