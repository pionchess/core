import { Color, Move, PieceType } from 'types';

export const serializeMove = (value: Move): string => {
  return value.toString();
};

export const deserializeMove = (value: string): Move => {
  return {
    from: value,
    to: value,
    piece: {
      color: Color.Black,
      type: PieceType.Pawn,
    },
  };
};
