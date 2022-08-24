import { getMushroomById, locationReplate, takeData } from "../api/func.js";
import { html } from "../lib.js";



const detailsTemplate = (mushroom) => html`<section id="details">
<div id="details-wrapper">
  <p id="details-title">Mushroom Details</p>
  <div id="img-wrapper">
    <img src="${mushroom.img}" alt="example1" />
  </div>
  <div id="info-wrapper">
    <p>Habitat: <span id="details-brand">${mushroom.habitat}</span></p>
    <p>
      Region: <span id="details-model">${(mushroom.regions).map(e => '' + `${e}`).join(',')}</span>
    </p>
    <p>Confused With: <span id="details-release">${(mushroom.confusedWith).map(e => '' + `${e}`).join(',')}</span></p>
    <p id="details-poison">Poisonous: <span id="details-poison-content">${mushroom.attributes.poisonous == true ? `Yes`: `No`}</span></p>
    <p>Cap: <span id="details-value">${(mushroom.attributes.cap).map(e => '' + `${e}`).join(',')}</span></p>
  </div>

</div>
</section>`

export async function detailsView(ctx) {
    const context = ctx.params.id
    const mushroom = await getMushroomById(context)
    ctx.render(detailsTemplate(mushroom))
    window.history.replaceState({},'home',`/home`)

}