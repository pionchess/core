export enum Color {
  Black = 0,
  White,
}

export enum PieceType {
  Pawn = '',
  Knight = 'N',
  // TODO: Add the rest of the types
}

export interface Piece {
  color: Color;
  type: PieceType;
}

export interface Move {
  from: string;
  to: string;
  piece: Piece;
}
