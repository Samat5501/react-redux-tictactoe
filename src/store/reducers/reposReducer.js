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
  player: null,
};

export const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAW_X:
      return {};
    case DRAW_X:
      return {};
    case RESTART_BOARD:
      return {};
    default:
      return state;
  }
};
