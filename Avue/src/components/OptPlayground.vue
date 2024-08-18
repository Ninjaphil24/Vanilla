<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'OptPlayground',
    data() {
        return {
            status: "none",
            showHideBool: true,
            event: 'click',
            output: ''
        }
    },
    methods: {
        setStatus(newStatus: string) {
            this.status = newStatus
            console.log("Opt status")
        },
        showHideFunc() {
            this.showHideBool = !this.showHideBool
            console.log('Show/Hide Opt')
        },
        eventClicker(event: Event) {
            console.log("Options: " + event.type)
        },
        // Create KeyboardEvent with event.code and event.key
        keyPressed: (event: Event) => {
            console.log("Options: " + event.type)

        }
    }
})
</script>

<template>
    <h3 v-if="status === 'none'">No Status</h3>
    <h3 v-else-if="status === 'status_one'">Status One</h3>
    <h3 v-else-if="status === 'status_two'">Status Two</h3>
    <h3 v-else-if="status === 'status_three'">Status Three</h3>
    <button @click="setStatus('status_one')">Status One</button>
    <button @click="setStatus('status_two')">Status Two</button>
    <button v-on:click="setStatus('status_three')">Status three</button>
    <br>
    <h3 v-show="showHideBool">Show/Hide</h3>
    <button v-on:click="showHideFunc">Show/Hide</button>
    <br><br>
    <button v-on:[event]="eventClicker">Event Clicker</button>
    <br><br>
    <input v-on:keydown.enter="keyPressed" placeholder="Press Enter here">
    <br><br>
    <input @keydown.space="keyPressed" placeholder="Press Space here">
    <br><br>
    <input v-on:keydown="keyPressed" v-model="output" placeholder="Press any key here">
    <br><br>
    <h3>{{ output }}</h3>
</template>
