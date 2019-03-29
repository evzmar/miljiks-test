import React from 'react';
import style from './CarsPageComponent.module.css';
import CarComponent from "../CarComponent/CarComponent";


const CarsPageComponent = (props) => {
    return (
        <div className={style.carsPageContainer}>
            <div className={style.searchBlock}>
                <input className={style.manufacturerSearch} placeholder='brand' size='20'
                       onChange={(e) =>
                           props.onChangeFilterBrand(e.currentTarget.value)
                       }
                />
                <input className={style.brandSearch} placeholder='model' size='20'
                       onChange={(e) =>
                           props.onChangeFilterModel(e.currentTarget.value)
                       }
                />
                <input className={style.priceSearch} placeholder='price' size='20'
                    // onChange={ (e) =>
                    //     props.onChangeFilter(e.currentTarget.value)
                    // }
                />
            </div>

            {props.carsList.map((carDescription) => {
                return (
                   <CarComponent carDescription={carDescription}/>
                )
            })}
        </div>
    )
};

export default CarsPageComponent;

