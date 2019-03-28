import React from 'react';
import style from './CarsPage.module.css';



const CarsPage = (props) => {
    return (
        <div className={style.carsPageContainer}>
            <input className={style.searchBlock} placeholder='search' size='20'
                   onChange={ (e) =>
                       props.onChangeFilter(e.currentTarget.value)
                   }
            />
            {props.carsList.map( (car) => {
                return (
                    <div className={style.carBlock}>
                        <div className={style.carPictureBlock}>
                            <img className={style.carPicture} src={car.imgURL} alt="car"/>
                        </div>
                        <div className={style.carBrandBlock}>
                            <div className={style.carManufacturer}>
                                {car.manufacturer}
                            </div>
                            <div className={style.carBrand}>
                                {car.brand}
                            </div>
                        </div>
                        <div className={style.carsSpecificationsBlock}>
                    <span className={style.yearOfIssue}>
                        {car.year}
                    </span>
                            <span className={style.carsMileage}>
                         {car.mileage}
                    </span>
                            <span className={style.carsDrive}>
                         {car.drive}
                    </span>
                            <span className={style.carsEngine}>
                         {car.engine}
                    </span>
                            <span className={style.carsEnginePower}>
                         {car.enginePower}
                    </span>
                        </div>
                        <div className={style.carPrice}>
                            {car.price}
                        </div>
                    </div>
                    )
            })}
        </div>
    )
};

export default CarsPage;

