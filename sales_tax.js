const getTotalSales = function(salesArr) {
  return salesArr.reduce(function(total, next) {
    return (total += next);
  }, 0);
};

const getTotalTaxes = function(sales, provCode) {
  const salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.1,
  };

  return sales * salesTaxRates[provCode];
};

const addSalesToSummary = function(company, salesData, salesSummary) {
  salesSummary[company] = salesSummary[company] || {
    totalSales: 0,
    totalTaxes: 0,
  };

  // equivalent to

  // if (!salesSummary[company]) {
  //   // it des not exists
  //   salesSummary[company] = {
  //     totalSales: 0,
  //     totalTaxes: 0,
  //   };
  // }

  salesSummary[company].totalSales += salesData.totalSales;
  salesSummary[company].totalTaxes += salesData.totalTaxes;

  return salesSummary;
};

const calculateSalesTax = function(salesDataArr) {
  let salesSummary = {};
  for (const companySales of salesDataArr) {
    const totalSales = getTotalSales(companySales.sales);
    const totalTaxes = getTotalTaxes(totalSales, companySales.province);
    salesSummary = addSalesToSummary(
      companySales.name,
      {
        totalSales,
        totalTaxes,
      },
      salesSummary
    );
  }
  return salesSummary;
};

module.exports = {
  getTotalSales,
  getTotalTaxes,
  addSalesToSummary,
  calculateSalesTax,
};
