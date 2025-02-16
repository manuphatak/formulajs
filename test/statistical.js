import 'should'

import * as error from '../src/utils/error.js'
import * as mathTrig from '../src/math-trig.js'
import * as statistical from '../src/statistical.js'

describe('Statistical', () => {
  it('AVEDEV', () => {
    statistical.AVEDEV(undefined).should.equal(error.num)
    statistical.AVEDEV(2, undefined, undefined).should.equal(0)
    statistical.AVEDEV(error.na).should.equal(error.na)
    statistical.AVEDEV(2, 4, 8, 16).should.approximately(4.5, 1e-9)
    statistical.AVEDEV([2, 4, 8, 16]).should.approximately(4.5, 1e-9)
    statistical.AVEDEV([2, 4], [8, 16]).should.approximately(4.5, 1e-9)
    statistical
      .AVEDEV([
        [2, 4],
        [8, 16]
      ])
      .should.approximately(4.5, 1e-9)
    statistical.AVEDEV([2, 'invalid'], [8, 16]).should.equal(error.value)
  })

  it('AVERAGE', () => {
    statistical.AVERAGE(undefined).should.equal(error.div0)
    statistical.AVERAGE(2, undefined, undefined).should.equal(2)
    statistical.AVERAGE(error.na).should.equal(error.na)
    statistical.AVERAGE(2, 4, 8, 16).should.approximately(7.5, 1e-9)
    statistical.AVERAGE([2, 4, 8, 16]).should.approximately(7.5, 1e-9)
    statistical.AVERAGE([2, 4], [8, 16]).should.approximately(7.5, 1e-9)
    statistical
      .AVERAGE([
        [2, 4],
        [8, 16]
      ])
      .should.approximately(7.5, 1e-9)
    statistical
      .AVERAGE([
        [2, 4],
        [8, 16],
        [true, false]
      ])
      .should.approximately(7.5, 1e-9)
  })

  it('AVERAGEA', () => {
    statistical.AVERAGEA(undefined).should.equal(error.div0)
    statistical.AVERAGEA(2, undefined, undefined).should.equal(2)
    statistical.AVERAGEA(error.na).should.equal(error.na)
    statistical.AVERAGEA(2, 4, 8, 16).should.approximately(7.5, 1e-9)
    statistical.AVERAGEA([2, 4, 8, 16]).should.approximately(7.5, 1e-9)
    statistical.AVERAGEA([2, 4], [8, 16]).should.approximately(7.5, 1e-9)
    statistical.AVERAGEA([2, 4], [6, 8], [true, false]).should.approximately(3.5, 1e-9)
    statistical.AVERAGEA([2, 4], [6, 8], [true, false], ['a', 'b']).should.approximately(2.625, 1e-9)
  })

  it('AVERAGEIF', () => {
    statistical.AVERAGEIF([undefined], '>5').should.equal(error.value) // different than Excel
    statistical.AVERAGEIF([2, 4, 8, 16], '>5').should.equal(12)
    statistical.AVERAGEIF([2, 4, 8, 16], '*').should.equal(7.5)
    statistical.AVERAGEIF([2, 4, 8, 16], '>5', [1, 2, 3, 4]).should.approximately(3.5, 1e-9)
    statistical
      .AVERAGEIF(
        [
          [2, 4],
          [8, 16]
        ],
        '>5',
        [
          [1, 2],
          [3, 4]
        ]
      )
      .should.approximately(3.5, 1e-9)
    statistical.AVERAGEIF([2, 4, 'invalid', 16], '>5').should.equal(error.value)
    statistical.AVERAGEIF().should.equal(error.na)
  })

  it('AVERAGEIFS', () => {
    statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '>2').should.equal(12)
    statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '*').should.equal(7.5)
    statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '>2', [1, 2, 3, 4], '>2').should.equal(12)
    statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '>2', [1, 1, 1, 1], '>2').should.equal(0)
    statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '>2', [1, 1, 1, 1], '*').should.equal(12)
  })

  it('BETA.DIST', () => {
    statistical.BETA.DIST(2, 8, 10, true, 1, 3).should.approximately(0.6854705810117458, 1e-9)
    statistical.BETA.DIST(1 / 52, 0.4, 9.6, false).should.approximately(9.966606842186748, 1e-9)
    statistical.BETA.DIST(1 / 52, 0.4, 9.6, true).should.approximately(0.5406016379941343, 1e-9)
    statistical.BETA.DIST(2, 8, 10).should.equal(error.value)
    statistical.BETA.DIST(2, 8, 'invalid', 1, 3).should.equal(error.value)
  })

  it('BETA.INV', () => {
    statistical.BETA.INV(0.6854705810117458, 8, 10, 1, 3).should.approximately(1.9999999999999998, 1e-9)
    statistical.BETA.INV(0.6854705810117458, 'invalid', 10, 1, 3).should.equal(error.value)
  })

  it('BINOM.DIST', () => {
    statistical.BINOM.DIST(6, 10, 0.5, false).should.approximately(0.205078125, 1e-9)
    statistical.BINOM.DIST(6, 'invalid', 0.5, false).should.equal(error.value)
  })

  it('BINOM.DIST.RANGE', () => {
    statistical.BINOM.DIST.RANGE(60, 0.75, 48).should.approximately(0.08397496742904752, 1e-9)
    statistical.BINOM.DIST.RANGE(60, 0.75, 45, 50).should.approximately(0.5236297934718873, 1e-9)
    statistical.BINOM.DIST.RANGE(60, 0.75, 'invalid', 50).should.equal(error.value)
  })

  it('BINOM.INV', () => {
    statistical.BINOM.INV(6, 0.5, 0.75).should.equal(4)
    statistical.BINOM.INV(6, 'invalid', 0.75).should.equal(error.value)
  })

  it('CHISQ.DIST', () => {
    statistical.CHISQ.DIST(0.5, 1, true).should.approximately(0.5204998778130242, 1e-9)
    statistical.CHISQ.DIST(0.5, 'invalid', true).should.equal(error.value)
  })

  it('CHISQ.DIST.RT', () => {
    statistical.CHISQ.DIST.RT().should.equal(error.na)
    statistical.CHISQ.DIST.RT(1).should.equal(error.na)
    statistical.CHISQ.DIST.RT(-3, 4).should.equal(error.num)
    statistical.CHISQ.DIST.RT(4, 1.01 * Math.pow(10, 10)).should.equal(error.num)
    statistical.CHISQ.DIST.RT('hello', 4).should.equal(error.value)
    statistical.CHISQ.DIST.RT(3, 4).should.approximately(0.5578254, 1e-6)
  })

  it('CHISQ.INV', () => {
    statistical.CHISQ.INV(0.93, 1).should.approximately(3.283020286473263, 1e-9)
    statistical.CHISQ.INV(0.6, 2).should.approximately(1.83258146374831, 1e-9)
    statistical.CHISQ.INV(0.6, 'invalid').should.equal(error.value)
  })

  it('CHISQ.INV.RT', () => {
    statistical.CHISQ.INV.RT().should.equal(error.na)
    statistical.CHISQ.INV.RT(0.5).should.equal(error.na)
    statistical.CHISQ.INV.RT(-1, 2).should.equal(error.num)
    statistical.CHISQ.INV.RT(0.4, 0.5).should.equal(error.num)
    statistical.CHISQ.INV.RT(0.5, 'hello').should.equal(error.value)
    statistical.CHISQ.INV.RT(0.4, 6).should.approximately(6.210757195, 1e-9)
  })

  it('CHISQ.TEST', () => {
    statistical.CHISQ.TEST().should.equal(error.na)
    statistical.CHISQ.TEST([58, 11, 10, 35, 25, 23]).should.equal(error.na)
    statistical.CHISQ.TEST([58, 11, 10, 35, 25, 23], 'a').should.equal(error.value)
    statistical.CHISQ.TEST([58, 11, 10, 35, 25, 23], [45.35, 17.56, 16.09, 47.65, 18.44]).should.equal(error.value)
    statistical.CHISQ.TEST([58, 11, 10, 35, 25, 23], [45.35, 17.56, 16.09, 47.65, 18.44, 16.91]).should.equal(0.006376)
    statistical.CHISQ.TEST(
      [
        [58, 35],
        [11, 25],
        [10, 23]
      ],
      [
        [45.35, 47.65],
        [17.56, 18.44],
        [16.09, 16.91]
      ]
    ).should.equal(0.000308)
    statistical.CHISQ.TEST(
      [
        [58, 35],
        [11, 25],
        [10, 23]
      ],
      [[45.35], [17.56, 18.44], [16.09, 16.91]]
    ).should.equal(error.value)
  })

  it('CONFIDENCE.NORM', () => {
    statistical.CONFIDENCE.NORM(0.05, 2.5, 50).should.approximately(0.6929519121748391, 1e-9)
    statistical.CONFIDENCE.NORM(0.05, 'invalid', 50).should.equal(error.value)
  })

  it('CONFIDENCE.T', () => {
    statistical.CONFIDENCE.T(0.05, 1, 50).should.approximately(0.28419685015290463, 1e-9)
    statistical.CONFIDENCE.T(0.05, 1, 'invalid').should.equal(error.value)
  })

  it('CORREL', () => {
    statistical.CORREL([3, 2, 4, 5, 6], [9, 7, 12, 15, 17]).should.approximately(0.9970544855015815, 1e-9)
    statistical.CORREL([3, 2, 4, 5, 6], [9, 7, 12, 'invalid', 17]).should.equal(error.value)
  })

  it('COUNT', () => {
    statistical.COUNT().should.equal(0)
    statistical.COUNT(undefined).should.equal(0)
    statistical.COUNT(error.na).should.equal(0)
    statistical.COUNT(1, 2, 3, 4).should.equal(4)
    statistical.COUNT(1, 2, error.div0, 4).should.equal(3)
    statistical.COUNT([1, 2, 3, 4]).should.equal(4)
    statistical.COUNT([1, 2], [3, 4]).should.equal(4)
    statistical
      .COUNT([
        [1, 2],
        [3, 4]
      ])
      .should.equal(4)
    statistical
      .COUNT([
        [1, 2],
        [3, 2],
        [null, null]
      ])
      .should.equal(4)
    statistical
      .COUNT([
        [1, 2],
        ['a', 'b'],
        [null, null]
      ])
      .should.equal(2)
  })

  it('COUNTA', () => {
    statistical.COUNTA().should.equal(0)
    statistical.COUNTA(undefined).should.equal(0)
    statistical.COUNTA(error.na).should.equal(1)
    statistical.COUNTA(1, 2, error.div0).should.equal(3)
    statistical.COUNTA(1, null, 3, 'a', '', 'c').should.equal(4)
    statistical.COUNTA([1, null, 3, 'a', '', 'c']).should.equal(4)
    statistical.COUNTA([1, null, 3], ['a', '', 'c']).should.equal(4)
    statistical
      .COUNTA([
        [1, null, 3],
        ['a', '', 'c']
      ])
      .should.equal(4)
  })

  it('COUNTBLANK', () => {
    statistical.COUNTBLANK().should.equal(0)
    statistical.COUNTBLANK(undefined).should.equal(1)
    statistical.COUNTBLANK(error.na).should.equal(0)
    statistical.COUNTBLANK(1, 2, error.div0).should.equal(0)
    statistical.COUNTBLANK(1, null, 3, 'a', '', 'c').should.equal(2)
    statistical.COUNTBLANK([1, null, 3, 'a', '', 'c']).should.equal(2)
    statistical.COUNTBLANK([1, null, 3], ['a', '', 'c']).should.equal(2)
    statistical
      .COUNTBLANK([
        [1, null, 3],
        ['a', '', 'c']
      ])
      .should.equal(2)
  })

  it('COUNTIF', () => {
    statistical.COUNTIF([undefined], '>1').should.equal(0)
    statistical.COUNTIF([error.na], '>1').should.equal(0)
    statistical.COUNTIF([1, null, 3, 'a', ''], '>1').should.equal(1)
    statistical.COUNTIF([1, null, 'c', 'a', ''], '>1').should.equal(0)
    statistical
      .COUNTIF(
        [
          [1, null, 3],
          ['a', 4, 'c']
        ],
        '>1'
      )
      .should.equal(2)
    statistical
      .COUNTIF(
        [
          [1, null, 'a'],
          ['a', 4, 'c']
        ],
        'a'
      )
      .should.equal(2)
    statistical
      .COUNTIF(
        [
          [1, null, 'a'],
          ['a', 4, 'c']
        ],
        '*'
      )
      .should.equal(6)
  })

  it('COUNTIFS', () => {
    statistical.COUNTIFS([undefined], '>1').should.equal(0)
    statistical.COUNTIFS([error.na], '>1').should.equal(0)
    statistical.COUNTIFS([1, null, 3, 'a', ''], '>1').should.equal(1)
    statistical.COUNTIFS([1, null, 'c', 'a', ''], '>1').should.equal(0)
    statistical
      .COUNTIFS(
        [
          [1, null, 3],
          ['a', 4, 'c']
        ],
        '>1'
      )
      .should.equal(2)
    statistical
      .COUNTIFS(
        [
          [1, null, 'a'],
          ['a', 4, 'c']
        ],
        'a'
      )
      .should.equal(2)
    statistical.COUNTIFS([1, null], '1', [2, null], '2').should.equal(1)
    statistical.COUNTIFS([1, null], '1', [null, 2], '2').should.equal(0)
    statistical.COUNTIFS([1, null], '1', [null, 2], '*').should.equal(1)
    statistical.COUNTIFS([1, null], '*', [null, 2], '*').should.equal(2)
    statistical.COUNTIFS([[1], [null]], '1', [[2], [1]], '2').should.equal(1)
  })

  it('COUNTIN', () => {
    statistical.COUNTIN([1, 1, 2, 2, 2], 1).should.equal(2)
    statistical.COUNTIN([1, 1, 2, 2, 2], 2).should.equal(3)
    statistical.COUNTIN([[1], 1, 2, [2], 2], 2).should.equal(3)
  })

  it('COUNTUNIQUE', () => {
    statistical.COUNTUNIQUE().should.equal(0)
    statistical.COUNTUNIQUE(1, 1, 2, 2, 3, 3).should.equal(3)
    statistical.COUNTUNIQUE([1, 1, 2, 2, 3, 3]).should.equal(3)
    statistical.COUNTUNIQUE([1, 1, 2], [2, 3, 3]).should.equal(3)
    statistical
      .COUNTUNIQUE(
        [
          [1, 1],
          [2, 5]
        ],
        [
          [2, 3],
          [3, 4]
        ]
      )
      .should.equal(5)
  })

  it('COVARIANCE.P', () => {
    statistical.COVARIANCE.P([3, 2, 4, 5, 6], [9, 7, 12, 15, 17]).should.approximately(5.2, 1e-9)
    statistical.COVARIANCE.P([3, 2, 4, 5, 6], [9, 'invalid', 12, 15, 17]).should.equal(error.value)
  })

  it('COVARIANCE.S', () => {
    statistical.COVARIANCE.S([2, 4, 8], [5, 11, 12]).should.approximately(9.666666666666668, 1e-9)
    statistical.COVARIANCE.S([2, 4, 8], [5, 'invalid', 12]).should.equal(error.value)
  })

  it('DEVSQ', () => {
    statistical.DEVSQ([4, 5, 8, 7, 11, 4, 3]).should.equal(48)
    statistical.DEVSQ([4, 5, 8, 7, 'invalid', 4, 3]).should.equal(error.value)
  })

  it('EXPON.DIST', () => {
    statistical.EXPON.DIST(0.2, 10, true).should.approximately(0.8646647167633873, 1e-9)
    statistical.EXPON.DIST(0.2, 10, false).should.approximately(1.353352832366127, 1e-9)
    statistical.EXPON.DIST(0.2, 'invalid', false).should.equal(error.value)
  })

  it('F.DIST', () => {
    statistical.F.DIST(15.20686486, 6, 4, false).should.approximately(0.0012237995987608916, 1e-9)
    statistical.F.DIST(15.20686486, 6, 4, true).should.approximately(0.9899999999985833, 1e-9)
    statistical.F.DIST(15.20686486, 6, 'invalid', false).should.equal(error.value)
  })

  it('F.DIST.RT', () => {
    statistical.F.DIST.RT().should.equal(error.na)
    statistical.F.DIST.RT(1).should.equal(error.na)
    statistical.F.DIST.RT(-3, 6, 4).should.equal(error.num)
    statistical.F.DIST.RT(4, -5, 4).should.equal(error.num)
    statistical.F.DIST.RT('hello', 6, 4).should.equal(error.value)
    statistical.F.DIST.RT(15.20686486, 6, 4).should.approximately(0.01, 1e-3)
  })

  it('F.INV', () => {
    statistical.F.INV(0.01, 6, 4).should.approximately(0.10930991412457851, 1e-9)
    statistical.F.INV(0.0, 6, 4).should.equal(error.num)
    statistical.F.INV(0.0, 'invalid', 4).should.equal(error.value)
  })

  it('F.INV.RT', () => {
    statistical.F.INV.RT().should.equal(error.na)
    statistical.F.INV.RT(1, 2).should.equal(error.na)
    statistical.F.INV.RT(-1, 6, 4).should.equal(error.num)
    statistical.F.INV.RT(1.2, -5, 4).should.equal(error.num)
    statistical.F.INV.RT(0.5, 'hello', 4).should.equal(error.value)
    statistical.F.INV.RT(0.01, 6, 4).should.approximately(15.20686486, 1e-8)
  })

  it('F.TEST', () => {
    statistical.F.TEST().should.equal(error.na)
    statistical.F.TEST('invalid', 100).should.equal(error.na)
    statistical.F.TEST([1, 3, 5, 7, 9]).should.equal(error.na)
    statistical.F.TEST([1, 3, 5, 7, 9], []).should.equal(error.div0)
    statistical.F.TEST([1, 3, 5, 7, 9], [1]).should.equal(error.div0)
    statistical.F.TEST([1], [1, 3, 5, 7, 9]).should.equal(error.div0)
    statistical.F.TEST([1], [1]).should.equal(error.div0)
    statistical.F.TEST([1, 3, 5, 7, 9], [5, 9, 3, 8, 3]).should.approximately(1.282, 1e-3)
    statistical.F.TEST([4, 2, 5, 1, 3], [8, 3, 9, 0, 1]).should.approximately(0.1497, 1e-4)
  })

  it('FISHER', () => {
    statistical.FISHER(0.75).should.approximately(0.9729550745276566, 1e-9)
    statistical.FISHER('invalid').should.equal(error.value)
  })

  it('FISHERINV', () => {
    statistical.FISHERINV(0.9729550745276566).should.approximately(0.75, 1e-9)
    statistical.FISHERINV('invalid').should.equal(error.value)
  })

  it('FORECAST', () => {
    statistical.FORECAST(30, [6, 7, 9, 15, 21], [20, 28, 31, 38, 40]).should.approximately(10.607253086419755, 1e-9)
    statistical.FORECAST(30, [6, 7, 'invalid', 15, 21], [20, 28, 31, 38, 40]).should.equal(error.value)
  })

  it('FREQUENCY', () => {
    should.deepEqual(statistical.FREQUENCY([79, 85, 78, 85, 50, 81, 95, 88, 97], [70, 79, 89]), [1, 2, 4, 2])
    statistical.FREQUENCY([79, 85, 78, 85, 50, 81, 'invalid', 88, 97], [70, 79, 89]).should.equal(error.value)
  })

  it('GAMMA', () => {
    statistical.GAMMA(2.5).should.approximately(1.3293403919101043, 1e-9)
    statistical.GAMMA(-3.75).should.approximately(0.26786611734776916, 1e-9)
    statistical.GAMMA(0).should.equal(error.num)
    statistical.GAMMA(-2).should.equal(error.num)
    statistical.GAMMA('invalid').should.equal(error.value)
  })

  it('GAMMA.DIST', () => {
    statistical.GAMMA.DIST(1).should.equal(error.na)
    statistical.GAMMA.DIST(1, 9, 2).should.equal(error.na)
    statistical.GAMMA.DIST(-1, 9, 2, true).should.equal(error.value)
    statistical.GAMMA.DIST(1, -9, 2, true).should.equal(error.value)
    statistical.GAMMA.DIST(1, 9, -2, true).should.equal(error.value)
    statistical.GAMMA.DIST('invalid', 9, -2, true).should.equal(error.value)
    statistical.GAMMA.DIST(1, 'invalid', -2, true).should.equal(error.value)
    statistical.GAMMA.DIST(1, 9, 'invalid', true).should.equal(error.value)
    statistical.GAMMA.DIST(10.00001131, 9, 2, true).should.approximately(0.068094, 1e-6)
    statistical.GAMMA.DIST(10.00001131, 9, 2, false).should.approximately(0.03263913, 1e-9)
  })

  it('GAMMA.INV', () => {
    statistical.GAMMA.INV(1).should.equal(error.na)
    statistical.GAMMA.INV(1, 9).should.equal(error.na)
    statistical.GAMMA.INV(-1, 9, 2).should.equal(error.num)
    statistical.GAMMA.INV(1, -9, 2).should.equal(error.num)
    statistical.GAMMA.INV(1, 9, -2).should.equal(error.num)
    statistical.GAMMA.INV('hello', 9, 2).should.equal(error.value)
    statistical.GAMMA.INV(0.068094, 9, 2).should.approximately(10.000011, 1e-6)
  })

  it('GAMMALN', () => {
    statistical.GAMMALN(4).should.approximately(1.7917594692280547, 1e-9)
    statistical.GAMMALN('invalid').should.equal(error.value)
  })

  it('GAMMALN.PRECISE', () => {
    statistical.GAMMALN.PRECISE().should.equal(error.na)
    statistical.GAMMALN.PRECISE(0).should.equal(error.num)
    statistical.GAMMALN.PRECISE(-1).should.equal(error.num)
    statistical.GAMMALN.PRECISE('string').should.equal(error.value)
    statistical.GAMMALN.PRECISE(4.5).should.approximately(2.453736571, 1e-6)
  })

  it('GAUSS', () => {
    statistical.GAUSS(2).should.approximately(0.4772498680518208, 1e-9)
    statistical.GAUSS('invalid').should.equal(error.value)
  })

  it('GEOMEAN', () => {
    statistical.GEOMEAN([4, 5, 8, 7, 11, 4, 3]).should.approximately(5.476986969656962, 1e-9)
    statistical.GEOMEAN([4, 5, 8, 7, 'invalid', 4, 3]).should.equal(error.value)
  })

  it('GROWTH', () => {
    const known_y = [33100, 47300, 69000, 102000, 150000, 220000]
    const known_x = [11, 12, 13, 14, 15, 16]
    const new_x = [11, 12, 13, 14, 15, 16, 17, 18, 19]

    mathTrig
      .SUM(statistical.GROWTH(known_y, known_x, new_x))
      .should.approximately(
        mathTrig.SUM([
          32618.203773538437, 47729.42261474665, 69841.30085621694, 102197.07337883314, 149542.4867400494,
          218821.87621460424, 320196.7183634903, 468536.05418408214, 685597.3889812973
        ]),
        1e-6
      )

    mathTrig
      .SUM(statistical.GROWTH(known_y))
      .should.approximately(
        mathTrig.SUM([
          32618.203773539713, 47729.42261474775, 69841.30085621744, 102197.07337883241, 149542.4867400457,
          218821.8762145953
        ]),
        1e-6
      )

    mathTrig
      .SUM(statistical.GROWTH(known_y, known_x, new_x, false))
      .should.approximately(
        mathTrig.SUM([
          9546.01078362295, 21959.574129266384, 50515.645421859634, 116205.8251842928, 267319.0393588225,
          614938.7837519756, 1414600.7282884493, 3254137.2789414385, 7485793.848705778
        ]),
        1e-6
      )

    statistical.GROWTH(known_y, known_x, 'invalid', false).should.equal(error.value)
    statistical.GROWTH('invalid', known_x).should.equal(error.value)
  })

  it('HARMEAN', () => {
    statistical.HARMEAN([4, 5, 8, 7, 11, 4, 3]).should.approximately(5.028375962061728, 1e-9)
    statistical.HARMEAN([4, 5, 8, 7, 'invalid', 4, 3]).should.equal(error.value)
  })

  it('HYPGEOM.DIST', () => {
    statistical.HYPGEOM.DIST(1, 4, 8, 20, true).should.approximately(0.46542827657378744, 1e-9)
    statistical.HYPGEOM.DIST(1, 4, 8, 20, false).should.approximately(0.3632610939112487, 1e-9)
    statistical.HYPGEOM.DIST(1, 'invalid', 8, 20, false).should.equal(error.value)
  })

  it('INTERCEPT', () => {
    statistical.INTERCEPT([2, 3, 9, 1, 8], [6, 5, 11, 7, 5]).should.approximately(0.04838709677419217, 1e-9)

    statistical.INTERCEPT([1, 2, 3], [1, 2, 3, 4]).should.equal(error.na)
    statistical.INTERCEPT([1, 2, 3], [1, 'invalid', 3, 4]).should.equal(error.value)
  })

  it('KURT', () => {
    statistical.KURT([3, 4, 5, 2, 3, 4, 5, 6, 4, 7]).should.approximately(-0.15179963720841627, 1e-9)
    statistical.KURT([3, 4, 5, 2, 'invalid', 4, 5, 6, 4, 7]).should.equal(error.value)
  })

  it('LARGE', () => {
    statistical.LARGE([1, 3, 2, 5, 4], 1).should.equal(5)
    statistical.LARGE([1, 3, 2, 5, 4], 3).should.equal(3)
    statistical.LARGE([3, 5, 3], -3).should.equal(error.value)
    statistical.LARGE([3, 5, 3], 4).should.equal(error.value)
    statistical.LARGE([3, 5, 3, 'invalid', 4], 3).should.equal(error.value)
  })

  it('LINEST', () => {
    const known_y = [1, 9, 5, 7]
    const known_x = [0, 4, 2, 3]
    should.deepEqual(statistical.LINEST(known_y, known_x), [2, 1])
    statistical.LINEST(known_y, 'invalid').should.equal(error.value)
  })

  it('LOGEST', () => {
    const known_y = [1, 9, 5, 7]
    const known_x = [0, 4, 2, 3]
    should.deepEqual(statistical.LOGEST(known_y, known_x), [1.751116, 1.194316])
    statistical.LOGEST(known_y, 'invalid').should.equal(error.value)
    statistical.LOGEST(known_y, 1).should.equal(error.value)
    statistical.LOGEST(known_y, true).should.equal(error.value)
  })

  it('LOGNORM.DIST', () => {
    statistical.LOGNORM.DIST(4, 3.5, 1.2, true).should.approximately(0.0390835557068005, 1e-9)
    statistical.LOGNORM.DIST(4, 3.5, 1.2, false).should.approximately(0.01761759668181924, 1e-9)
    statistical.LOGNORM.DIST(4, 3.5, 'invalid', false).should.equal(error.value)
  })

  it('LOGNORM.INV', () => {
    statistical.LOGNORM.INV(0.0390835557068005, 3.5, 1.2).should.approximately(4.000000000000001, 1e-9)
    statistical.LOGNORM.INV(0.0390835557068005, 'invalid', 1.2).should.equal(error.value)
  })

  it('MAX', () => {
    statistical.MAX().should.equal(0)
    statistical.MAX(undefined).should.equal(0)
    statistical.MAX(error.na).should.equal(error.na)
    statistical.MAX([0.1, 0.2], [0.4, 0.8], [true, false]).should.approximately(0.8, 1e-9)
    statistical
      .MAX([
        [0, 0.1, 0.2],
        [0.4, 0.8, 1],
        [true, false]
      ])
      .should.equal(1)
  })

  it('MAXA', () => {
    statistical.MAXA().should.equal(0)
    statistical.MAXA(undefined).should.equal(0)
    statistical.MAXA(error.na).should.equal(error.na)
    statistical.MAXA([0.1, 0.2], [0.4, 0.8], [true, false]).should.equal(1)
    statistical
      .MAXA([
        [0.1, 0.2],
        [0.4, 0.8],
        [true, false]
      ])
      .should.equal(1)
  })

  it('MEDIAN', () => {
    statistical.MEDIAN().should.equal(error.num)
    statistical.MEDIAN(undefined).should.equal(error.num)
    statistical.MEDIAN(error.na).should.equal(error.na)
    statistical.MEDIAN(1, 2, 3, 4, 5).should.equal(3)
    statistical.MEDIAN(1, 2, 3, 4, 5, 6).should.approximately(3.5, 1e-9)
  })

  it('MIN', () => {
    statistical.MIN().should.equal(0)
    statistical.MIN(undefined).should.equal(0)
    statistical.MIN(error.na).should.equal(error.na)
    statistical.MIN([0.1, 0.2], [0.4, 0.8], [true, false]).should.approximately(0.1, 1e-9)
    statistical.MIN([0, 0.1, 0.2], [0.4, 0.8, 1], [true, false]).should.equal(0)
    statistical
      .MIN(
        [
          [10, 0],
          [0.1, 0.2]
        ],
        [
          [10, 0.4],
          [0.8, 1]
        ],
        [
          [10, 10],
          [true, false]
        ]
      )
      .should.equal(0)
  })

  it('MINA', () => {
    statistical.MINA().should.equal(0)
    statistical.MINA(undefined).should.equal(0)
    statistical.MINA(error.na).should.equal(error.na)
    statistical.MINA([0.1, 0.2], [0.4, 0.8], [true, false]).should.equal(0)
    statistical
      .MINA(
        [
          [10, 0],
          [0.1, 0.2]
        ],
        [
          [10, 0.4],
          [0.8, 1]
        ],
        [
          [10, 10],
          [true, false]
        ]
      )
      .should.equal(0)
  })

  it('MODE.MULT', () => {
    const data = [1, 2, 3, 4, 3, 2, 1, 2, 3, 5, 6, 1]
    const modes = statistical.MODE.MULT(data)
    modes.length.should.equal(3)
    modes.should.containEql(1)
    modes.should.containEql(2)
    modes.should.containEql(3)
    statistical.MODE.MULT([1, 2, 'invalid']).should.equal(error.value)
  })

  it('MODE.SNGL', () => {
    const data = [5.6, 4, 4, 3, 2, 4]
    statistical.MODE.SNGL(data).should.equal(4)
    statistical.MODE.SNGL([1, 2, 'invalid']).should.equal(error.value)
  })

  it('NEGBINOM.DIST', () => {
    statistical.NEGBINOM.DIST(10, 5, 0.25, false).should.approximately(0.05504866037517786, 1e-9)
    statistical.NEGBINOM.DIST(10, 5, 0.25, true).should.approximately(0.3135140584781766, 1e-9)
    statistical.NEGBINOM.DIST(10, 'invalid', 0.25, true).should.equal(error.value)
  })

  it('NORM.DIST', () => {
    statistical.NORM.DIST(1, 0, 1, false).should.approximately(0.24197072451914337, 1e-9)
    statistical.NORM.DIST(1, 0, 1, true).should.approximately(0.8413447460685429, 1e-9)
    statistical.NORM.DIST('Hello World!', 0, 1, false).should.equal(error.value)
    statistical.NORM.DIST(0, 'Hello World!', 1, false).should.equal(error.value)
    statistical.NORM.DIST(0, 0, 'Hello World!', false).should.equal(error.value)
    statistical.NORM.DIST(0, 0, -1, false).should.equal(error.num)
  })

  it('NORM.INV', () => {
    statistical.NORM.INV(0.908789, 40, 1.5).should.approximately(42.00000200956616, 1e-9)
    statistical.NORM.INV(0.908789, 'invalid', 1.5).should.equal(error.value)
  })

  it('NORM.S.DIST', () => {
    statistical.NORM.S.DIST(1, true).should.approximately(0.8413447460685429, 1e-9)
    statistical.NORM.S.DIST(1, false).should.approximately(0.24197072451914337, 1e-9)
    statistical.NORM.S.DIST('invalid', false).should.equal(error.value)
  })

  it('NORM.S.INV', () => {
    statistical.NORM.S.INV(0.908789).should.approximately(1.3333346730441074, 1e-9)
    statistical.NORM.S.INV('invalid').should.equal(error.value)
  })

  it('PEARSON', () => {
    const independentValues = [9, 7, 5, 3, 1]
    const depentendValues = [10, 6, 1, 5, 3]
    statistical.PEARSON(independentValues, depentendValues).should.approximately(0.6993786061802354, 1e-9)
    depentendValues.push('invalid')
    statistical.PEARSON(independentValues, depentendValues).should.equal(error.value)
  })

  it('PERCENTILE.EXC', () => {
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0).should.equal(error.num)
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.1).should.equal(error.num)
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.2).should.equal(1)
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.25).should.approximately(1.25, 1e-9)
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.3).should.approximately(1.5, 1e-9)
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.4).should.equal(2)
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.5).should.approximately(2.5, 1e-9)
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.6).should.equal(3)
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.7).should.approximately(3.5, 1e-9)
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.75).should.approximately(3.75, 1e-9)
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.8).should.equal(4)
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.9).should.equal(error.num)
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 1).should.equal(error.num)
    statistical.PERCENTILE.EXC([1, 'invalid', 3, 4], 1).should.equal(error.value)
  })

  it('PERCENTILE.INC', () => {
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0).should.equal(1)
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.1).should.approximately(1.3, 1e-9)
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.2).should.approximately(1.6, 1e-9)
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.25).should.approximately(1.75, 1e-9)
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.3).should.approximately(1.9, 1e-9)
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.4).should.approximately(2.2, 1e-9)
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.5).should.approximately(2.5, 1e-9)
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.6).should.approximately(2.8, 1e-9)
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.7).should.approximately(3.1, 1e-9)
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.75).should.approximately(3.25, 1e-9)
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.8).should.approximately(3.4, 1e-9)
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.9).should.approximately(3.7, 1e-9)
    statistical.PERCENTILE.INC([1, 2, 3, 4], 1).should.equal(4)
    statistical.PERCENTILE.INC([1, 2, 'invalid', 4], 1).should.equal(error.value)
  })

  it('PERCENTRANK.EXC', () => {
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 1).should.approximately(0.2, 1e-9)
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 2).should.approximately(0.4, 1e-9)
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 3).should.approximately(0.6, 1e-9)
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 4).should.approximately(0.8, 1e-9)
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 1.25).should.approximately(0.25, 1e-9)
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 2.5).should.approximately(0.5, 1e-9)
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 3.75).should.approximately(0.75, 1e-9)
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 1, 2).should.approximately(0.2, 1e-9)
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 2, 2).should.approximately(0.4, 1e-9)
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 3, 2).should.approximately(0.6, 1e-9)
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 4, 2).should.approximately(0.8, 1e-9)
    statistical.PERCENTRANK.EXC([1, 2, 'invalid', 4], 4, 2).should.equal(error.value)
  })

  it('PERCENTRANK.INC', () => {
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 1).should.equal(0)
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 2).should.approximately(0.333, 1e-9)
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 3).should.approximately(0.666, 1e-9)
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 4).should.equal(1)
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 1.25).should.approximately(0.083, 1e-9)
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 2.5).should.approximately(0.5, 1e-9)
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 3.75).should.approximately(0.916, 1e-9)
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 1, 2).should.equal(0)
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 2, 2).should.approximately(0.33, 1e-9)
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 3, 2).should.approximately(0.66, 1e-9)
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 4, 2).should.equal(1)
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 'invalid', 2).should.equal(error.value)
  })

  it('PERMUT', () => {
    statistical.PERMUT(100, 3).should.equal(970200)
    statistical.PERMUT(100, 'invalid').should.equal(error.value)
  })

  it('PERMUTATIONA', () => {
    statistical.PERMUTATIONA(3, 2).should.equal(9)
    statistical.PERMUTATIONA('invalid', 2).should.equal(error.value)
  })

  it('PHI', () => {
    statistical.PHI(0.75).should.approximately(0.30113743215480443, 1e-9)
    statistical.PHI('invalid').should.equal(error.value)
  })

  it('POISSON.DIST', () => {
    statistical.POISSON.DIST(2, 5, true).should.approximately(0.12465201948308113, 1e-9)
    statistical.POISSON.DIST(2, 5, false).should.approximately(0.08422433748856833, 1e-9)
    statistical.POISSON.DIST(2, 'invalid', false).should.equal(error.value)
  })

  it('PROB', () => {
    const x = [0, 1, 2, 3]
    const prob = [0.2, 0.3, 0.1, 0.4]
    statistical.PROB(x, prob, 2).should.approximately(0.1, 1e-9)
    statistical.PROB(x, prob, 1, 3).should.approximately(0.8, 1e-9)
    statistical.PROB(x, prob).should.equal(0)
    x.push('invalid')
    statistical.PROB(x, prob, 1, 3).should.equal(error.value)
  })

  it('QUARTILE.EXC', () => {
    const data = [6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49]
    statistical.QUARTILE.EXC(data, 1).should.equal(15)
    statistical.QUARTILE.EXC(data, 2).should.equal(40)
    statistical.QUARTILE.EXC(data, 3).should.equal(43)
    statistical.QUARTILE.EXC(data, 4).should.equal(error.num)
    statistical.QUARTILE.EXC(data, 'invalid').should.equal(error.value)
  })

  it('QUARTILE.INC', () => {
    const data = [1, 2, 4, 7, 8, 9, 10, 12]
    statistical.QUARTILE.INC(data, 1).should.approximately(3.5, 1e-9)
    statistical.QUARTILE.INC(data, 2).should.approximately(7.5, 1e-9)
    statistical.QUARTILE.INC(data, 3).should.approximately(9.25, 1e-9)
    statistical.QUARTILE.INC(data, 4).should.equal(error.num)
    statistical.QUARTILE.INC(data, 'invalid').should.equal(error.value)
  })

  it('RANK.AVG', () => {
    const data = [89, 88, 92, 101, 94, 97, 95]
    statistical.RANK.AVG(94, data).should.equal(4)
    statistical.RANK.AVG(88, data, 1).should.equal(1)
    statistical.RANK.AVG('invalid', data, 1).should.equal(error.value)
  })

  it('RANK.EQ', () => {
    const data = [7, 3.5, 3.5, 1, 2]
    statistical.RANK.EQ(data[0], data, 1).should.equal(5)
    statistical.RANK.EQ(data[4], data).should.equal(4)
    statistical.RANK.EQ(data[1], data, 1).should.equal(3)
    statistical.RANK.EQ('invalid', data, true).should.equal(error.value)
  })

  it('ROW', () => {
    statistical.ROW().should.equal(error.na)
    statistical
      .ROW([
        [1, 2],
        [2, 3],
        [2, 4]
      ])
      .should.equal(error.na)
    statistical
      .ROW(
        [
          [1, 2],
          [2, 3],
          [2, 4]
        ],
        -1
      )
      .should.equal(error.num)
    statistical.ROW('hello', 1).should.equal(error.value)
    statistical
      .ROW(
        [
          [1, 2],
          [2, 3],
          [2, 4]
        ],
        0
      )
      .should.eql([1, 2])
    statistical
      .ROW(
        [
          [1, 2],
          [2, 3],
          [2, 4]
        ],
        2
      )
      .should.eql([2, 4])
    should.not.exist(
      statistical.ROW(
        [
          [1, 2],
          [2, 3],
          [2, 4]
        ],
        3
      )
    )
    should.not.exist(statistical.ROW([], 3))
  })

  it('RSQ', () => {
    const y = [2, 3, 9, 1, 8, 7, 5]
    const x = [6, 5, 11, 7, 5, 4, 4]
    statistical.RSQ(y, x).should.approximately(0.05795019157088122, 1e-9)
    x.push('invalid')
    statistical.RSQ(y, x).should.equal(error.value)
  })

  it('SKEW', () => {
    statistical.SKEW([3, 4, 5, 2, 3, 4, 5, 6, 4, 7]).should.approximately(0.3595430714067974, 1e-9)
    statistical.SKEW([3, 4, 5, 2, 3, 4, 5, 6, 'invalid', 7]).should.equal(error.value)
  })

  it('SKEW.P', () => {
    statistical.SKEW.P([3, 4, 5, 2, 3, 4, 5, 6, 4, 7]).should.approximately(0.303193339354144, 1e-9)
    statistical.SKEW.P([3, 4, 5, 'invalid', 3, 4, 5, 6, 4, 7]).should.equal(error.value)
  })

  it('SLOPE', () => {
    const data_y = [2, 3, 9, 1, 8, 7, 5]
    const data_x = [6, 5, 11, 7, 5, 4, 4]
    statistical.SLOPE(data_y, data_x).should.approximately(0.3055555555555556, 1e-9)
    data_x.push('invalid')
    statistical.SLOPE(data_y, data_x).should.equal(error.value)
  })

  it('SMALL', () => {
    statistical.SMALL([3, 4, 5, 2, 3, 4, 6, 4, 7], 4).should.equal(4)
    statistical.SMALL([3, 4, 5, 2, 'invalid', 4, 6, 4, 7], 4).should.equal(error.value)
  })

  it('STANDARDIZE', () => {
    statistical.STANDARDIZE(42, 40, 1.5).should.approximately(1.3333333333333333, 1e-9)
    statistical.STANDARDIZE(10, 10, 10).should.equal(0)
    statistical.STANDARDIZE(10, 10, 'invalid').should.equal(error.value)
  })

  it('STDEV.P', () => {
    const data = [1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299]
    statistical.STDEV.P(data).should.approximately(26.054558142482477, 1e-9)
    statistical.STDEV.P().should.equal(error.num)
  })

  it('STDEV.S', () => {
    const data = [1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299, true, false, 'nope']
    statistical.STDEV.S(data).should.approximately(27.46391571984349, 1e-9)
  })

  it('STDEVA', () => {
    const data = [1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299]
    statistical.STDEVA(data).should.approximately(27.46391571984349, 1e-9)
    const data2 = [2, 1, true, false, 'nope']
    statistical.STDEVA(data2).should.approximately(0.8366600265340756, 1e-9)
  })

  it('STDEVPA', () => {
    const data = [1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299]
    statistical.STDEVPA(data).should.approximately(26.054558142482477, 1e-9)
    const data2 = [2, 1, true, false, 'nope']
    statistical.STDEVPA(data2).should.approximately(0.7483314773547883, 1e-9)
    statistical.STDEVPA().should.equal(error.num)
  })

  it('STEYX', () => {
    const data_y = [2, 3, 9, 1, 8, 7, 5]
    const data_x = [6, 5, 11, 7, 5, 4, 4]
    statistical.STEYX(data_y, data_x).should.approximately(3.305718950210041, 1e-9)
    data_x.push('invalid')
    statistical.STEYX(data_y, data_x).should.equal(error.value)
  })

  it('T.DIST', () => {
    statistical.T.DIST(1.959999998, 60, 0).should.equal(error.num)
    statistical.T.DIST(8, 'invalid', 1).should.equal(error.value)
    statistical.T.DIST(1.959999998, 60, 1).should.approximately(0.027322465, 1e-9)
    statistical.T.DIST(1.959999998, 60, 2).should.approximately(0.05464493, 1e-9)
    statistical.T.DIST(3.31, 4, 1).should.approximately(0.014827220522043, 1e-9)
    statistical.T.DIST(3.31, 4, 2).should.approximately(0.029654441044086, 1e-9)
  })

  it('T.DIST.2T', () => {
    statistical.T.DIST['2T']().should.equal(error.na)
    statistical.T.DIST['2T'](1).should.equal(error.na)
    statistical.T.DIST['2T'](-1, 1).should.equal(error.num)
    statistical.T.DIST['2T'](1.1, 0).should.equal(error.num)
    statistical.T.DIST['2T']('hello', 1).should.equal(error.value)
    statistical.T.DIST['2T'](2, 6).should.approximately(0.092426312, 1e-9)
    statistical.T.DIST['2T'](20, 2).should.approximately(0.002490664, 1e-9)
    statistical.T.DIST['2T'](1.959999998, 60).should.approximately(0.05464493, 1e-9)
  })

  it('T.DIST.RT', () => {
    statistical.T.DIST.RT().should.equal(error.na)
    statistical.T.DIST.RT(1).should.equal(error.na)
    statistical.T.DIST.RT(-1, 1).should.equal(error.num)
    statistical.T.DIST.RT(1.1, 0).should.equal(error.num)
    statistical.T.DIST.RT('hello', 1).should.equal(error.value)
    statistical.T.DIST.RT(2, 60).should.approximately(0.025016522, 1e-9)
    statistical.T.DIST.RT(2, 6).should.approximately(0.046213156, 1e-9)
    statistical.T.DIST.RT(1.959999998, 60).should.approximately(0.027322465, 1e-9)
  })

  it('T.INV', () => {
    statistical.T.INV(0.9, 60).should.approximately(1.2958210933417948, 1e-9)
    statistical.T.INV(0.9, 'invalid').should.equal(error.value)
  })

  it('T.INV.2T', () => {
    statistical.T.INV['2T'](0.9, 60).should.approximately(0.126194364, 1e-9)
    statistical.T.INV['2T'](0.9, 'invalid').should.equal(error.value)
    statistical.T.INV['2T']('invalid', 60).should.equal(error.value)
    statistical.T.INV['2T'](-1, 60).should.equal(error.num)
    statistical.T.INV['2T'](0, 60).should.equal(error.num)
    statistical.T.INV['2T'](1.1, 60).should.equal(error.num)
    statistical.T.INV['2T'](0.9, 0.5).should.equal(error.num)
  })

  it('T.TEST', () => {
    let known_x = [5, 7, 5, 3, 5, 3, 3, 9]
    let known_y = [8, 1, 4, 6, 6, 4, 1, 2]
    statistical.T.TEST(known_x, known_y).should.approximately(0.41106918968115536, 1e-9)
    known_x = [3, 4, 5, 8, 9, 1, 2, 4, 5]
    known_y = [6, 9, 3, 5, 4, 4, 5, 3, 1]
    statistical.T.TEST(known_x, known_y).should.approximately(0.923919926765508, 1e-9)
    known_x = [3, 4, 5, 8, 9, 1, 2, 4, 5]
    known_y = [6, 9, 3, 5, 4, 4, 5]
    statistical.T.TEST(known_x, known_y).should.approximately(0.6141571469712601, 1e-9)
    statistical.T.TEST('invalid', known_y).should.equal(error.value)
  })

  it('TREND', () => {
    const known_y = [1, 9, 5, 7]
    const known_x = [0, 4, 2, 3]
    const new_know_x = [5, 8]
    should.deepEqual(statistical.TREND(known_y, known_x, new_know_x), [11, 17])
    statistical.TREND(known_y, known_x, 'invalid').should.equal(error.value)
  })

  it('TRIMMEAN', () => {
    statistical.TRIMMEAN([4, 5, 6, 7, 2, 3, 4, 5, 1, 2, 3], 0.2).should.approximately(3.7777777777777777, 1e-9)
    statistical.TRIMMEAN([4, 5, 6, 'invalid', 1, 2, 3], 0.2).should.equal(error.value)
  })

  it('VAR.P', () => {
    statistical.VAR.P(1, 2, 3, 4, 10, 10).should.approximately(13.333333333333334, 1e-9)
    statistical.VAR.P(1, 2, 3, 4, false, true).should.approximately(1.25, 1e-9)
    statistical.VAR.P(1, 2, 3, 4, 'count as zero', false, true).should.approximately(1.25, 1e-9)
    statistical.VAR.P().should.equal(error.num)
  })

  it('VAR.S', () => {
    statistical.VAR.S(1, 2, 3, 4, 10, 10).should.equal(16)
    statistical.VAR.S(1, 2, 3, 4, false, true).should.approximately(1.6666666666666667, 1e-9)
    statistical.VAR.S(1, 2, 3, 4, 'count as zero', false, true).should.approximately(1.6666666666666667, 1e-9)
  })

  it('VARA', () => {
    statistical.VARA(1, 2, 3, 4, 10, 10).should.equal(16)
    statistical.VARA(1, 2, 3, 4, false, true).should.approximately(2.166666666666667, 1e-9)
    statistical.VARA(1, 2, 3, 4, 'count as zero', false, true).should.approximately(2.285714285714286, 1e-9)
  })

  it('VARPA', () => {
    statistical.VARPA(1, 2, 3, 4, 10, 10).should.approximately(13.333333333333334, 1e-9)
    statistical.VARPA(1, 2, 3, 4, false, true).should.approximately(1.8055555555555556, 1e-9)
    statistical.VARPA(1, 2, 3, 4, 'count as zero', false, true).should.approximately(1.959183673469388, 1e-9)
    statistical.VARPA().should.equal(error.num)
  })

  it('WEIBULL.DIST', () => {
    statistical.WEIBULL.DIST(105, 20, 100, true).should.approximately(0.9295813900692769, 1e-9)
    statistical.WEIBULL.DIST(105, 20, 100, false).should.approximately(0.03558886402450435, 1e-9)
    statistical.WEIBULL.DIST(105, 20, 'invalid', false).should.equal(error.value)
  })

  it('Z.TEST', () => {
    const data = [3, 6, 7, 8, 6, 5, 4, 2, 1, 9]
    statistical.Z.TEST(data, 4).should.approximately(0.09057419685136381, 1e-9)
    statistical.Z.TEST(data, 6).should.approximately(0.86304338912953, 1e-9)
    statistical.Z.TEST(data, 'invalid').should.equal(error.value)
  })
})
