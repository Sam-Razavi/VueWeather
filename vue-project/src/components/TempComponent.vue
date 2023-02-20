<template>
    <div>
      <p>{{ celsius }}°C is {{ fahrenheit }}°F</p>
      <input v-model.number="celsius" type="number" placeholder="Celsius">
    </div>
  </template>

  <script>
  export default {
    name: 'TempComponent',
    data() {
      return {
        celsius: 0
      }
    },
    computed: {
      fahrenheit() {
        return (this.celsius * 9/5) + 32
      }
    }
  }
  </script>
