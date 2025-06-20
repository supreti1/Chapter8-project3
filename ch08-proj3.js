import companies from './companies-data.js';

const container = document.getElementById('companies');

companies.forEach(company => {
  const companyDiv = document.createElement('div');
  companyDiv.className = 'company';

  const title = document.createElement('h2');
  title.textContent = `${company.symbol} - ${company.name}`;
  companyDiv.appendChild(title);

  const infoList = document.createElement('ul');

  const dataPoints = [
    { label: 'Share Price (50-day)', value: company.sharePrice['50Day'] },
    { label: 'Market Cap (50-day)', value: company.marketCap['50Day'] },
    { label: 'Net Revenue', value: company.financials.revenue },
  ];

  dataPoints.forEach(dp => {
    const li = document.createElement('li');
    li.textContent = `${dp.label}: $${parseFloat(dp.value).toLocaleString()}`;
    infoList.appendChild(li);
  });

  companyDiv.appendChild(infoList);
  container.appendChild(companyDiv);
});
