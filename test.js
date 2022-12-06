const { fromEuroToDollar, fromDollarToYen, fromYanToPound } = require('./app.js');


test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("Ten dollar should be 1065.83 yenes", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(10)).toBeCloseTo(1065.83); 
})

test("Ten Yen should be 0.062pound", function(){   
    const { fromYanToPound } = require('./app.js')
    expect(fromYanToPound(10)).toBeCloseTo(0.062);
})