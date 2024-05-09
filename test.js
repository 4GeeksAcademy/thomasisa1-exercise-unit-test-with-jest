// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }= require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    // let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(sum(14, 9)).toBe(23);
});

//Testing fromEuroToDollar function
test("One euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(1)).toBe(1.07);
});

// Testing fromDollarToYen function
test("One dollar should convert to 156.5 yen", () => {
    expect(fromDollarToYen(1)).toBe(156.5);
});

// Testing fromYenToPound function
test("1000 yen should convert to British pounds", () => {
    const yenAmount = 1000;
    const expectedPound = (yenAmount * 0.87) / 156.5;
    expect(fromYenToPound(yenAmount)).toBe(expectedPound);
});
