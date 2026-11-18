# Currency Converter

A small browser-based currency converter built with HTML, CSS, and vanilla JavaScript. It retrieves exchange rates from the [open.er-api.com API](https://open.er-api.com/) and displays the converted amount and rate.

## Features

- Convert between AUD, CAD, USD, EUR, GBP, INR, and JPY.
- Update the converted amount when the source currency or amount changes.
- Display the selected currency pair's exchange rate.
- No package installation or build step required.

## Run the project

Open `index.html` in a modern web browser. An internet connection is required to retrieve exchange rates.

## Project files

- `index.html` - Page structure and currency controls.
- `style.css` - Page styling and layout.
- `script.js` - Fetches exchange rates and calculates the converted amount.

## Exchange rate API

The app requests the latest rates for the selected source currency from:

```text
https://open.er-api.com/v6/latest/{BASE_CURRENCY}
```

The API request is made directly from the browser, so the app depends on the API being available and the browser being online. Rates may change over time and should be treated as informational.
