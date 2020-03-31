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
  .catch (err => console.error(err))
}

create(newHouseObject) {
  // let newHouse = new House(newHouseObject)
  // _store.State.houses.push(newHouse)
  // console.log(newHouseObject)

  _api.post('',newHouseObject)
  .then(res => {
    console.log('api.postHouse', res.data.data)
    this.getHouses()
  })
  .catch (err => console.error(err))

}
    delete(houseId) {
      _api.delete(houseId)
      .then(res => {
        console.log(res.data)
        this.getHouses()
      })
      .catch(err => console.error(err))
    
    }

  constructor() {
    console.log("house service works")
    this.getHouses()
  }

}


const HOUSESERVICE = new HouseService()
export default HOUSESERVICE