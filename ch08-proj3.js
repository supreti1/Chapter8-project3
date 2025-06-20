function formatMoney(num) {
  return `$${Number(num).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

const container = document.getElementById("cards-container");

companyData.forEach(company => {
  const card = document.createElement("article");
  card.className = "card";

  const h2 = document.createElement("h2");
  h2.textContent = `${company.symbol} - ${company.companyName}`;

  const stats = company.stats;
  const div = document.createElement("div");
  div.innerHTML = `
    <p>Share Price (50-day avg): <span>${formatMoney(stats.day50MovingAvg)}</span></p>
    <p>Share Price (200-day avg): <span>${formatMoney(stats.day200MovingAvg)}</span></p>
    <p>Market Cap (50-day avg): <span>${formatMoney(stats.day50MovingAvg * stats.sharesOutstanding)}</span></p>
    <p>Market Cap (200-day avg): <span>${formatMoney(stats.day200MovingAvg * stats.sharesOutstanding)}</span></p>
    <p>Net Revenue: <span>${formatMoney(stats.operatingRevenue - stats.costOfRevenue)}</span></p>
    <p>Shareholder Equity: <span>${formatMoney(stats.totalAssets - stats.totalLiabilities)}</span></p>
  `;

  const footer = document.createElement("footer");
  company.tags.forEach(tag => {
    const small = document.createElement("small");
    small.textContent = tag;
    footer.appendChild(small);
  });

  card.appendChild(h2);
  card.appendChild(div);
  card.appendChild(footer);

  container.appendChild(card);
});
