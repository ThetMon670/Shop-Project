<template>
    <NavBarVue v-if="showNavbar" />
</template>
<script>
import { useRoute } from 'vue-router'
import NavBarVue from '@/views/admin/Nav-bar.vue'

export default {
  components: {
    NavBarVue
  },
  setup() {
    const route = useRoute();
    const showNavbar = computed(() => {
      return route.name === 'home';
    });

    return {
      showNavbar
    }
  }
}
</script>
