import _houseService from "../Services/HouseService.js"
import _store from "../store.js"

function _drawHouses() {
  let template = ''
  let houses = _store.State.houses

  houses.forEach(house => template += house.Template)
  document.getElementById("houses").innerHTML = template

}



export default class HouseController {
constructor () {
  console.log("hello from HouseController");
  _store.subscribe('houses', _drawHouses)
}

create(event) {
  event.preventDefault() // prevents the page from refreshing
  let formData = event.target
  let newHouseObject = {
    house: formData.house.value,
    squareFeet: formData.squareFeet.value,
    year: formData.year.value,
    bedrooms: formData.bedrooms.value,
    bathrooms: formData.bathrooms.value,
    garage: formData.garage.value,
    price: formData.price.value,
    imgUrl: formData.imgUrl.value,
    description: formData.description.value,
    levels: formData.levels.value
  }

  _houseService.create(newHouseObject)
  formData.reset()
  // @ts-ignore
  $('#add-house-modal').modal('toggle')

}

delete(houseId) {
  _houseService.delete(houseId)
}

}