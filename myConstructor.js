var stocks = {

	"AMZN" : {
		price: 1000,
		change: 2.35,
		marketCap: 800
	},

	"FB": {
		price: 300,
		change: 5.5,
		marketCap: 300
	},

	"NFLX": {
		price: 100,
		change: 8,
		marketCap: 300
	}
}

// a constructor is a template that easily helps you create objects
var myStockList = [];


function myStocks(name, price, change, marketCap) {
	this.name = name;
	this.price = price;
	this.change = change;
	this.marketCap = marketCap;

	myStockList.push(this);
}

var AMZN = new myStocks('AMZN', 100, 5, 500);
var FB = new myStocks('FB', 100, 200, 3, 1);


// create a for loop that will iterate through the array and print the price of each stock encountered.

for (var i in myStockList){
	console.log(myStockList[i].name + ': ' + myStockList[i].price);
}
