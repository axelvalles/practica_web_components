import html from './about.html'
import css from './about.css'
import { setupShadow } from '../../helpers/setupShadow';

export class PageAbout extends HTMLElement{
    constructor(){
        super()
        setupShadow(this, html, css);
    }
}