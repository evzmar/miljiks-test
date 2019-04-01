

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
        // {
        //     guid: '2',
        //     brand: 'Toyota',
        //     model: 'Camry',
        //     imgURL: 'https://s.auto.drom.ru/i24216/s/photos/18370/18369121/gen220wb_252445797.jpg',
        //     carDescription: {
        //         year:  '2006 г',
        //         price: '720 000 p.',
        //         mileage: '230 тыс.км',
        //         drive: 'передний',
        //         engine: 'бензин',
        //         enginePower: '2.4 л'
        //     }
        // },
        // {
        //     guid: '3',
        //     brand: 'Toyota',
        //     model: 'Land Cruiser',
        //     imgURL: 'https://s.auto.drom.ru/4/sales/photos/14676/14675440/gen220wb_124206253.jpg',
        //     carDescription: {
        //         year:  '2001 г',
        //         price: '1 100 000 p.',
        //         mileage: '100 тыс.км',
        //         engine: 'бензин',
        //         drive: 'передний',
        //         enginePower: '4.7 л'
        //     }
        // },
        // {
        //     guid: '4',
        //     brand: 'Volkswagen',
        //     model: 'Passat',
        //     imgURL: 'https://s.auto.drom.ru/i24231/s/photos/32873/32872405/gen600_358012480.jpg',
        //     carDescription: {
        //         year:  '2008 г',
        //         price: '455 000 p.',
        //         mileage: '170 тыс.км',
        //         drive: 'передний',
        //         engine: 'бензин',
        //         enginePower: '1.8 л'
        //     }
        // },
        // {
        //     guid: '5',
        //     brand: 'Volkswagen',
        //     model: 'Amarok',
        //     imgURL: 'https://s.auto.drom.ru/i24203/s/photos/24063/24062275/gen220wb_188847501.jpg',
        //     carDescription: {
        //         year:  '2011 г',
        //         price: '999 000 p.',
        //         mileage: '125 тыс.км',
        //         drive: 'передний',
        //         engine: 'бензин',
        //         enginePower: '2.0 л'
        //     }
        // },
        // {
        //     guid: '6',
        //     brand: 'Volkswagen',
        //     model: 'Tiguan',
        //     imgURL: 'https://s.auto.drom.ru/i24209/s/photos/22611/22610741/gen220wb_209142778.jpg',
        //     carDescription: {
        //         year:  '2014 г',
        //         price: '700 000 p.',
        //         mileage: '133 тыс.км',
        //         engine: 'дизель',
        //         drive: 'передний',
        //         enginePower: '2.0 л'
        //     }
        // },
        // {
        //     guid: '7',
        //     brand: 'Nissan',
        //     model: 'Note',
        //     imgURL: 'https://s.auto.drom.ru/i24219/s/photos/21176/21175975/gen220wb_272498707.jpg',
        //     carDescription: {
        //         year:  '2011 г',
        //         price: '410 000 p.',
        //         mileage: '95 тыс.км',
        //         drive: 'передний',
        //         engine: 'бензин',
        //         enginePower: '1.4 л'
        //     }
        // },
        // {
        //     guid: '8',
        //     brand: 'Nissan',
        //     model: 'Teana',
        //     imgURL: 'https://s.auto.drom.ru/i24220/s/photos/19876/19875939/gen220wb_284041203.jpg',
        //     carDescription: {
        //         year:  '2011 г',
        //         price: '770 000 p.',
        //         mileage: '98 тыс.км',
        //         drive: 'передний',
        //         engine: 'бензин',
        //         enginePower: '2.5 л'
        //     }
        // },
        // {
        //     guid: '9',
        //     brand: 'Nissan',
        //     model: 'Sunny',
        //     imgURL: 'https://s.auto.drom.ru/5/sales/photos/18659/18658311/gen220wb_154185722.jpg',
        //     carDescription: {
        //         year:  '2001 г',
        //         price: '90 000 p.',
        //         mileage: '315 тыс.км',
        //         engine: 'дизель',
        //         drive: 'передний',
        //         enginePower: '1.5 л'
        //     }
        // },
        // {
        //     guid: '10',
        //     brand: 'Nissan',
        //     model: 'X-Trail',
        //     imgURL: 'https://s.auto.drom.ru/i24192/s/photos/20504/20503963/gen220wb_159105096.jpg',
        //     carDescription: {
        //         year:  '2012 г',
        //         price: '900 000 p.',
        //         mileage: '130 тыс.км',
        //         engine: 'бензин',
        //         drive: 'передний',
        //         enginePower: '2.0 л'
        //     }
        // }
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


