import * as an from 'an';
import { Color, Move, PieceType } from 'types';

const move: Move = {
  from: '',
  to: '',
  piece: {
    color: Color.Black,
    type: PieceType.Knight,
  },
};

describe('Serialize move', () => {
  test('it should return a string', () => {
    const returned = an.serializeMove(move);
    expect(typeof returned).toEqual('string');
  });
});

describe('Deserialize move', () => {
  test('it should return a move', () => {
    const returned = an.deserializeMove('');
    expect(typeof returned).toEqual(typeof move);
  });
});
