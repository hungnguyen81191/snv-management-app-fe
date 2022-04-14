<template>
  <div class="relative flex flex-col min-h-screen py-2 overflow-hidden sm:py-4">
    <TheHeader />

    <!-- <div class="flex justify-between space-x-5 h-5/6"> -->
      <!-- <TheSidebar />
      <router-view /> -->
      <div class="w-full h-full grid-cols-2 py-4 under-header ">
        <TheSidebar/>
        <router-view/>
      </div>
      
      
    <!-- </div> -->
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
