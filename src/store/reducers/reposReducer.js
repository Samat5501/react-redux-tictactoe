import {
  DRAW_O,
  RESTART_BOARD,
  DRAW_X,
  PLAYER_O,
  PLAYER_X,
} from "../action/action";

const initialState = {
  size: 3,
  moves: 0,
  boardSize: Math.pow(3, 2),
  winner: "",
  player: '',
};

export const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAW_X:
      const newXState = [...state];
      newXState[action.cellIndex] = "X";
      return newXState;

    case DRAW_O:
      const newOState = [...state];
      newOState[action.cellIndex] = "O";
      return newOState;

    // case RESTART_BOARD:
    //   return {
    //     ...state,
    //     size: action.obj.size,
    //     moves: state.moves,
    //     winner: action.obj.winner,
    //     player: action.obj.player,
    //   };
    default:
      return state;
  }
};
