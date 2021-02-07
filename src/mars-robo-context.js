import React, {useReducer, createContext} from 'react';

export const MarsRobotContext = createContext();

const initialState = {
    dimensions: {
        rows: 0,
        columns: 0
    },
    startPosition: {
        initialRow: 0,
        initialColumn: 0,
        orientation: 'North'
    },
    instructions: ['New'],
    grid: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_DIMENSIONS" :
            return {
                ...state, dimensions: {
                    rows: action.payload.rows,
                    columns: action.payload.columns
                }
            };
        case "SET_INITIAL_POSITION":
            return {
                ...state, startPosition: {
                    initialRow: action.payload.initialRow,
                    initialColumn: action.payload.initialColumn,
                    orientation: action.payload.orientation
                }
            };
        case "SET_INSTRUCTIONS":
            return {
                ...state, instructions: action.payload.instructions
            };
        default: throw new Error();
    }
};

export const MarsRobotContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <MarsRobotContext.Provider value={[state, dispatch]}>
          {props.children}
      </MarsRobotContext.Provider>
  );
};
