<template>
  <div>
    <TheHeader />
    <TheSidebar />
  </div>
  
</template>
<script>
import TheSidebar from "../src/components/TheSidebar.vue";
import TheHeader from "../src/components/TheHeader.vue";
export default{
  components: {
    TheSidebar,
    TheHeader,
  }
}
</script>

