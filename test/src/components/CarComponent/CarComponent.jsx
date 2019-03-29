import React from 'react';
import style from "../CarsPageComponent/CarsPageComponent.module.css";


const CarComponent = ({carDescription}) => {
    return (
        <div className={style.carBlock}>
            <div className={style.carPictureBlock}>
                <img className={style.carPicture} src={carDescription.imgURL} alt="carDescription"/>
            </div>
            <div className={style.carBrandBlock}>
                <div className={style.carBrand}>
                    {carDescription.brand}
                </div>
                <div className={style.carModel}>
                    {carDescription.model}
                </div>
            </div>
            <div className={style.carsSpecificationsBlock}>
                    <span className={style.yearOfIssue}>
                        {carDescription.year}
                    </span>
                   <span className={style.carsMileage}>
                         {carDescription.mileage}
                    </span>
                    <span className={style.carsDrive}>
                         {carDescription.drive}
                    </span>
                    <span className={style.carsEngine}>
                         {carDescription.engine}
                    </span>
                    <span className={style.carsEnginePower}>
                         {carDescription.enginePower}
                    </span>
            </div>
            <div className={style.carPrice}>
                {carDescription.price}
            </div>
        </div>
    )
};

export default CarComponent;