const Calculator = require ('../calculator');
const {expect} = require('chai');

describe('Calculator', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
    describe('add', () => {
        it('should return the sum of numbers', () => {
            const result = calculator.add([2, 4, 6]);
            expect(result).to.equal(12);
          });
        
          it('should return 0 if no numbers are provided', () => {
            const result = calculator.add([]);
            expect(result).to.equal(0);
          });
        
          it('should return the number itself if only one number is provided', () => {
            const result = calculator.add([5]);
            expect(result).to.equal(5);
          });

          it ('should return 0 if we add inverse numbers', () => {
            const result = calculator.add([-5, 5]);
            expect(result).to.equal(0);
          });
        })
  
    describe('multiply', () => {
        it('should return the multiply of numbers', () => {
            const result = calculator.multiply(2, 3, 4);
            expect(result).to.equal(24);
          });
         
          it('should return 0 if any of the numbers is 0', () => {
            const result = calculator.multiply(5, 0, 10);
            expect(result).to.equal(0);
          });
         
          it('should return the number itself if only one number is provided', () => {
            const result = calculator.multiply(7);
            expect(result).to.equal(7);
          });

          it('should return 0 if no numbers are provided', () => {
            const result = calculator.multiply([]);
            expect(result).to.equal(0);
          });
        })

    describe('subtraction', () => {
        it('should return the difference of two numbers', () => {
            const result = calculator.subtraction(10, 4);
            expect(result).to.equal(6);
          });
        
          it('should return a negative value if the subtrahend is greater than the reduced', () => {
            const result = calculator.subtraction(5, 10);
            expect(result).to.equal(-5);
          });
        })

    describe('divide', () => {
        it('should return the division of two numbers', () => {
            const result = calculator.divide(12, 3);
            expect(result).to.equal(4);
          });
        
          it('should return Infinity if the divider is 0', () => {
            const result = calculator.divide(10, 0);
            expect(result).to.equal(Infinity);
          });
        })
    describe('exponentiation', () => {
        it('should return the square of the number', () => {
            const result = calculator.exponentiation(4);
            expect(result).to.equal(16);
          });
        
          it('should return 0 if the number is 0', () => {
            const result = calculator.exponentiation(0);
            expect(result).to.equal(0);
          });

        it('should return 16 if the number is -4', () => {
            const result = calculator.exponentiation(-4);
            expect(result).to.equal(16);
          });
        })
    })



  