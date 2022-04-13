<template>
  <div class="flex flex-col w-full mx-auto space-y-3">
    <TheHeader />

    <div class="flex justify-between space-x-5 h-5/6">
      <TheSidebar />
      <router-view />
      
      
    </div>
  </div>
</template>
<script>
import TheSidebar from "../src/components/TheSidebar.vue";
import TheHeader from "../src/components/TheHeader.vue";


export default {
  components: {
    TheSidebar,
    TheHeader,
   
  },
};
</script>
