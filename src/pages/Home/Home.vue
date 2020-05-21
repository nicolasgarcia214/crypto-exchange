<template>
  <div>
    <ring-loader :loading="isLoading" :color="'#434190'" :size="250" />
    <Table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import Table from '@/pages/Home/containers/Table';
import api from '@/api/api';

export default {
  name: 'Home',
  components: { Table },
  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },

  created() {
    this.isLoading = true;

    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
