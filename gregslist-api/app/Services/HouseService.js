import _store from "../store.js"
import House from "../Models/House.js"

// @ts-ignore
let _api = axios.create({
  baseURL:'//bcw-sandbox.herokuapp.com/api/houses',
  timeout: 15000
})

class HouseService {

  getHouses() {
  _api.get()
  .then(res => {
    console.log(res.data)
    let houses = res.data.data.map(rawHouseData => new House (rawHouseData))
    _store.commit('houses', houses)
  })
}
  delete(index) {
    _store.State.houses.splice(index, 1)
  }
  
  create(newHouseObject) {
    let newHouse = new House(newHouseObject)
    _store.State.houses.push(newHouse)
    console.log(newHouseObject)
  }

  constructor() {
    console.log("house service works")
    this.getHouses()
  }

}


const HOUSESERVICE = new HouseService()
export default HOUSESERVICE