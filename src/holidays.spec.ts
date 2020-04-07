import {isHoliday} from './holidays';

describe('isHoliday', () => {
  describe('Given a list of holidays', () => {
    describe('and a date that is an actual holiday', () => {
      it('Should return true', () => {
        expect(isHoliday(['10/10/2020'], new Date('10/10/2020'))).toEqual(true)
      })
    })
    describe('and a date that is not a holiday', () => {
      it('Should return false', () => {
        expect(isHoliday(['10/10/2020'], new Date('11/10/2020'))).toEqual(false)
      })
    })
  })
})