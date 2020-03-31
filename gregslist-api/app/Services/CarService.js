import Car from "../Models/Car.js"
import _store from '../store.js'
import store from "../store.js"

// @ts-ignore
let _api = axios.create({
  baseURL:'//bcw-sandbox.herokuapp.com/api/cars',
  timeout: 3000
})


class CarService {
  
  getCars(){
    _api.get()
    .then(res => {
      console.log(res.data)
      let cars = res.data.data.map (rawCarData => new Car (rawCarData))
      store.commit('cars', cars)
      // console.log(store.State)

    })
    .catch (err => console.error(err))
  }

  create(newCarObject) {
    // NOTE this was for local storage
    // let newCar = new Car(newCarObject)
    // _store.State.cars.push(newCar)
    // console.log(_store.State.cars)
    _api.post('', newCarObject)
    .then(res => {
      console.log(res.data, 'api.post');
      // NOTE this is one way to do create new car, the easier way is below store.commit
      // let newCar = new Car(res.data.data) 
      // // res.data.data. is specific car in this instance of the new Car array
      // let cars = [...store.State.cars, newCar]
      // // commiting newCar to the db of cars[]
      // store.commit('cars', cars)
      this.getCars()
    })
    .catch (err => console.error(err))
  }
  delete(carId) {
    _api.delete(carId)
    .then(res => {
      console.log(res.data)
      this.getCars()
    })
    .catch(err => console.error(err))
  }

  bid(carId) {
    let foundCar = store.State.cars.find(car => car.id == carId)
    if (foundCar) {
      foundCar.price += 100
      _api.put(carId, foundCar)
        .then(res => {
          this.getCars()
        })
        .catch(err => console.error(err))
    }
  }

  constructor() {
    console.log("car service works")
    this.getCars()
  }

}


const CARSERVICE = new CarService()
export default CARSERVICE