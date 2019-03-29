import React from 'react';
import CarsPageComponent from "../components/CarsPageComponent/CarsPageComponent";
import connect from "react-redux/es/connect/connect";
import {actions as action, getCarsFilteredSubstring} from "../modules/carsRedux";


const CarsPageContainer = (props) => {
    return <CarsPageComponent {...props}/>
};

const mapStateToProps = (state) => {
    return {
        carsList:      getCarsFilteredSubstring(state, state.carsPage.filterSubstringBrand, state.carsPage.filterSubstringModel)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFilterBrand: (substring) => {
            dispatch(action.setFilterSubstringBrand(substring))
        },
        onChangeFilterModel: (substring) => {
            dispatch(action.setFilterSubstringModel(substring))
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CarsPageContainer);