const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate(){
    fetch(
  `https://open.er-api.com/v6/latest/${currencyFirstEl.value}`
)
    .then((response) => response.json())
    .then((data) => {
        const rate = data.rates[currencySecondEl.value] ;
        exchangeRateEl.textContent = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    })
}
currencyFirstEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthSecondEl.addEventListener("input", updateRate);