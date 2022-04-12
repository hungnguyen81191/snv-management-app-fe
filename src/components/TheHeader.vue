<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  
    <div class="flex-1 ml-80 px-4 flex justify-between bg-pink-100 ">
     <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a class="whitespace-nowrap px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-300" @click="login"> Login </a>
          <a class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-300" @click="logout"> Logout </a>
        </div>
  </div>
  
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
      logout: () => {
        logout({ returnTo: window.location.origin });
      },
      user,
      isAuthenticated,
    };
  },
};
</script>