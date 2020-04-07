import {sum} from './sum';

describe('Sum', () => {
  describe('Given an arbitrary amount of arguments(number)', () => {
    it('Should return the sum of them', () => {
      expect(sum(1,2,3,4)).toEqual(10)
    })
  })
}) 