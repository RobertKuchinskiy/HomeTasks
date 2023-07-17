const { expect } = require('chai');
const Calculator = require('../calculator');

describe('Calculator', function () {
  let calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  describe('add', function () {
    it('should return the sum of numbers', function () {
      const result = calculator.add([2, 4, 6]);
      expect(result).to.equal(12);
    });

    it('should return 0 if no numbers are provided', function () {
      const result = calculator.add([]);
      expect(result).to.equal(0);
    });

    it('should return the number itself if only one number is provided', function () {
      const result = calculator.add([5]);
      expect(result).to.equal(5);
    });

    it('should return 0 if we add inverse numbers', function () {
      const result = calculator.add([-5, 5]);
      expect(result).to.equal(0);
    });
  });

  describe('multiply', function () {
    it('should return the multiply of numbers', function () {
      const result = calculator.multiply(2, 3, 4);
      expect(result).to.equal(24);
    });

    it('should return 0 if any of the numbers is 0', function () {
      const result = calculator.multiply(5, 0, 10);
      expect(result).to.equal(0);
    });

    it('should return the number itself if only one number is provided', function () {
      const result = calculator.multiply(7);
      expect(result).to.equal(7);
    });

    it('should return 0 if no numbers are provided', function () {
      const result = calculator.multiply([]);
      expect(result).to.equal(0);
    });
  });

  describe('subtraction', function () {
    it('should return the difference of two numbers', function () {
      const result = calculator.subtraction(10, 4);
      expect(result).to.equal(6);
    });

    it('should return a negative value if the subtrahend is greater than the reduced', function () {
      const result = calculator.subtraction(5, 10);
      expect(result).to.equal(-5);
    });

    it('should return a positive value if the negative subtrahend is greater than the reduced', function () {
      const result = calculator.subtraction(-5, -10);
      expect(result).to.equal(5);
    });
    it('should return a negative reduce number value if the subtrahend is  0', function () {
      const result = calculator.subtraction(0, 100);
      expect(result).to.equal(-100);
    });
  });

  describe('divide', function () {
    it('should return the division of two numbers', function () {
      const result = calculator.divide(12, 3);
      expect(result).to.equal(4);
    });

    it('should return Infinity if the divider is 0', function () {
      const result = calculator.divide(10, 0);
      expect(result).to.equal(Infinity);
    });

    it('should return divide result if the divider is reciprocal number', function () {
      const result = calculator.divide(2, 0.2);
      expect(result).to.equal(10);
    });

    it('should return 1 if we divide the same numbers', function () {
      const result = calculator.divide(0.42, 0.42);
      expect(result).to.equal(1);
    });
  });
  describe('exponentiation', function () {
    it('should return the square of the number', function () {
      const result = calculator.exponentiation(4);
      expect(result).to.equal(16);
    });

    it('should return 0 if the number is 0', function () {
      const result = calculator.exponentiation(0);
      expect(result).to.equal(0);
    });

    it('should return 16 if the number is -4', function () {
      const result = calculator.exponentiation(-4);
      expect(result).to.equal(16);
    });

    it('should return 1 if the number is 1', function () {
      const result = calculator.exponentiation(1);
      expect(result).to.equal(1);
    });
  });
});
