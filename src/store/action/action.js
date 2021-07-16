export const DRAW_X = "DRAW_X";
export const DRAW_O = "DRAW_O";
export const PLAYER_O = "PLAYER_O";
export const PLAYER_X = "PLAYER_X";
export const RESTART_BOARD = "RESTART_BOARD";


export const draw_x = () => ({
    type: DRAW_X,
});

export const draw_o = () => ({
  type: DRAW_o,
});

export const player_x = () => ({
  type: PLAYER_X,
});

export const player_o = () => ({
  type: PLAYER_O,
});

export const restart_board = (obj) => ({
  type: RESTART_BOARD,
  obj,
});
