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
        let profileStyle = computed(() => {
            return {
                border: user.onLine === true ? '2px solid green' : '2px solid gray',
                color: user.role === 'admin' ? 'red' : user.role === 'user' ? 'yellow' : 'white',
                fontWeight: user.role === 'admin' ? 'bold' : 'normal'

            }
        })


        return { linkURL, linkTitle, user, profileStyle }
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
</template>