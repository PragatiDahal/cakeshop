import React from 'react'

const Reducer =(state, action) => {
    switch(action.type){
    case "SEARCH_QUERY":
        return{
            ...state,
            query: action.payload,
        };
    }
    return state;
};
  
export default Reducer;