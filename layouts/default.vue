<template>
  <div class="main">
    <div class="main__navigation-wrap">
      <Navigation class="main__navigation" />
    </div>
    <div class="main-wrapper">
      <Header class="main__head" />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Navigation from '~/components/common/Navigation.vue'
export default {
  components: { Header, Navigation },
}
</script>

<style scoped>
.main {
  display: flex;
}

.main-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
