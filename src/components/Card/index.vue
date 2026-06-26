<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

const props = defineProps<{
  msg?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const count = ref(0);
const state = reactive({
  name: "",
});

onMounted(() => {
  console.log("mounted");
});
</script>

<template>
  666
  <div>{{ msg }}</div>
</template>

<style scoped></style>
