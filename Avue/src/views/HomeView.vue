<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import TheWelcome from '../components/TheWelcome.vue'

const counter = useCounterStore()

</script>

<template>
  <main>
    <TheWelcome />
    <p>Counter: {{ counter.count }}</p>
    <p>Counter computed: {{ counter.doubleCount }}</p>
    <button @click="counter.increment">Increment</button>
  </main>
</template>
