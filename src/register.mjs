import { HomePage } from "./pages/home.mjs";
import { ClassEditPage } from "./pages/class-edit.mjs";
import { ClassListPage } from "./pages/class-list.mjs";

customElements.define("class-list-page", ClassListPage);
customElements.define("class-edit-page", ClassEditPage);
customElements.define("home-page", HomePage);
