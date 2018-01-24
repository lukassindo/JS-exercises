function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

Phone.prototype.priceLevel = function() {
	if (this.price > 1000) {
		console.log("The price of " + this.brand + " is bigger than 1000");
	} else {
		console.log("The price of " + this.brand + " is smaller than 1000");
	}
}


var samsungGalaxyS6 = new Phone("Samsung", 999, "silver");
var iPhone6S = new Phone("Apple", 2250, "silver");
var onePlusOne = new Phone("OnePlus", 1783, "red");
var huaweiP9 = new Phone("Huawei", 749, "white");
var nokiaLumia630 = new Phone("Nokia", 800, "black");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();
huaweiP9.printInfo();
nokiaLumia630.printInfo();

samsungGalaxyS6.priceLevel();
onePlusOne.priceLevel();

var prices = [samsungGalaxyS6.price, iPhone6S.price, onePlusOne.price, huaweiP9.price, nokiaLumia630.price];

console.log("The most expensive phone costs " + Math.max.apply(null, prices));







