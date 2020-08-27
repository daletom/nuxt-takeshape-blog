<template>
  <div>
    <div v-for="post in data" :key="post._id" class="card">
      <h1>{{ post.title }}</h1>
      <p>By: {{ post.author.name }}</p>

      <NuxtLink :to="`post/${post._id}`">
        <button class="card-btn">READ</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
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
