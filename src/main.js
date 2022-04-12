import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-xai59hoo.us.auth0.com",
    client_id: "Sndpd1I9wnTIwJnGhbIDGRTaWXSfcvFT",
    redirect_uri: window.location.origin,
    // audience: "http://localhost:8080/user",
  })
);

app.use(store).use(router).mount("#app");
