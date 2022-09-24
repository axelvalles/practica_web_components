import { setupShadow } from "../../helpers/setupShadow";
import html from './router.html'
import css from './router.css'


export class Router extends HTMLElement{
    constructor(){
        super()
        setupShadow(this, html, css);
    }

    connectedCallback(){
        console.log(this.slot.name);
    }
}