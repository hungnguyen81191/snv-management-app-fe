<template>
 <div class="flex flex-1 mt-0 max-h-20 ">
   <div class="flex items-center justify-center flex-shrink-0 px-10 py-2">
      <router-link to="/"><img class="w-24 h-20" src="../assets/images/snv.jpeg" /></router-link>
    </div>
     <div class="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
          <a v-if="!isAuthenticated" class="px-4 py-2 text-base font-medium text-gray-700 bg-gray-100 rounded-md whitespace-nowrap hover:text-gray-900 hover:bg-gray-300" @click="login"> Login </a>
          <Menu as="div" v-if="isAuthenticated" class="relative flex-shrink-0 ml-4">
            <div>
              <MenuButton class="flex text-sm rounded-full bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-500 focus:ring-white">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" :src="`https://i1.wp.com/cdn.auth0.com/avatars/hu.png?ssl=1`" alt="" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
              <MenuItems class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
        </div>
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
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    

    return {
      login: () => {
        loginWithRedirect();
      },
      logout: () => {
        logout({ returnTo: window.location.origin });
      },
      isAuthenticated,
    };   
  },
  async mounted() {
    const{getAccessTokenSilently} = useAuth0();
    let token = await getAccessTokenSilently();
    localStorage.setItem("token", token);
  }
};
</script>
