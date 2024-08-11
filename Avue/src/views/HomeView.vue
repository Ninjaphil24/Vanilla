<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { computed } from 'vue'
import { useConfigStore } from '@/stores/config';
import { useCounterStoreComp, useCounterStoreOpt } from '@/stores/counter'

const configStore = useConfigStore()

const counter = computed(() => configStore.useCompositionAPI ? useCounterStoreComp() : useCounterStoreOpt())

</script>

<template>
  <main>
    <p>Counter: {{ counter.count }}</p>
    <p>Counter computed: {{ counter.doubleCount }}</p>
    <button @click="counter.increment">Increment</button>
  </main>
</template>
