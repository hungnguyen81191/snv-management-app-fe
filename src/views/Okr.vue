<template>
  <div
    class="float-right w-10/12 h-screen col-span-2 px-10 py-10 mx-10 -mr-40 bg-white"
  >
    <div
      class="items-center justify-center w-3/5 px-56 py-10 h-3/4 "
    >
      <div class="px-24 py-2 content-title">
        <h1 class="font-sans text-2xl font-bold">List of Okr</h1>
      </div>
      <div class="h-auto min-w-full data ">
        <table class="items-center justify-center block rounded-lg bg-cyan-100">
          <thead class="">
            <tr class="">
              <!-- <td>No</td> -->
              <td class="px-6 ">Okr Name</td>
              <td class="px-6 ">Action</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="okr in okrs" :key="okr.id">
              <!-- <td>1</td> -->
              <td class="text-center ">{{okr.name}}</td>
              <td><a class="px-2">Edit</a></td>
              <td><a class="px-2">Remove</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="py-6 btn px-28">
        <button >Create</button>    
      </div>
    </div>
  </div>
</template>
<script>
import OkrApi from "../api/OkrApi";
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  //   setup() {
  //     return {
  //       doSomethingWithToken: async () => {
  //         const token = await getAccessTokenSilently();
  //         console.log(token);
  //         // console.log(user.value.picture);
  //         return token;
  //       },
  //     };
  //   },

  data() {
    return {
      okrs: [],
    };
  },

  async mounted() {
    const { getAccessTokenSilently } = useAuth0();
    const token = await getAccessTokenSilently();
    let result = await OkrApi.gets(token);
    this.okrs = result.data;
    return this.okrs;
  },
  methods:{

  }
};
</script>
