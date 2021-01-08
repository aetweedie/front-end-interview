var hello = require('../src/helloWorld');
var square = require('../src/areaOfSquare');
var bac = require('../src/bloodAlcohol');
var fib = require('../src/fibonacciSequence');
var phone = require('../src/phoneNumber');
var tip = require('../src/tipCalc');
var vowels = require('../src/vowels');
var username = require('../src/username');
var prime = require('../src/isPrime');
var greatPyramid = require('../src/greatPyramid');

describe('Hello world', function() {
	it('says hi', function() {
		expect(hello.helloWorld()).toEqual('Hello world!');
	});
});

describe('areaOfSquare', function() {
	xit('should return the area of the square given a transcribing arc A', function() {
		expect(square.squareArea(2) ).toEqual(1.62);
		expect(square.squareArea(14.05)).toEqual(80);
	});
});

describe('bloodAlcohol', function() {
	xit('should return the persons BAC given the parameters', function() {
		expect(bac.bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'male', 1)).toEqual(.0837);
		expect(bac.bloodAlcoholContent({ounces:50, abv:0.14}, 250,'male', 3)).toEqual(.0601);
		expect(bac.bloodAlcoholContent({ounces:20, abv:0.4}, 100,'female', 2)).toEqual(.2414);
	});
});

describe('Fibonacci', function() {
	xit('should return the value at the given index', function() {
		expect(fib.Fibonacci(2)).toEqual(2);
		expect(fib.Fibonacci(34)).toEqual(9227465);
	});
});

describe('createPhoneNumber', function() {
	xit('should return my phone number formatted correctly', function() {
		expect(phone.createPhoneNumber([7, 1, 9, 6, 6, 1, 2, 7, 6, 6])).toEqual('(719) 661-2766');
	});
});

describe('calculateTip', function() {
	xit('should return the tip amount given the parameters', function() {
		expect(tip.calculateTip(26.95, 'good')).toEqual(3);
		expect(tip.calculateTip(20, 'Excellent')).toEqual(4);
		expect(tip.calculateTip(17.78, 'I think the waiter ate some of my food...')).toEqual('Rating not recognized');
	});
});

describe('getCount', function() {
	it('should return the number of vowels in the string', function() {
		expect(vowels.getCount('This is a fun interview! I am really going to enjoy working with Alan, he sounds like a neat guy!')).toEqual(31);
	});
});

describe('validateUser', function() {
	xit('should return a boolean to indicate if the username meets the requirements', function() {
		expect(username.validateUser('asddsa')).toEqual(true);
		expect(username.validateUser('257')).toEqual(false);
		expect(username.validateUser('ahpoppaooohmowmowpappaoohmowmowpoppaooohmowmow')).toEqual(false);
		expect(username.validateUser('alan_is_rad_18')).toEqual(true);
	});
});

describe('primeTest', function() {
	xit('should return true or false depending on if the number is prime or not', function() {
		expect(prime.primeTest(2)).toEqual(true);
		expect(prime.primeTest(5)).toEqual(true);
		expect(prime.primeTest(-1)).toEqual(false);
		expect(prime.primeTest(9)).toEqual(false);
	});
});

describe('greatPyramidTest', function() {
	xit('should return a pyramid of * characters at the given height', function() {
		console.log(greatPyramid.greatPyramid(5));
		expect(greatPyramid.greatPyramid(5)).toEqual('    *\n   ***\n  *****\n *******\n*********\n');
		console.log(greatPyramid.greatPyramid(10));
		expect(greatPyramid.greatPyramid(10)).toEqual('         *\n        ***\n       *****\n      *******\n     *********\n    ***********\n   *************\n  ***************\n *****************\n*******************\n');
		console.log(greatPyramid.greatPyramid(25));
		expect(greatPyramid.greatPyramid(25)).toEqual('                        *\n                       ***\n                      *****\n                     *******\n                    *********\n                   ***********\n                  *************\n                 ***************\n                *****************\n               *******************\n              *********************\n             ***********************\n            *************************\n           ***************************\n          *****************************\n         *******************************\n        *********************************\n       ***********************************\n      *************************************\n     ***************************************\n    *****************************************\n   *******************************************\n  *********************************************\n ***********************************************\n*************************************************\n');
	})
})