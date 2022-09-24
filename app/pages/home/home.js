import html from './home.html'
import css from './home.css'
import { setupShadow } from '../../helpers/setupShadow';

export class PageHome extends HTMLElement{
    constructor(){
        super()
        setupShadow(this, html, css);
    }
}