<template>
    <div class="main">
        <ul v-for="okr in okrs" :key="okr.id">
            {{okr.name}}
        </ul>
    </div>
</template>
<script>
// import ApiFactory from "../api/ApiFactory";
// const OkrApi = ApiFactory.get('okrs');
import OkrApi from "../api/OkrApi";

export default{
    
    data(){
        return{
            okrs: [],
        }
    },

    async created(){
        await this.fetch();
    },
    
     async mounted() {
    let result = await OkrApi.gets();
    this.okrs = result.data;
    console.log(okrs)
  },
}
</script>