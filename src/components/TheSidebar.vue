<template>
  <div
    class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white border-r border-gray-200"
  >
    <div class="flex items-center flex-shrink-0 px-4 space-y-5">
      <img class="w-auto h-16" src="../assets/images/snvgroup-logo.jpeg" />
    </div>
    <div class="flex flex-col flex-grow mt-5">
      <nav class="flex-1 space-y-1 bg-white" aria-label="Sidebar">
        <button
          :class="[
            current
              ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-3 py-2 text-sm font-medium border-l-4',
          ]"
          @click="toLink"
        >
          <HomeIcon
            :class="[
              current
                ? 'text-indigo-500'
                : 'text-gray-400 group-hover:text-gray-500',
              'mr-3 flex-shrink-0 h-6 w-6',
            ]"
          />
          <router-link to="/"> Trang chủ </router-link>
        </button>
        <button
          :class="[
            current
              ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-3 py-2 text-sm font-medium border-l-4',
          ]"
          @click="toLink"
        >
          <CalendarIcon
            :class="[
              current
                ? 'text-indigo-500'
                : 'text-gray-400 group-hover:text-gray-500',
              'mr-3 flex-shrink-0 h-6 w-6',
            ]"
          />
          <router-link to="/calendar"> Lịch </router-link>
        </button>
        <button
          :class="[
            current
              ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-3 py-2 text-sm font-medium border-l-4',
          ]"
          @click="toLink"
        >
          <UserGroupIcon
            :class="[
              current
                ? 'text-indigo-500'
                : 'text-gray-400 group-hover:text-gray-500',
              'mr-3 flex-shrink-0 h-6 w-6',
            ]"
          />
          <router-link to="/department"> Nhóm làm việc </router-link>
        </button>
        <button type="button"
          :class="[
            current
              ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-3 py-2 text-sm font-medium border-l-4',
          ]"
          @click="toLink"
        >
          <SearchCircleIcon
            :class="[
              current
                ? 'text-indigo-500'
                : 'text-gray-400 group-hover:text-gray-500',
              'mr-3 flex-shrink-0 h-6 w-6',
            ]"
          />
          <router-link to="/department"> Danh mục </router-link>
        </button>
        <button
          :class="[
            current
              ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-3 py-2 text-sm font-medium border-l-4',
          ]"
          @click="toLink"
        >
          <BellIcon
            :class="[
              current
                ? 'text-indigo-500'
                : 'text-gray-400 group-hover:text-gray-500',
              'mr-3 flex-shrink-0 h-6 w-6',
            ]"
          />
          <router-link to="/department"> Thông báo </router-link>
        </button>
        <button
          :class="[
            current
              ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-3 py-2 text-sm font-medium border-l-4',
          ]"
          @click="toLink"
        >
          <GlobeAltIcon
            :class="[
              current
                ? 'text-indigo-500'
                : 'text-gray-400 group-hover:text-gray-500',
              'mr-3 flex-shrink-0 h-6 w-6',
            ]"
          />
          <router-link to="/department"> Liên hệ </router-link>
        </button>
        <router-view/>
      </nav>
    </div>
  </div>
</template>

<script>
import {
  CalendarIcon,
  BellIcon,
  UserGroupIcon,
  HomeIcon,
  GlobeAltIcon,
  SearchCircleIcon
} from "@heroicons/vue/outline";
const current = false;
export default {
  method:{
    toLink: {
      current = !current,
    }
  },
  setup() {
    return {
      CalendarIcon,
      BellIcon,
      UserGroupIcon,
      HomeIcon,
      GlobeAltIcon,
      SearchCircleIcon
    };
  },
  
};
</script>
