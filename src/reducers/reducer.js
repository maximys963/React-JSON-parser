import intialState from '../App'


export const mainReducer = (state=intialState, action) =>{
    switch (action.type){
        case 'LOADED' :
            return{
                ...state,
                dataLoaded: true,
                data: action.payload,
            };
        case "PAGE_CLICK" :
            return{
                ...state,
                pageNumber: action.payload
            };
        default: return state
    }

};