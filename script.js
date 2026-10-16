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



const stockCount = 5; 
let stockMessage = "";

if (stockCount > 10) {
    stockMessage = "In stock";
} else if (stockCount >= 1 && stockCount <= 10) {
    stockMessage = "Only a few left";
} else {
    stockMessage = "Sold out";
}


const stockStatusEl = document.getElementById("stock-status");
if (stockStatusEl) {
    stockStatusEl.textContent = stockMessage;
}



const orderTotal = 1000;      
const isMember = true;        

const qualifiesForFreeDelivery = (orderTotal >= 500) && (isMember === true);
const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;


const deliveryOutputEl = document.getElementById("delivery-output");
if (deliveryOutputEl) {
    deliveryOutputEl.textContent = `Order Total: ₱${orderTotal}, Delivery Fee: ₱${deliveryFee} (Final Total: ₱${finalTotal})`;
}



const isOpen = true;

const shopStatusText = isOpen ? "Open today" : "Closed today";


const shopStatusEl = document.getElementById("shop-status");
if (shopStatusEl) {
    shopStatusEl.textContent = shopStatusText;
}

console.log("Stock Status:", stockMessage);
console.log("Delivery Fee:", deliveryFee);
console.log("Shop Status:", shopStatusText);