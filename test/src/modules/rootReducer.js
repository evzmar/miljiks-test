import {combineReducers} from "redux";
import {reducer as reducerCars} from "./carsRedux";



const  rootReducer = combineReducers({
    carsPage:     reducerCars
});

export default rootReducer;