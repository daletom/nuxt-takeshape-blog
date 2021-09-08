<template>
  <div class="flex justify-center m-6">
    <div v-if="getProduct">
      <div class="flex flex-col items-center border rounded-lg bg-blue-100">
        <ix-img
        :src="getProduct.image.sourceUrl"
        width="580"
        height="580"
        :imgixParams="{fit:'fill', fill:'solid', fillcolor:'fff', auto:'format', ch:'width,dpr'}"
        :alt="getProduct.name"
        loading="lazy"
        fixed
        class="mx-auto crop"
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
    <SocialHead
      :title="getProduct.name"
      :description="getProduct.description"
      :image="getProduct.image.sourceUrl"
    />
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

.card {
  margin: 20px;
}
.card > h1 {
  font-size: 2rem;
  color: #5539d2;
}

#tom {
  width: 500;
  height: 300;
}

.card > p {
  font-size: 1.6rem;
}

.card-btn {
  background-color: #442ab9;
  border: none;
  color: #ffffff;
  outline: none;
  padding: 12px 40px 10px;
  position: relative;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 3px;
}

.card-btn:before,
.card-btn:after {
  border: 0 solid transparent;
  transition: all 0.3s;
  content: '';
  height: 0;
  position: absolute;
  width: 14px;
}

.card-btn:before {
  border-top: 2px solid #ffc107;
  right: 0;
  top: -4px;
}

.card-btn:after {
  border-bottom: 2px solid #ffc107;
  bottom: -4px;
  left: 0;
}

.card-btn:hover:before,
.card-btn:hover:after {
  width: 100%;
}
</style>
