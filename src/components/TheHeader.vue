<!-- This example requires Tailwind CSS v2.0+ -->
<template>
 <div class="flex justify-between flex-1 ">
   <div class="flex items-center justify-center flex-shrink-0 px-4">
      <router-link to="/"
        ><img class="w-6/12 h-50" src="../assets/images/snv.jpeg" 
      /></router-link>
    </div>
     <div class="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
          <a v-if="!isAuthenticated" class="px-4 py-2 text-base font-medium text-gray-700 whitespace-nowrap bg-gray-100 rounded-md hover:text-gray-900 hover:bg-gray-300" @click="login"> Login </a>
          <Menu as="div" v-if="isAuthenticated" class="ml-4 relative flex-shrink-0">
            <div>
              <MenuButton class="bg-sky-500 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-500 focus:ring-white">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" :src="`https://i1.wp.com/cdn.auth0.com/avatars/hu.png?ssl=1`" alt="" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem  v-slot="{ active }">
                  <a  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your profile</a>
                </MenuItem>
                <MenuItem  v-slot="{ active }">
                  <a  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                </MenuItem>
                <MenuItem  v-slot="{ active }">
                  <a  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']" @click="logout">Logout</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
          <!-- <button v-if="isAuthenticated" class="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-gray-700 whitespace-nowrap hover:text-gray-900 hover:bg-gray-300" @click="logout"> Logout </button> -->
        </div>
        <!-- <button @click="doSomethingWithToken()">Get Token</button> -->
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem
} from "@headlessui/vue";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem
  },

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
          // console.log(token);
          // console.log(user.value.picture);
          return token;
        }
    };
    
  },
};
</script>
