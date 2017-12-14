<template>
  <span>{{ message }} World!</span>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Provide } from "vue-property-decorator";

@Component
export default class AppComponent extends Vue {
  @Provide() message: string = "Hello";
}
</script>
