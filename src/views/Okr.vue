<template>
  <!-- <div
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
             
              <td class="px-6 ">Okr Name</td>
              <td class="px-6 ">Action</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="okr in okrs" :key="okr.id">
             
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
  </div> -->


  <!-- <template> -->
  <!-- <div
    class="float-right w-10/12 h-screen col-span-2 px-10 py-10 mx-10 -mr-40 bg-white"
  >
    <div
      class="items-center justify-center w-3/5 px-56 py-10 h-3/4 "
    >
      <div class="px-24 py-2 content-title">
        <h1 class="font-sans text-2xl font-bold">List of Okr</h1>
      </div>
      <div class="h-auto min-w-full bg-cyan-100 ">
        <table class="items-center justify-center block rounded-lg ">
          <thead class="">
            <tr class="">
              
              <td class="px-6 ">Okr Name</td>
              <td class="px-6 ">Action</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="okr in okrs" :key="okr.id">
              
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
  </div> -->
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
          @click="openAddModal = true"
        >
          Add Okr
        </button>
        <TransitionRoot as="template" :show="openAddModal">
          <Dialog
            as="div"
            class="fixed inset-0 z-10 overflow-y-auto"
            @close="openAddModal = false"
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
                enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
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
                        class="text-lg font-medium leading-6 text-gray-900"
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
                      @click="add"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                      @click="openAddModal = false"
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
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th class="text-sm font-semibold text-left text-gray-900">
                    Id
                  </th>
                  <th class="text-sm font-semibold text-center text-gray-900">
                    Okr
                  </th>
                  <th class="text-sm font-semibold text-center text-gray-900">
                    Edit
                  </th>
                  <th class="text-sm font-semibold text-center text-gray-900">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="okr in okrs" :key="okr.id">
                  <td
                    class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"
                  >
                    {{ okr.id }}
                  </td>
                  <td
                    class="justify-center px-3 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
                  >
                    {{ okr.name }}
                  </td>
                  <td
                    class="justify-center px-3 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
                  >
                    <button
                      class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      @click="openEditModal = true"
                    >
                      Edit
                    </button>
                    <TransitionRoot as="template" :show="openEditModal">
                      <Dialog
                        as="div"
                        class="fixed inset-0 z-10 overflow-y-auto"
                        @close="openEditModal = false"
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
                            <DialogOverlay class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
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
                                <div
                                  class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                                >
                                  <DialogTitle
                                    as="h3"
                                    class="text-lg font-medium leading-6 text-gray-900"
                                  >
                                    Edit
                                  </DialogTitle>
                                  <div class="mt-2">
                                    <textarea
                                      type="text"
                                      class="h-24 font-sans text-sm text-left text-gray-700 w-96"
                                      v-model="newEditOkr"
                                      placeholder="Enter new OKR"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                <button
                                  type="button"
                                  class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                  @click="edit(okr.id, newEditOkr)"
                                >
                                  Save
                                </button>
                                <button
                                  type="button"
                                  class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                                  @click="openEditModal = false"
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
                  </td>
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
  </div>
</template>
<script>
import OkrApi from "../api/OkrApi";
import { useAuth0 } from "@auth0/auth0-vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { FolderAddIcon } from "@heroicons/vue/outline";

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
      newEditOkr: "",
      openAddModal: false,
      openEditModal: false,
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
    add: () =>{
       let data = {
        name: this.newOkr,
      };
    OkrApi.create(data).then(() => {
          console.log("Success. . . . ");
        })
       .catch((error) => console.log("ERRRR:: ", error.response.data));
         openAddModal = !this.openAddModal;
    },

     edit: (id, data) => {
      OkrApi.patch(id, data)
        .then(() => {
          console.log("Success. . . . ");
        })
        .catch((error) => console.log("ERRRR:: ", error.response.data));
      openEditModal = !openEditModal;
    },

    remove: (id) => {
      OkrApi.delete(id).then(() => {
          console.log("Success. . . . ");
        })
        .catch((error) => console.log("ERRRR:: ", error.response.data));
    },
  }
};
</script>
