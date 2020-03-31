import _houseService from "../Services/HouseService.js"
import _store from "../store.js"

function _drawHouses() {
  let template = ''
  let houses = _store.State.houses

  houses.forEach((house, index) => template += house.getTemplate(index))
  document.getElementById("houses").innerHTML = template

}



export default class HouseController {
constructor () {
  console.log("hello from HouseController");
  
}

create(event) {
  event.preventDefault() // prevents the page from refreshing
  let formData = event.target
  debugger
  let newHouseObject = {
    house: formData.house.value,
    squareFeet: formData.squareFeet.value,
    yearBuilt: formData.yearBuilt.value,
    bedrooms: formData.bedrooms.value,
    bathrooms: formData.bathrooms.value,
    garage: formData.garage.value,
    price: formData.price.value,
    imgUrl: formData.imgUrl.value,
  }

  _houseService.create(newHouseObject)
  formData.reset()
  // @ts-ignore
  $('#add-house-modal').modal('toggle')
  _drawHouses()

}

delete(index) {
  _houseService.delete(index)
  _drawHouses()
}

}