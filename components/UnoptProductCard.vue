<template>
<div>
  <div class="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
  <NuxtLink :to="`product/${product._id}`" v-for="product in data" :key="product._id" class="border rounded-lg bg-white hover:shadow-lg">
    <div class="rounded-t-lg bg-grey pt-2 pb-2">
      <img
        :src="product.image.sourceUrl"
        width="380"
        height="380"
        :alt="product.name"
        loading="lazy"
        fixed
        class="mx-auto crop"
  />
      <div class="pl-4 pr-4 pb-4 pt-4 rounded-lg">
        <h4 class="mt-1 font-semibold text-base leading-tight truncate text-gray-700 text-xl">
          {{ product.name }}
        </h4>
         <div class="mt-1 text-sm text-gray-700" v-html="product.description">
         </div>
         <div v-if="product.soldOut">
         <button class="mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow">
          Sold Out
        </button>
         </div>
         <div v-else>
         <button class="mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow">
          ${{ formatPrice(product.priceData.inCents)}}
        </button>
         </div>
      </div>
    </div>
  </NuxtLink>
  </div>
</div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    formatPrice(value) {
      let val = (value/100).toFixed(2)
      return val.toString()
    }
  },
}
</script>
  
<style>
.card > h1 {
  font-size: 2rem;
  color: #5539d2;
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
