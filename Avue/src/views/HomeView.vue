<script setup lang="ts">
import { useCounterStoreComp } from '@/stores/counter'
import TheWelcome from '../components/TheWelcome.vue'

const counter = useCounterStoreComp()

</script>

<template>
  <main>
    <TheWelcome />
    <p>Counter: {{ counter.count }}</p>
    <p>Counter computed: {{ counter.doubleCount }}</p>
    <button @click="counter.increment">Increment</button>
  </main>
</template>
