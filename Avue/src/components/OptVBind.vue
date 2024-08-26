<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'OptVBind',
    data() {
        return {
            linkURL: "https://philipmodinos.ueuo.com/",
            linkTitle: "Opt Link",
            user: {
                name: "Phil",
                role: "admin", // or user or guest
                onLine: false
            }
        }
    },
    computed: {
        profileStyle() {
            return {
                border: this.user.onLine === true ? '2px solid green' : '2px solid gray',
                color: this.user.role === 'admin' ? 'red' : this.user.role === 'user' ? 'yellow' : 'white',
                fontWeight: this.user.role === 'admin' ? 'bold' : 'normal'

            }
        }
    },
    methods: {
    }
})
</script>

<template>
    <h2>V-Bind View Page</h2>
    <div>
        <a v-bind:href="linkURL" v-bind:title="linkTitle">Go to link</a>
    </div>
    <div :style="profileStyle">
        <h2>{{ user.name }}</h2>
    </div>
</template>