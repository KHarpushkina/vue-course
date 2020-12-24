import { createApp } from "vue";

import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import fontAwesomeImport from "./imports/fontawesome-import.js";
const app = createApp(App);

app.use(router);
app.use(store);
fontAwesomeImport(app);

app.mount("#app");
