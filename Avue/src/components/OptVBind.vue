<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'OptVBind',
    data() {
        return {
            linkURL: "https://philipmodinos.ueuo.com/",
            linkTitle: "Opt Link"
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
</template>