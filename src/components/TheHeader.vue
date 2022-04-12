<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-indigo-600">
    <div class="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex items-center flex-1 w-0">
         
          <div class="ml-3 font-medium text-white truncate">
            <router-link to="/user">User</router-link>
            <router-view/>
            <button @click="logout">Logout</button>
          </div>
        </div>
        <div class="flex-shrink-0 order-3 w-full mt-2 mr-1 sm:order-2 sm:mt-0 sm:w-auto">
          <button hidden:none type="button" class="flex items-center justify-center px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50"
          @click="login">
           Login </button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
 import { useAuth0 } from '@auth0/auth0-vue';

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
        isAuthenticated
      };
    }
  };
</script>