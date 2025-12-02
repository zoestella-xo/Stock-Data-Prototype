export default function getStockData() {
    return {
        name: "QTechAI",
        symbol: "QTA",
        price: (Math.random() * 4).toFixed(2),
        time: new Date().toLocaleTimeString()
    }
}