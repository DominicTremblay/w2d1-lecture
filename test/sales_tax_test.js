const { expect } = require('chai');
const { getTotalSales, getTotalTaxes, addSalesToSummary, calculateSalesTax } = require('../sales_tax');

describe('getTotalSales()', function() {
  it('sums up the company sales', function() {
    const result = getTotalSales([100, 200, 400]);

    expect(result).to.equal(700);
  });
});

describe('getTotalTaxes()', function() {
  it('calculates the tax amount based on the sales for "AB" ', function() {
    const result = getTotalTaxes(100, 'AB');

    expect(result).to.equal(5);
  });
  it('calculates the tax amount based on the sales for "BC" ', function() {
    const result = getTotalTaxes(100, 'BC');

    expect(result).to.equal(12);
  });

  it('calculates the tax amount based on the sales for "SK" ', function() {
    const result = getTotalTaxes(100, 'SK');

    expect(result).to.equal(10);
  });
});

describe('addSalesToSummary()', function() {
  let summary;
  let companyName;

  before(function() {
    summary = {};
  });

  beforeEach(function() {
    companyName = 'Telus';
  });

  context('when the company does not exist in the summary', function() {
    it('adds the company sales to the summary', function() {
      const salesObj = {
        totalSales: 700,
        totalTaxes: 84,
      };

      const result = addSalesToSummary(companyName, salesObj, summary);

      expect(result).to.deep.equal({
        Telus: {
          totalSales: 700,
          totalTaxes: 84,
        },
      });
    });
  });

  context('when the company does exist in the summary', function() {
    it('adds the sales data to the existing company sales', function() {
      const salesObj = {
        totalSales: 600,
        totalTaxes: 60,
      };
      const result = addSalesToSummary(companyName, salesObj, summary);

      expect(result).to.deep.equal({
        Telus: {
          totalSales: 1300,
          totalTaxes: 144,
        },
      });
    });
  });
});

describe('calculateSalesTax()', function() {
  it('calculates sales and taxes for all company sales', function() {
    const companySalesData = [
      {
        name: 'Telus',
        province: 'BC',
        sales: [100, 200, 400],
      },
      {
        name: 'Bombardier',
        province: 'AB',
        sales: [80, 20, 10, 100, 90, 500],
      },
      {
        name: 'Telus',
        province: 'SK',
        sales: [500, 100],
      },
    ];

    const result = calculateSalesTax(companySalesData);

    expect(result).to.deep.equal({
      Telus: {
        totalSales: 1300,
        totalTaxes: 144,
      },
      Bombardier: {
        totalSales: 800,
        totalTaxes: 40,
      },
    });
  });
});
