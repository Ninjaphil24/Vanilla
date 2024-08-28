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
                role: "guest", // or user or guest
                onLine: false
            },
            isRed: true
        }
    },
    computed: {
        profileStyle() {
            return {
                border: this.user.onLine === true ? '2px solid green' : '2px solid gray',
                color: this.user.role === 'admin' ? 'red' : this.user.role === 'user' ? 'yellow' : 'white',
                fontWeight: this.user.role === 'admin' ? 'bold' : 'normal'

            }
        },

        textStyle() {
            return this.user.role == 'admin' ? 'bold' : 'italic'
        }
    },
    methods: {
        toggleColorFunc() {
            this.isRed = !this.isRed
            console.log("Opt Color Change")
        }
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
    <button @click="toggleColorFunc">Toggle Color</button>
    <div id="toggleText" :class="[{ red: isRed, yellow: !isRed }, 'font-size', textStyle]">Text</div>
</template>

<style scoped>
.red {
    color: red;
}

.yellow {
    color: yellow;
}

.font-size {
    font-size: 30px;
}

.bold {
    font-weight: bold;
}

.italic {
    font-style: italic;
}
</style>