<template>
  <div>
    <div v-for="post in data" :key="post._id">
      {{ post.title }}
      <p>By: {{ post.author.name }}</p>

      <NuxtLink :to="`post/${post._id}`">
        <button>read</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style></style>
