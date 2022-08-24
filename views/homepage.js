import { html } from "../lib.js";
import { takeData } from "../api/func.js";

//take data from json file
const homeCatalog = (allmushrooms) => html`<section id="dashboard-page">
<h1 class="title">All Posts</h1>
<div class="all-posts">
${allmushrooms.map(postCard)}
<!-- Display a div with information about every post (if any)-->
</div>
</section>`

let postCard =(post) => html`<div class="post">
<h2 class="post-title">${post.common[0]}</h2>
<h3 class="post-title">${post.latin}</h3>
<img class="post-image" src="${post.img}" alt="mushroom" />
<div class="btn-wrapper">
  <a href="/home/${post.id}" class="details-btn btn">Details</a>
</div>
</div>`

export async function homeView(ctx) {
    let allmushrooms = await takeData()
    console.log(allmushrooms);
    ctx.render(homeCatalog(allmushrooms))
}