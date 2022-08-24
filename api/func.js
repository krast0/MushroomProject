import { get } from "./api.js"

export function locationReplate(){
    window.location = '/'
}
export async function takeData() {
    let data = get('/allmushrooms')
    let allMushrooms = data
    return allMushrooms
}

export async function getMushroomById(id) {
    let data = get(`/allmushrooms/${id}`)
    return data

}