import intialState from '../App'


export const mainReducer = (state=intialState, action) =>{
    switch (action.type){
        case 'LOADED' :
            return{
                ...state,
                dataLoaded: true
            };
        default: return state
    }

};