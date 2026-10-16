const shopName = "Nashy's Tindahan";
const currentYear = 2026;

let runningCount = 0;


const shopTitleEl = document.getElementById("shop-title");
if (shopTitleEl) {
    shopTitleEl.textContent = shopName;
}

const footerEl = document.getElementById("shop-footer");
if (footerEl) {
    footerEl.textContent = `© ${currentYear} ${shopName}`;
}

const prices = [70, 60, 40]; 
let runningTotal = 0;

for (let i = 0; i < prices.length; i++) {
    runningTotal += prices[i];
}

const calcOutput = document.getElementById("calc-output");
if (calcOutput) {
    calcOutput.textContent = `Total products: ${prices.length} items with a total value of ₱${runningTotal}.`;
}


console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Total Products:", prices.length);
console.log("Running Total:", runningTotal);
