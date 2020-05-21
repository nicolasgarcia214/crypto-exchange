<template>
  <button
    @click="buttonClick"
    class="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-2 border border-indigo-500 hover:border-transparent rounded"
  >
    <beat-loader :loading="isLoading" :color="'#434190'" :size="8" />
    <p v-show="!isLoading">
      <slot></slot>
    </p>
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    buttonClick() {
      this.$emit('custom-click');
    },
  },
};
</script>
