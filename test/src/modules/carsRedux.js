export const types = {
    // GET_DESCRIPTION_PRODUCT:   'TESTS/PRODUCTS_PAGE/GET_DESCRIPTION_PRODUCT'
};


//----
const initialState = {
    carsList: [
        {
            id: '1',
            manufacturer: 'Toyota',
            brand: 'Corolla',
            year:  '1995 г',
            imgURL: 'https://s.auto.drom.ru/i24212/s/photos/14991/14990504/gen220wb_226472771.jpg',
            price: '110 000 p.',
            mileage: '290 тыс.км',
            drive: 'передний',
            engine: 'бензин',
            enginePower: '1.5 л',
        },
        {
            id: '2',
            manufacturer: 'Toyota',
            brand: 'Camry',
            year:  '2006 г',
            imgURL: 'https://s.auto.drom.ru/i24216/s/photos/18370/18369121/gen220wb_252445797.jpg',
            price: '720 000 p.',
            mileage: '230 тыс.км',
            drive: 'передний',
            engine: 'бензин',
            enginePower: '2.4 л',
        },
        {
            id: '3',
            manufacturer: 'Toyota',
            brand: 'Land Cruiser',
            year:  '2001 г',
            imgURL: 'https://s.auto.drom.ru/4/sales/photos/14676/14675440/gen220wb_124206253.jpg',
            price: '1 100 000 p.',
            mileage: '100 тыс.км',
            engine: 'бензин',
            drive: 'передний',
            enginePower: '4.7 л'
        },
        {
            id: '4',
            manufacturer: 'Volkswagen',
            brand: 'Passat',
            year:  '2008 г',
            imgURL: 'https://s.auto.drom.ru/i24231/s/photos/32873/32872405/gen600_358012480.jpg',
            price: '455 000 p.',
            mileage: '170 тыс.км',
            drive: 'передний',
            engine: 'бензин',
            enginePower: '1.8 л',
        },
        {
            id: '5',
            manufacturer: 'Volkswagen',
            brand: 'Amarok',
            year:  '2011 г',
            imgURL: 'https://s.auto.drom.ru/i24203/s/photos/24063/24062275/gen220wb_188847501.jpg',
            price: '999 000 p.',
            mileage: '125 тыс.км',
            drive: 'передний',
            engine: 'бензин',
            enginePower: '2.0 л',
        },
        {
            id: '6',
            manufacturer: 'Volkswagen',
            brand: 'Tiguan',
            year:  '2014 г',
            imgURL: 'https://s.auto.drom.ru/i24209/s/photos/22611/22610741/gen220wb_209142778.jpg',
            price: '700 000 p.',
            mileage: '133 тыс.км',
            engine: 'дизель',
            drive: 'передний',
            enginePower: '2.0 л'
        },
        {
            id: '7',
            manufacturer: 'Nissan',
            brand: 'Note',
            year:  '2011 г',
            imgURL: 'https://s.auto.drom.ru/i24219/s/photos/21176/21175975/gen220wb_272498707.jpg',
            price: '410 000 p.',
            mileage: '95 тыс.км',
            drive: 'передний',
            engine: 'бензин',
            enginePower: '1.4 л',
        },
        {
            id: '8',
            manufacturer: 'Nissan',
            brand: 'Teana',
            year:  '2011 г',
            imgURL: 'https://s.auto.drom.ru/i24220/s/photos/19876/19875939/gen220wb_284041203.jpg',
            price: '770 000 p.',
            mileage: '98 тыс.км',
            drive: 'передний',
            engine: 'бензин',
            enginePower: '2.5 л',
        },
        {
            id: '9',
            manufacturer: 'Nissan',
            brand: 'Sunny',
            year:  '2001 г',
            imgURL: 'https://s.auto.drom.ru/5/sales/photos/18659/18658311/gen220wb_154185722.jpg',
            price: '90 000 p.',
            mileage: '315 тыс.км',
            engine: 'дизель',
            drive: 'передний',
            enginePower: '1.5 л'
        },
        {
            id: '10',
            manufacturer: 'Nissan',
            brand: 'X-Trail',
            year:  '2012 г',
            imgURL: 'https://s.auto.drom.ru/i24192/s/photos/20504/20503963/gen220wb_159105096.jpg',
            price: '900 000 p.',
            mileage: '130 тыс.км',
            engine: 'бензин',
            drive: 'передний',
            enginePower: '2.0 л'
        }
    ]
};

//---- actionCreators--------//
export const actions = {
    // getDescriptionProduct:   ()        => ({type: types.GET_DESCRIPTION_PRODUCT})
};

//----
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case types.GET_DESCRIPTION_PRODUCT:
        //     return {
        //         ...state,
        //         isDispalyed: true
        //     };

        default:
            return state;
    }
};
