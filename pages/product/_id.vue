<template>
  <div class="flex justify-center m-6">
    <div v-if="getProduct">
      <div class="items-center bg-white">
        <SocialHead
      :title="getProduct.name"
      :description="getProduct.description"
      :image="getProduct.image.sourceUrl"
    />
        <ix-img
        :src="getProduct.image.sourceUrl"
        sizes="(min-width: 799px) 799px, 100vw"
        :imgixParams="{fit:'fill', fill:'solid', fillcolor:'fff', auto:'format', ch:'width,dpr'}"
        :alt="getProduct.name"
        loading="lazy"
        class="mx-auto crop border rounded-lg"
        />
      </div>
    <div class="w-full p-5 flex flex-col justify-between">
      <div>
        <h4 class="mt-1 font-semibold text-lg leading-tight truncate text-gray-700">
          {{ getProduct.name }}
        </h4>
        <div class="mt-2 text-gray-600">
          {{ getProduct.description }}
        </div>
        <div v-if="getProduct.soldOut" class="inline-block relative">
         <button class="mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow">
          Sold Out
        </button>
         </div>
         <div v-else class="inline-block relative">
         <button class="mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow">
          ${{ formatPrice(getProduct.priceData.inCents)}}
        </button>
         </div>
        <div class="dropdown inline-block relative">
        <button class="mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow">
          <span class="mr-1">Sizes</span>
          <ul class="absolute hidden dropdown-menu hover:block text-gray-700 pt-1">
            <li v-for="name in getProduct.sizes" :key="name"><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">{{name.name}}</a></li>
          </ul>
        </button>
        </div>
        <div class="dropdown inline-block relative">
        <button class="mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow">
          <span class="mr-1">Colors</span>
          <ul class="absolute hidden dropdown-menu hover:block text-gray-700 pt-1">
            <li v-for="name in getProduct.colors" :key="name"><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">{{name.name}}</a></li>
          </ul>
        </button>
        </div>
        <NuxtLink :to="`/`">
          <button class="mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow">Back Home</button>
        </NuxtLink>
      </div>  
    </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import product from '../../apollo/queries/product.gql'

export default {
  apollo: {
    getProduct: {
      query: product,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      },
    },
  },
  methods: {
    formatPrice(value) {
      let val = (value/100).toFixed(2)
      return val.toString()
    }
  },
}
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}

</style>
