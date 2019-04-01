

export const types = {
    SET_SELECTED_CAR_ID:              'TESTS/PRODUCTS_PAGE/SET_SELECTED_CAR_ID',
    SET_FILTER_SUBSTRING_BRAND:       'TEST/CARS_PAGE/SET_FILTER_SUBSTRING_BRAND',
    SET_FILTER_SUBSTRING_MODEL:       'TEST/CARS_PAGE/SET_FILTER_SUBSTRING_MODEL',
    ADD_EDIT_MODE:                    'TEST/CARS_PAGE/ADD_EDIT_MODE',
    DISABLE_EDIT_MODE:                'TEST/CARS_PAGE/DISABLE_EDIT_MODE',

    SET_CREATING_YEAR:                'TEST/CARS_PAGE/SET_CREATING_YEAR',
    SET_CREATING_MILEAGE:             'TEST/CARS_PAGE/SET_CREATING_MILEAGE',
    SET_CREATING_ENGINE:              'TEST/CARS_PAGE/SET_CREATING_ENGINE',
    SET_CREATING_DRIVE:               'TEST/CARS_PAGE/SET_CREATING_DRIVE',
    SET_CREATING_POWER:               'TEST/CARS_PAGE/SET_CREATING_POWER',
    SET_CREATING_PRICE:               'TEST/CARS_PAGE/SET_CREATING_PRICE',
    COPY_CAR_DESCRIPTION_TO_CREATING_CAR_DESCRIPTION: 'TEST/CARS_PAGE/COPY_CAR_DESCRIPTION_TO_CREATING_CAR_DESCRIPTION',
    SET_CAR_DESCRIPTION:              'TEST/CARS_PAGE/SET_CAR_DESCRIPTION',
    SET_USER_PIC_URL:                 'TEST/CARS_PAGE/SET_USER_PIC_URL',
    ADD_CAR:                          'TEST/CARS_PAGE/ADD_CAR'
};


//----
const initialState = {
    carsList: [
        {
            guid: '1',
            carDescription: {
                brand: 'Toyota',
                model: 'Corolla',
                imgURL: 'https://s.auto.drom.ru/i24212/s/photos/14991/14990504/gen220wb_226472771.jpg',
                year:  '1995 г',
                price: '110 000 p.',
                mileage: '290 тыс.км',
                drive: 'передний',
                engine: 'бензин',
                enginePower: '1.5 л'
            }
        },
        {
            guid: '2',
            carDescription: {
                brand: 'Toyota',
                model: 'Camry',
                imgURL: 'https://s.auto.drom.ru/i24216/s/photos/18370/18369121/gen220wb_252445797.jpg',
                year:  '2006 г',
                price: '720 000 p.',
                mileage: '230 тыс.км',
                drive: 'передний',
                engine: 'бензин',
                enginePower: '2.4 л'
            }
        },
        {
            guid: '3',
            carDescription: {
                brand: 'Toyota',
                model: 'Land Cruiser',
                imgURL: 'https://s.auto.drom.ru/4/sales/photos/14676/14675440/gen220wb_124206253.jpg',
                year:  '2001 г',
                price: '1 100 000 p.',
                mileage: '100 тыс.км',
                engine: 'бензин',
                drive: 'передний',
                enginePower: '4.7 л'
            }
        },
        {
            guid: '4',
            carDescription: {
                brand: 'Volkswagen',
                model: 'Passat',
                imgURL: 'https://s.auto.drom.ru/i24231/s/photos/32873/32872405/gen600_358012480.jpg',
                year:  '2008 г',
                price: '455 000 p.',
                mileage: '170 тыс.км',
                drive: 'передний',
                engine: 'бензин',
                enginePower: '1.8 л'
            }
        },
        {
            guid: '5',
            carDescription: {
                brand: 'Volkswagen',
                model: 'Amarok',
                imgURL: 'https://s.auto.drom.ru/i24203/s/photos/24063/24062275/gen220wb_188847501.jpg',
                year:  '2011 г',
                price: '999 000 p.',
                mileage: '125 тыс.км',
                drive: 'передний',
                engine: 'бензин',
                enginePower: '2.0 л'
            }
        },
        {
            guid: '6',
            carDescription: {
                brand: 'Volkswagen',
                model: 'Tiguan',
                imgURL: 'https://s.auto.drom.ru/i24209/s/photos/22611/22610741/gen220wb_209142778.jpg',
                year:  '2014 г',
                price: '700 000 p.',
                mileage: '133 тыс.км',
                engine: 'дизель',
                drive: 'передний',
                enginePower: '2.0 л'
            }
        },
        {
            guid: '7',
            carDescription: {
                brand: 'Nissan',
                model: 'Note',
                imgURL: 'https://s.auto.drom.ru/i24219/s/photos/21176/21175975/gen220wb_272498707.jpg',
                year:  '2011 г',
                price: '410 000 p.',
                mileage: '95 тыс.км',
                drive: 'передний',
                engine: 'бензин',
                enginePower: '1.4 л'
            }
        },
        {
            guid: '8',
            carDescription: {
                brand: 'Nissan',
                model: 'Teana',
                imgURL: 'https://s.auto.drom.ru/i24220/s/photos/19876/19875939/gen220wb_284041203.jpg',
                year:  '2011 г',
                price: '770 000 p.',
                mileage: '98 тыс.км',
                drive: 'передний',
                engine: 'бензин',
                enginePower: '2.5 л'
            }
        },
        {
            guid: '9',
            carDescription: {
                brand: 'Nissan',
                model: 'Sunny',
                imgURL: 'https://s.auto.drom.ru/5/sales/photos/18659/18658311/gen220wb_154185722.jpg',
                year:  '2001 г',
                price: '90 000 p.',
                mileage: '315 тыс.км',
                engine: 'дизель',
                drive: 'передний',
                enginePower: '1.5 л'
            }
        },
        {
            guid: '10',
            carDescription: {
                brand: 'Nissan',
                model: 'X-Trail',
                imgURL: 'https://s.auto.drom.ru/i24192/s/photos/20504/20503963/gen220wb_159105096.jpg',
                year:  '2012 г',
                price: '900 000 p.',
                mileage: '130 тыс.км',
                engine: 'бензин',
                drive: 'передний',
                enginePower: '2.0 л'
            }
        }
    ],
    selectedCarId: null,
    filterSubstringBrand: null,
    filterSubstringModel: null,
    editMode: false,
    creating_carDescription: {
        brand:   '',
        model:   '',
        imgURL:  '',
        year:    '',
        mileage: '',
        engine:  '',
        drive:   '',
        power:   '',
        price:   ''
    }
};

//---- actionCreators--------//
export const actions = {
    setSelectedCarId:           (id)           => ({type: types.SET_SELECTED_CAR_ID, id}),
    setFilterSubstringBrand:    (substring)    => ({type: types.SET_FILTER_SUBSTRING_BRAND, substring}),
    setFilterSubstringModel:    (substring)    => ({type: types.SET_FILTER_SUBSTRING_MODEL, substring}),
    editMode:                   ()             => ({type: types.ADD_EDIT_MODE}),
    disableEditMode:            ()             => ({type: types.DISABLE_EDIT_MODE}),

    setCreatingYear:            (year)         => ({type: types.SET_CREATING_YEAR, year}),
    setCreatingMileage:         (mileage)      => ({type: types.SET_CREATING_MILEAGE, mileage}),
    setCreatingEngine:          (engine)       => ({type: types.SET_CREATING_ENGINE, engine}),
    setCreatingDrive:           (drive)        => ({type: types.SET_CREATING_DRIVE, drive}),
    setCreatingPower:           (power)        => ({type: types.SET_CREATING_POWER, power}),
    setCreatingPrice:           (price)        => ({type: types.SET_CREATING_PRICE, price}),

    copyCarDescriptionToCreatingCarDescription: (guid) => ({type: types.COPY_CAR_DESCRIPTION_TO_CREATING_CAR_DESCRIPTION, guid}),
    setCarDescription:        (guid, carDescription)  => ({type: types.SET_CAR_DESCRIPTION, guid, carDescription}),
    setUserPicUrl:            (imgUrl)          => ({type: types.SET_USER_PIC_URL, imgUrl}),
    addCar:                   (guid)            => ({type: types.ADD_CAR, guid})
};

//----
export const reducer = (state = initialState, action) => {

    //----
    const newState = {
        ...state,
        carsList: state.carsList.map(carObj => ({...carObj, carDescription: {...carObj.carDescription}})),
        creating_carDescription: {...state.creating_carDescription}
    };

    switch (action.type) {

        case types.SET_SELECTED_CAR_ID:
        {
            newState.selectedCarId = action.id;
            return newState;
        }

        case types.SET_FILTER_SUBSTRING_BRAND:
        {
            newState.filterSubstringBrand = action.substring;
            return newState;
        }

        case types.SET_FILTER_SUBSTRING_MODEL:
        {
            newState.filterSubstringModel = action.substring;
            return newState;
        }

        //-------
        case types.SET_CREATING_YEAR:
        {
            newState.creating_carDescription.year = action.year;
            return newState;
        }

        case types.SET_CREATING_MILEAGE:
        {
            newState.creating_carDescription.mileage = action.mileage;
            return newState;
        }

        case types.SET_CREATING_ENGINE:
        {
            newState.creating_carDescription.engine = action.engine;
            return newState;
        }

        case types.SET_CREATING_DRIVE:
        {
            newState.creating_carDescription.drive = action.drive;
            return newState;
        }

        case types.SET_CREATING_POWER:
        {
            newState.creating_carDescription.power = action.power;
            return newState;
        }

        case types.SET_CREATING_PRICE:
        {
            newState.creating_carDescription.price = action.price;
            return newState;
        }

        case types.COPY_CAR_DESCRIPTION_TO_CREATING_CAR_DESCRIPTION:
        {
            let cars = newState.carsList.filter( (car) => {
                return car.guid === action.guid
            });
            newState.creating_carDescription = cars[0].carDescription;
            return newState;
        }

        case types.ADD_EDIT_MODE:
        {
            newState.editMode = true;
            return newState;
        }

        case types.DISABLE_EDIT_MODE:
        {
            newState.editMode = false;
            return newState;
        }

        case types.SET_CAR_DESCRIPTION:
        {
          let cars = newState.carsList.filter( (car) => {
                return car.guid === action.guid
            });
          cars[0].carDescription = action.carDescription;
          return newState;
        }

        case types.SET_USER_PIC_URL:
             {
                 newState.imgURL = action.imgUrl;
                 return newState;
            }

        case types.ADD_CAR:

            let car =  {
                guid: action.guid,
                carDescription: {
                    brand: 'brand',
                    model: 'model',
                    imgURL: 'data:image/jpeg;base64,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',
                    year:  'year',
                    price: 'price',
                    mileage: 'mileage',
                    engine: 'engine',
                    drive: 'drive',
                    enginePower: 'enginePower'
                }
            };

            newState.carsList = [...newState.carsList, car];
            return newState;

        default:
            return state;
    }
};

//---- Selector -----------//

export const getCarsFilteredSubstring = (globalState, filterSubstringBrand, filterSubstringModel) => {

    let filteredData = globalState.carsPage.carsList;

    if(filterSubstringBrand !== null){
        filteredData = globalState.carsPage.carsList.filter((item) => {
            return item.carDescription.brand.toLowerCase().indexOf(filterSubstringBrand) > -1;
        });
    }
    if (filterSubstringModel !== null) {
        filteredData = globalState.carsPage.carsList.filter((item) => {
            return item.carDescription.model.toLowerCase().indexOf(filterSubstringModel) > -1;
        });
    }


    return filteredData;
};


