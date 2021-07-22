export const DRAW_X = "DRAW_X";
export const DRAW_O = "DRAW_O";
export const PLAYER_O = "PLAYER_O";
export const PLAYER_X = "PLAYER_X";
export const TURN = "TURN";
export const draw_x = (cellIndex) => ({
  type: DRAW_X,
  cellIndex,
});
export const draw_o = () => ({
  type: DRAW_O,
});
export const player_x = (player) => ({
  type: PLAYER_X,
  player
});
export const player_o = (player) => ({
  type: PLAYER_O,
  player,
});

export const turn = () => ({
  type: TURN,
  
});