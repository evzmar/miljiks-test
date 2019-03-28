import React from 'react';
import CarsPage from "../components/CarsPage";
import connect from "react-redux/es/connect/connect";
import {actions as action, getCarsFilteredByManufacturerSubstring} from "../modules/carsRedux";


const CarsPageContainer = (props) => {
    return <CarsPage {...props}/>
};

const mapStateToProps = (state) => {
    return {
        carsList:      getCarsFilteredByManufacturerSubstring(state, state.carsPage.filterSubstring),
        // carsList: state.carsPage.carsList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFilter: (substring) => {
            dispatch(action.setFilterSubstring(substring))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CarsPageContainer);