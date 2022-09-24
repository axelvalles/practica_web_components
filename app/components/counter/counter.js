import html from "./counter.html";
import css from "./counter.css";
import { setupShadow } from "../../helpers/setupShadow";

export class WcCounter extends HTMLElement {
  #isControled = false;
  #interalCount = 0;

  constructor() {
    super();
    this.shadow = setupShadow(this, html, css);
  }

  // declarete props
  static get observedAttributes() {
    return ["count"];
  }

  // life cicle
  // is mount
  connectedCallback() {
    this.shadow.getElementById("count").textContent = this.count;
  }

  // is update
  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === "count") {
      this.#isControled = true;
      this.shadow.getElementById("count").textContent = this.count;
    }
  }

  // attr
  get count() {
    if (this.#isControled) {
      return Number(this.getAttribute("count"));
    }
    return Number(this.#interalCount);
  }

  set count(val) {
    if (this.#isControled) {
      return this.setAttribute("count", Number(val));
    }
    this.#interalCount = Number(val);
  }

  //methods
  increment() {
    this.count++;
    console.log(this.count);
    console.log("+");
  }

  decrement() {
    this.count--;
    console.log(this.count);
    console.log("-");
  }
}
