import { render } from "../lib.js";
import { html } from "../lib.js";



const searchTemplate = (search) => html`<section id="search">
<h2>Search by Brand</h2>

<form class="search-wrapper cf">
  <input
    id="#search-input"
    type="text"
    name="search"
    placeholder="Search here..."
    required
  />
  <button type="submit">Search</button>
</form>

<h3>Results:</h3>

<div id="search-container">


  <!-- Display an h2 if there are no posts -->

</div>
</section>`


export async function searchView(ctx) {
    ctx.render(searchTemplate())

}