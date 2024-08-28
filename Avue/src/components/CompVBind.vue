<script lang="ts">
import { ref, defineComponent, reactive, computed } from 'vue';

export default defineComponent({
    name: 'CompVBind',
    setup() {
        let linkURL = ref("https://philipmodinos.ueuo.com/")
        let linkTitle = ref("Comp Link")
        let user = reactive({
            name: "Phil",
            role: "user", // or user or guest
            onLine: true
        })
        let isRed = ref(true)
        let profileStyle = computed(() => {
            return {
                border: user.onLine === true ? '2px solid green' : '2px solid gray',
                color: user.role === 'admin' ? 'red' : user.role === 'user' ? 'yellow' : 'white',
                fontWeight: user.role === 'admin' ? 'bold' : 'normal'

            }
        })
        function toggleColorFunc() {
            isRed.value = !isRed.value
            console.log("Comp Color Change")
        }

        let textStyle = computed(() => {
            return user.role == 'admin' ? 'bold' : 'italic'
        })

        return { linkURL, linkTitle, user, profileStyle, isRed, toggleColorFunc, textStyle }
    }

})
</script>


<template>
    <h2>V-Bind View Page</h2>
    <div>
        <a :href="linkURL" :title="linkTitle">Go to link</a>
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