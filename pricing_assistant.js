// Step 1: Create the variables
const productName = "Lenovo Laptop";
const costPerUnit = 500;
const basePrice = 599;
const discountRate = 0.10; 
const salesTaxRate = 0.07;
const fixedMonthlyCosts = 3000; 

//Step 2: Calculate Pricing & Profit Metrics
const discountedPrice = basePrice * (1 - discountRate);
const finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
const profitPerUnit = finalPriceWithTax - costPerUnit;
const breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
const isProfitablePerUnit = profitPerUnit > 0;

//Step 3: Print to Console
console.log ("Product Name:" + productName);
console.log ("Discounted price (before tax):$" + discountedPrice.toFixed(2));
console.log ("Final Price with Tax: $" + finalPriceWithTax.toFixed(2));
console.log ("Profit per unit: $" + profitPerUnit.toFixed(2));
console.log (" Break even units:" + breakEvenUnits);
console.log ( " Per-unit Profitability: " + isProfitablePerUnit);
