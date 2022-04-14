// import { AUTH0_TOKEN } from "@auth0/auth0-vue/dist/typings/token";
import Api from "./Api"

const resource = "okr";

export default {
    gets(token) {
        return Api(`${resource}`, token).get();
    },
    create(data, token) {
        return Api(`${resource}`, data, token).post();
    },
    patch(Id, data, token) {
        return Api(`${resource}/${Id}`, data, token).patch();
    },
    delete(Id, token) {
        return Api(`${resource}/${Id}`, token).delete();
    },
};