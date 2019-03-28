import React from 'react';
import CarsPage from "../components/CarsPage";
import connect from "react-redux/es/connect/connect";


const CarsPageContainer = (props) => {
    return <CarsPage {...props}/>
};

const mapStateToProps = (state) => {
    return {
        carsList: state.carsPage.carsList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CarsPageContainer);