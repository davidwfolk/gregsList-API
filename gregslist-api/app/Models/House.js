export default class House {
  constructor(data) {
    this.house = data.house || ''
    this.squareFeet = data.squareFeet || ''
    this.year = data.year  || ''
    this.bedrooms = data.bedrooms  || ''
    this.bathrooms = data.bathrooms  || ''
    this.garage = data.garage  || ''
    this.price = data.price  || ''
    this.imgUrl = data.imgUrl  || ''
    this.id = data.id || data._id
    this.levels = data.levels  || ''
    this.description = data.description || ''
  }

  get Template () {
    return /*html*/ `
    <div class="col-4 border border-info rounded shadow">
      <img class="img-fluid" src="${this.imgUrl}" />
      <h5>Description: ${this.description}</h5>
 <!-- <h6>House Type: ${this.house}</h6> 
      <h6>Square Feet: ${this.squareFeet}</h6>  -->
      <h6>Year Built: ${this.year}</h6> 
      <h6>No. of Bedrooms: ${this.bedrooms}</h6>
      <h6>No. of Bathrooms: ${this.bathrooms}</h6>
 <!-- <h6>Garage: ${this.garage}</h5>  -->
      <h6>Levels: ${this.levels}</h6>
      <h6>Home Price: ${this.price}</h6>
      <button type="button" class="btn btn-danger btn-block" onclick="app.houseController.delete('${this.id}')">Delete</button>
    </div>`
  }
}