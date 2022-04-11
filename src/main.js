import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-f-yt7kxk.us.auth0.com",
    client_id: "m12y0UstZjuFBCNRi7aFo80IgX2f1E1U",
    redirect_uri: window.location.origin,
    // audience: "undefined",
  })
);

app.use(store).use(router).mount("#app");
