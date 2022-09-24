import { PageHome } from "./pages/home/home";
import AppHtml from "./main.html";
import { PageAbout } from "./pages/about/about";
import "./style.css";
import { WcCounter } from "./components/counter/counter";

customElements.define("page-home", PageHome);
customElements.define("page-about", PageAbout);
customElements.define("wc-counter", WcCounter);


document.querySelector("#app").innerHTML = AppHtml;
