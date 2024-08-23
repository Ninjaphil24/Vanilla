<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
    name: 'CompVBind',
    setup() {
        let linkURL = ref("https://philipmodinos.ueuo.com/")
        let linkTitle = ref("Comp Link")
        return { linkURL, linkTitle }
    }

})
</script>


<template>
    <h2>V-Bind View Page</h2>
    <div>
        <a :href="linkURL" :title="linkTitle">Go to link</a>
    </div>
</template>