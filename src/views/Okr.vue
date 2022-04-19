<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <p class="mt-2 text-xl font-semibold text-gray-800">
          A list of all the OKR.
        </p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          type="button"
          class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          @click="show = true"
        >
          Add Okr
        </button>
        <TransitionRoot as="template" :show="show">
          <Dialog
            as="div"
            class="fixed inset-0 z-10 overflow-y-auto"
            @close="show = false"
          >
            <div
              class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
            >
              <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <DialogOverlay
                  class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                />
              </TransitionChild>

              <!-- This element is to trick the browser into centering the modal contents. -->
              <span
                class="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
                >&#8203;</span
              >
              <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enter-to="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leave-from="opacity-100 translate-y-0 sm:scale-100"
                leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div
                  class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                >
                  <div class="sm:flex sm:items-start">
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
                    >
                      <FolderAddIcon
                        class="w-6 h-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <DialogTitle
                        as="h3"
                        class="items-center justify-center text-lg font-medium leading-6 text-gray-900"
                      >
                        Create new Okr
                      </DialogTitle>
                      <div class="mt-2">
                        <input
                          type="text"
                          class="h-24 font-sans text-sm text-left text-gray-700 w-96"
                          v-model="newOkr"
                          placeholder="Enter new OKR"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      @click="add(newOkr), (show = false)"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                      @click="show = false"
                      ref="cancelButtonRef"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </TransitionChild>
            </div>
          </Dialog>
        </TransitionRoot>
      </div>
    </div>
    <div class="flex flex-col mt-8">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table class="min-w-full px-8 divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th class="text-sm font-semibold text-center text-gray-900">
                    Id
                  </th>
                  <th class="text-sm font-semibold text-center text-gray-900">
                    Okr
                  </th>
                  <th
                    class="text-sm font-semibold text-center text-gray-900"
                  ></th>
                  <th
                    class="text-sm font-semibold text-center text-gray-900"
                  ></th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="okr in okrs" :key="okr.id">
                  <td
                    class="justify-center px-3 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
                  >
                    {{ okr.id }}
                  </td>
                  <td
                    class="justify-center px-3 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
                  >
                    {{ okr.name }}
                  </td>

                  <!-- edit okr -->
                  <!-- <td
                    class="justify-center px-3 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
                  > -->
                    <!-- <button
                      class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      @click="toggleModal = !toggleModal,getId(okr.id)"
                    >
                      Edit
                    </button> -->
                    <!-- <div class="okrModal">
                      <div
                        class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto"
                        v-if="toggleModal"
                      >
                        <div class="relative max-w-2xl mx-auto w-36">
                          <div
                            class="flex flex-col w-full bg-white rounded shadow-2xl"
                          >
                            <div class="text-2xl font-bold">Edit</div>
                            <p>{{ okr.id }}</p>
                            <input
                              type="text"
                              class="w-32 h-8"
                              placeholder="Enter Okr"
                              v-model="newOkrValue"
                            />
                            <button
                              class="px-2 py-2 m-auto mt-1 mb-3 text-white bg-green-500 rounded w-/4"
                              @click="
                                edit( newOkrValue), (toggleModal = false)
                              "
                            >
                              Save
                            </button>
                            <button
                              class="px-2 py-2 m-auto mt-1 mb-3 text-white bg-green-500 rounded w-/4"
                              @click="toggleModal = false"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        v-if="toggleModal"
                        class="absolute inset-0 z-40 bg-black opacity-25"
                      ></div>
                    </div> -->
                  <!-- </td> -->

                  <!-- delete okr -->
                  <td
                    class="justify-center px-3 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
                  >
                    <button
                      class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      @click="remove(okr.id)"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="items-center justify-center w-auto h-24 px-12 edit-block">
      <input type="text" v-model="id" placeholder="Choose id"/>
      <input type="text" v-model="name" placeholder="Enter new okr name"/>
      <button @click="edit(id, name)">Edit</button>
    </div>
  </div>
</template>
<script>
import OkrApi from "../api/OkrApi";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { FolderAddIcon } from "@heroicons/vue/outline";

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    FolderAddIcon,
  },

  data() {
    return {
      okrs: [],
      newOkr: "",
      show: false,
      id: "",
      name: ""
      
    };
  },

  async mounted() {
    let token = localStorage.getItem("token");
    let result = await OkrApi.gets(token);
    this.okrs = result.data;
    return this.okrs;
  },
  methods: {
    add: async (data) => {
      let okr = {
        name: data,
      };
      let token = localStorage.getItem("token");
      console.log("Got token:" + token);
      await OkrApi.create(okr, token);
    },

    edit: async (id, data) => {
      let okr = {
        name: data,
      };
      let token = localStorage.getItem("token");
      await OkrApi.patch(id, okr, token);
    },

    remove: async (id) => {
      console.log(id);
      await OkrApi.delete(id);
    },

    getId: (id) => {
      console.log(id);
      return id;
    },
  },
};
</script>
