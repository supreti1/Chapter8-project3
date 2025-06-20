window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("companies");

  companies.forEach((company) => {
    const div = document.createElement("div");
    div.className = "company";
    div.innerHTML = `
      <h2>${company.symbol} - ${company.name}</h2>
      <p><strong>Share Price (50-day avg):</strong> ${company.sharePrice50Day}</p>
      <p><strong>Market Cap (50-day avg):</strong> ${company.marketCap50Day}</p>
      <p><strong>Revenue:</strong> ${company.revenue}</p>
    `;
    container.appendChild(div);
  });
});
