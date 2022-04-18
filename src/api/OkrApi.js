// import { AUTH0_TOKEN } from "@auth0/auth0-vue/dist/typings/token";
import Api from "./Api"

const resource = "okr";

export default {
    gets(token) {
        return Api(`${resource}`, token).get("",token);
    },
    create(data, token) {
        return Api(`${resource}`, data, token).post("",data, token);
    },
    patch(id, data, token) {
        return Api(`${resource}/`, data, token).patch(`${id}`, data, token);
    },
    delete(id, token) {
        return Api(`${resource}/${id}`, token).delete();
    },
};