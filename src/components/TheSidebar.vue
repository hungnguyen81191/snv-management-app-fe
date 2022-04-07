<template>
  <div
    class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white border-r border-gray-200"
  >
    <div class="flex items-center flex-shrink-0 px-4 space-y-5">
      <img
        class="w-auto h-8"
        src="../assets/images/snvgroup-logo.jpeg"
        alt="Workflow"
      />
    </div>
    <div class="flex flex-col flex-grow mt-5">
      <nav class="flex-1 space-y-1 bg-white" aria-label="Sidebar">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-3 py-2 text-sm font-medium border-l-4',
          ]"
        >
          <component
            :is="item.icon"
            :class="[
              item.current
                ? 'text-indigo-500'
                : 'text-gray-400 group-hover:text-gray-500',
              'mr-3 flex-shrink-0 h-6 w-6',
            ]"
            aria-hidden="true"
          />
          {{ item.name }}
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/vue/outline";

const navigation = [
  { name: "Trang chủ", icon: HomeIcon, current: true },
  { name: "Lịch", icon: CalendarIcon,  current: false },
  { name: "Nhóm làm việc", icon: FolderIcon,  current: false },
  { name: "Danh mục", icon: CalendarIcon, current: false },
  { name: "Thông báo", icon: InboxIcon, current: false },
  { name: "Liên hệ", icon: ChartBarIcon, current: false },
];

export default {
  setup() {
    return {
      navigation,
    };
  },
};
</script>
