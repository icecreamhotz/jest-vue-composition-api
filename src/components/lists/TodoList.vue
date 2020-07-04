<template>
  <ul>
    <li
      v-for="(list, index) in lists"
      :key="index"
      @click="$emit('remove', index)"
    >
      {{ list }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    lists: {
      type: Array as () => string[],
      required: true,
    },
  },
});
</script>
