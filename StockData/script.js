import getStockData from "./stockDataAPI.js"

const nameEl = document.getElementById("name")
const symbolEl = document.getElementById("symbol")
const priceEl = document.getElementById("price")
const priceIconEl = document.getElementById("price-icon")
const timeEl = document.getElementById("time")
const cardEl = document.getElementById("card")

const initPrice = getStockData().price

function renderStockData() {
    const stockData = getStockData()
    nameEl.textContent = `Name: ${stockData.name}`
    symbolEl.textContent = `Symbol: ${stockData.symbol}`
    priceEl.style.color = stockData.price >= initPrice ? "green" : "red"
    priceEl.textContent = `Price: ${stockData.price}`
    priceIconEl.textContent = `${stockData.price >= initPrice ? "🔺" : "🔻"}`
    timeEl.textContent = `Time: ${stockData.time}`
}

setInterval(renderStockData, 1500)