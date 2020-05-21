<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block">
          <input
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="a in filteredAssets"
        :key="a.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td>
          <img
            class="w-6 h-6"
            :src="
              `https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`
            "
            :alt="a.name"
          />
        </td>
        <td>
          <b># {{ a.rank }}</b>
        </td>
        <td>
          <router-link
            class="hover:text-indigo-600"
            :to="{ name: 'coin-detail', params: { id: a.id } }"
          >
            {{ a.name }}
          </router-link>
          <small class="ml-1 text-gray-500">{{ a.symbol }}</small>
        </td>
        <td>{{ a.priceUsd | dollar }}</td>
        <td>{{ a.marketCapUsd | dollar }}</td>
        <td
          :class="
            Number(a.changePercent24Hr) > 0 ? 'text-green-500' : 'text-red-500'
          "
        >
          {{ a.changePercent24Hr | percentage }}
        </td>
        <td class="hidden sm:block">
          <Button @custom-click="goToCoinDetail(a.id)">
            <span>Detalle</span>
          </Button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Button from '@/shared/components/Button';
export default {
  name: 'Table',
  components: { Button },

  data() {
    return {
      filter: '',
    };
  },

  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    filteredAssets() {
      return this.assets.filter(
        (a) =>
          a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
          a.name.toLowerCase().includes(this.filter.toLowerCase())
      );
    },
  },

  methods: {
    goToCoinDetail(id) {
      this.$router.push({ name: 'coin-detail', params: { id } });
    },
  },
};
</script>

<style scoped>
td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
