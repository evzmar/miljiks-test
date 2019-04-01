import {combineReducers} from "redux";
import {reducer as reducerCars} from "./carsRedux";
import {reducer as formReducer} from 'redux-form';



const  rootReducer = combineReducers({
    carsPage:     reducerCars,
    form:         formReducer
});

export default rootReducer;