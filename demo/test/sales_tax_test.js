const { expect } = require('chai');
const { calculateSalesTax, getTotalSales, getTotalTaxes, addToSalesSummary } = require('../sales_tax');

// we need a sales summary {} to store the results

// iterate over the company sales data

// calculate the total sales of that company
// calculate the total total taxes

// we need to add the company entry into sales summary
// determine if the company is already in the object or not.
// if it does exist, create it
// if it exist, update the company and add the sales and the taxes  

describe('getTotalSales', function () {

  it('should calculate the total sales of the company', function () {
    const salesArr = [80, 20, 10, 100, 90, 500];

    const result = getTotalSales(salesArr);

    expect(result).to.equal(800);

  });
})

describe('getTotalTaxes', function () {

  const salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
  };

  it('calculates the total tax amount for "AB"', function () {
    const amount = 100;
    const prov = 'AB'

    const result = getTotalTaxes(amount, salesTaxRates, prov);

    expect(result).to.equal(5);

  })

  it('calculates the total tax amount for "BC"', function () {
    const amount = 100;
    const prov = 'BC'

    const result = getTotalTaxes(amount, salesTaxRates, prov);

    expect(result).to.equal(12);

  })

  it('calculates the total tax amount for "SK"', function () {
    const amount = 100;
    const prov = 'SK'

    const result = getTotalTaxes(amount, salesTaxRates, prov);

    expect(result).to.equal(10);

  })
});

describe('addToSalesSummary', function () {

  context('when the company name does not exist in the sales summary', function () {
    it('adds the company sales and taxes to the sales summary', () => {
      const salesSummary = {};

      addToSalesSummary("Bombardier", 800, 40, salesSummary);

      expect(salesSummary).to.deep.equal({
        Bombardier: {
          totalSales: 800,
          totalTaxes: 40
        }
      })
    });

  })

  context('when the company name already exists in the sales summary', function () {

    const salesSummary = {
      Telus: {
        totalSales: 700,
        totalTaxes: 84
      }
    }
    it('updates the company sales and taxes in the sales summary', function () {

      addToSalesSummary("Telus", 600, 60, salesSummary);



      expect(salesSummary).to.deep.equal({
        Telus: {
          totalSales: 1300,
          totalTaxes: 144
        }
      })

    })

  });




});

describe('calculateSalesTax', function () {

  const salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
  };

  const companySalesData = [
    {
      name: "Telus",
      province: "BC",
      sales: [100, 200, 400]
    },
    {
      name: "Bombardier",
      province: "AB",
      sales: [80, 20, 10, 100, 90, 500]
    },
    {
      name: "Telus",
      province: "SK",
      sales: [500, 100]
    }
  ];


  it('calculates the sales total and the sales taxes for each company', function () {


    const result = calculateSalesTax(companySalesData, salesTaxRates);

    console.log("Result", result);

    expect(result).to.deep.equal({
      Telus: {
        totalSales: 1300,
        totalTaxes: 144
      },
      Bombardier: {
        totalSales: 800,
        totalTaxes: 40
      }
    })

  });

});


