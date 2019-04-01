import React from 'react';
import CarsPageComponent from "../../components/CarsPageComponent/CarsPageComponent";
import connect from "react-redux/es/connect/connect";
import {actions as action, getCarsFilteredSubstring, getCreatingCarDescription} from "../../modules/carsRedux";
import CarComponent from "../../components/CarComponent/CarComponent";
import {initialize as actionsReduxForm_initialize} from 'redux-form';


const CarsPageContainer = (props) => {
    return <CarsPageComponent {...props}/>
};

const mapStateToProps = (state) => {
    return {
        carsList: getCarsFilteredSubstring(state, state.carsPage.filterSubstringBrand, state.carsPage.filterSubstringModel),
        editMode: state.carsPage.editMode,
        selectedCarId: state.carsPage.selectedCarId,
        creating_carDescription: state.carsPage.creating_carDescription
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
        onEditModeClick: (guid) => {
            dispatch(action.setSelectedCarId(guid));
            dispatch(action.editMode());
            dispatch(action.copyCarDescriptionToCreatingCarDescription(guid))
        },

        onCarDescriptionEditFinishCommitted: (guid, creatingCarDescription) => {
            dispatch(action.disableEditMode());
            let carDescription = creatingCarDescription;

            dispatch(action.setCarDescription(guid, carDescription));
        },

        //----
        onChangeCreatingYear: (year) => {
            dispatch(action.setCreatingYear(year))
        },

        //----
        onChangeCreatingMileage: (mileage) => {
            dispatch(action.setCreatingMileage(mileage))
        },
        onChangeCreatingDrive: (drive) => {
            dispatch(action.setCreatingDrive(drive))
        },
        onChangeCreatingEngine: (engine) => {
            dispatch(action.setCreatingEngine(engine))
        },
        onChangeCreatingPower: (power) => {
            dispatch(action.setCreatingPower(power))
        },
        onChangeCreatingPrice: (price) => {
            dispatch(action.setCreatingPrice(price))
        },

        onAddCarButtonClick: (guid) => {
            dispatch(action.addCar(guid))
        },
        onUserpicChange: (imgUrl) => {
            dispatch(action.setUserPicUrl(imgUrl))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CarsPageContainer);




