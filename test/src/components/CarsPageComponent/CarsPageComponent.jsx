import React from 'react';
import style from './CarsPageComponent.module.css';
import CarComponent from "../CarComponent/CarComponent";
import generateGuid from "../../utils/guds";


const CarsPageComponent = (props) => {
    return (
        <div className={style.carsPageContainer}>
            <div className={style.searchBlock}>
                <input className={style.brandSearch} placeholder='brand' size='20'
                       onChange={(e) =>
                           props.onChangeFilterBrand(e.currentTarget.value)
                       }
                />
                <input className={style.modelSearch} placeholder='model' size='20'
                       onChange={(e) =>
                           props.onChangeFilterModel(e.currentTarget.value)
                       }
                />
            </div>

            {props.carsList.map((carItem) => {
                return (
                   <CarComponent carItem={carItem}
                                 key={carItem.guid}
                                 creating_carDescription={props.creating_carDescription}
                                 selectedCarId={props.selectedCarId}
                                 editMode={props.editMode}
                                 onEditModeClick={props.onEditModeClick}
                                 onDisableEditModeClick={props.onCarDescriptionEditFinishCommitted}
                                 onCarDescriptionEditFinishCommitted={props.onCarDescriptionEditFinishCommitted}

                                 onChangeCreatingYear={props.onChangeCreatingYear}
                                 onChangeCreatingMileage={props.onChangeCreatingMileage}
                                 onChangeCreatingProfile={props.onChangeCreatingDrive}
                                 onChangeCreatingEngine={props.onChangeCreatingEngine}
                                 onChangeCreatingPower={props.onChangeCreatingPower}
                                 onChangeCreatingPrice={props.onChangeCreatingPrice}

                   />
                )
            })}
            <button className={style.addСarButton}
                    onClick={ (e) => {
                      props.onAddCarButtonClick(generateGuid())
            }}>
                add
            </button>
        </div>
    )
};

export default CarsPageComponent;

