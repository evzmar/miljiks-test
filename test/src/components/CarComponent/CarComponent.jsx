import React from 'react';
import style from './CarComponent.module.css';



const CarComponent = (props) => {

    return (
        <div className={style.carBlock}>
            <div className={style.carPictureBlock}>
                <img className={style.carPicture} src={props.carItem.carDescription.imgURL} alt="carDescription"/>
            </div>
            <div className={style.carBrandBlock}>
                <div className={style.carBrand}>
                    {props.carItem.carDescription.brand}
                </div>
                <div className={style.carModel}>
                    {props.carItem.carDescription.model}
                </div>
            </div>

            <div className={style.carsDescriptionBlock}>
                <div className={style.carsDescription}>
                    <label className={style.carDescriptionLabel}>
                        Год выпуска:
                    </label>
                    {!(props.editMode && (props.selectedCarId === props.carItem.guid))  ?
                        <span className={style.yearOfIssue}>
                                    {props.carItem.carDescription.year}
                        </span> :
                        <input className={style.carDescriptionInput}
                                value={props.creating_carDescription.year}
                                       onChange={
                                           (e) => {
                                               props.onChangeCreatingYear(e.currentTarget.value)
                                           }
                                       }/>
                    }
                </div>
                <div className={style.carsDescription}>
                    <label className={style.carDescriptionLabel}>
                        Пробег:
                    </label>
                    {!(props.editMode && (props.selectedCarId === props.carItem.guid))  ?
                        <span className={style.carsMileage}>
                                   {props.carItem.carDescription.mileage}
                        </span> :
                        <input className={style.carDescriptionInput}
                        value={props.creating_carDescription.mileage}
                               onChange={
                                   (e) => {
                                       props.onChangeCreatingMileage(e.currentTarget.value)
                                   }
                               }/>}
                </div>
                <div className={style.carsDescription}>
                    <label className={style.carDescriptionLabel}>
                        Привод:
                    </label>
                    {!(props.editMode && (props.selectedCarId === props.carItem.guid))  ?
                        <span className={style.carsDrive}>
                                   {props.carItem.carDescription.drive}
                                </span> :
                        <input className={style.carDescriptionInput}
                               value={props.creating_carDescription.drive}
                               onChange={
                                   (e) => {
                                       props.onChangeCreatingDrive(e.currentTarget.value)
                                   }
                               }
                        />}
                </div>
                <div className={style.carsDescription}>
                    <label className={style.carDescriptionLabel}>
                        Двигатель:
                    </label>
                    {!(props.editMode && (props.selectedCarId === props.carItem.guid))  ?
                        <span className={style.carsEngine}>
                                   {props.carItem.carDescription.engine}
                                </span> :
                        <input className={style.carDescriptionInput}
                               value={props.creating_carDescription.engine}
                               onChange={
                                   (e) => {
                                       props.onChangeCreatingEngine(e.currentTarget.value)
                                   }
                               }/>}
                </div>
                <div className={style.carsDescription}>
                    <label className={style.carDescriptionLabel}>
                        Мощность:
                    </label>
                    {!(props.editMode && (props.selectedCarId === props.carItem.guid))  ?
                        <span className={style.carsEnginePower}>
                                    {props.carItem.carDescription.enginePower}
                                </span> :
                        <input className={style.carDescriptionInput}
                               value={props.creating_carDescription.enginePower}
                               onChange={
                                   (e) => {
                                       props.onChangeCreatingPower(e.currentTarget.value)
                                   }
                               }/>}
                </div>
                <div className={style.carsDescription}>
                    <label className={style.carDescriptionLabel}>
                        Цена:
                    </label>
                    {!(props.editMode && (props.selectedCarId === props.carItem.guid))  ?
                        <span className={style.carsPrice}>
                                        {props.carItem.carDescription.price}
                                    </span> :
                        <input className={style.carDescriptionInput}
                               value={props.creating_carDescription.price}
                               onChange={
                                   (e) => {
                                       props.onChangeCreatingPrice(e.currentTarget.value)
                                   }
                               }/>}
                </div>
                {!(props.editMode && (props.selectedCarId === props.carItem.guid))  ?
                <button className={style.editСarSpecifications}
                        onClick={
                            (e) => {
                                props.onEditModeClick(props.carItem.guid)
                            }
                        }>
                    edit
                </button>:
                <button className={style.editСarSpecifications}
                        onClick={
                            (e) => {
                                props.onCarDescriptionEditFinishCommitted(props.selectedCarId, props.creating_carDescription)
                            }
                        }>
                    ok
                </button>}
                {/*</div>*/}
                {/*<div className={style.carPrice}>*/}
                {/*{props.carItem.price}*/}
                {/*</div>*/}
            </div>
        </div>

    )

};

export default CarComponent;



