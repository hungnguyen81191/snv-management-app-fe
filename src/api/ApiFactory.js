import OkrApi from "./OkrApi";
const apis = {
    okrs: OkrApi,
};

export const ApiFact = {
    get: (name) => apis[name],
};