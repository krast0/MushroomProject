import {render} from './lib.js'
import {page} from './lib.js'
import { detailsView } from './views/details.js';
import { homeView } from './views/homepage.js';
import { searchView } from './views/search.js';

const main = document.querySelector('#main-content');

page(decorateContext)
page('/index.html','/home')
page('/home', homeView );
page('/search',searchView)
page('/home/:id',detailsView)


updateNav()
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain
    ctx.updateNav = updateNav

    next();
}
function renderMain(templateResult) {
    render(templateResult, main)
}

export function updateNav() {
    document.querySelector('nav').style.display == 'flex'
}