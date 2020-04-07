import {flatten} from './flatten';

describe('Flatten', () => {
  describe('Given an item', () => {
    it('Should return a list with the item inside', () => {
      expect(flatten('a')).toEqual(['a'])
    })
  })
  describe('Given a nested list of items', () => {
    it('Should flatten the nested list', () => {
      expect(flatten(['a', 'b', ['c', ['d']]])).toEqual(['a', 'b', 'c', 'd'])
    })
  })
  describe('Given a very big and heavily nested list', () => {
    it('Should flatten the nested list', () => {
      expect(flatten(['a', 'b', ['c', ['d', ]]])).toEqual(['a', 'b', 'c', 'd'])
    })
  })
})