<!-- This example requires Tailwind CSS v2.0+ -->
<template>
 <div class="flex justify-between flex-1 px-4 bg-pink-0">
   <div class="flex items-center justify-center flex-shrink-0 px-4">
      <router-link to="/"
        ><img class="w-6/12 h-50" src="../assets/images/snv.jpeg" alt=""
      /></router-link>
    </div>
     <div class="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
          <a v-if="!isAuthenticated" class="px-4 py-2 text-base font-medium text-gray-700 whitespace-nowrap hover:text-gray-900 hover:bg-gray-300" @click="login"> Login </a>
          <a class="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-gray-700 whitespace-nowrap hover:text-gray-900 hover:bg-gray-300" @click="logout"> Logout </a>
        </div>
        <button @click="doSomethingWithToken()">Get Token</button>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {

  setup() {
    const { loginWithRedirect, user, isAuthenticated, logout, getAccessTokenSilently } = useAuth0();
    

    return {
      login: () => {
        loginWithRedirect();
      },
      logout: () => {
        logout({ returnTo: window.location.origin });
      },
      user,
      isAuthenticated,
      useAuth0,
      doSomethingWithToken: async () => {
          const token = await getAccessTokenSilently();
          console.log(token);
        }
    };
    
  },
};
</script>
