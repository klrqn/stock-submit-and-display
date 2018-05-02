// https://stackoverflow.com/questions/40060778/javascript-how-to-add-constructor-object-with-user-input?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

// obj: take inputs from a user to create a stock obj
// 	ticker, name, price, change, market cap

// user constructor objs to build the obj using the above info. then, add the created obj to a main obj.

// stock obj model
function Stock(ticker, name, price, change, marketCap) {
	this.ticker = ticker;
	this.name = name;
	this.price = price;
	this.change = change;
	this.marketCap = marketCap;
}

function Blog() {
	this.post = [];

	this.addPost = function(post) {
		this.post.push(post);
	}
}

var stock = new Stock("AMZN", "amazon", "50", "+5%", "900B");
var blog = new Blog();
blog.addPost(stock);


var submit = document.getElementById('submit');

//function to add Blog posts to HTML content
function addToHTML() {
  for(var i = 0; i < blog.post.length; i++) {
    var article = document.querySelector('#blog_posts');
    var title = document.createElement('h1');
    var date = document.createElement('p');
    var image = document.createElement('img');
    var text = document.createElement('p');
    var blog_title = blog.post[i].title;
    var blog_date = blog.post[i].date;
    var blog_image = blog.post[i].image;
    var blog_text = blog.post[i].text;
    title.textContent=blog_title;
    date.textContent=blog_date;
    image.setAttribute('src', blog_image);
    text.textContent=blog_text;
    article.appendChild(title);
    article.appendChild(date);
    article.appendChild(image);
    article.appendChild(text);
  }
}




//Event listener
submit.addEventListener('click', function getTarget(e) {
  e.preventDefault();
  var ticker = document.getElementById('ticker').value;
  var name = document.getElementById('name').value;
  var price = document.getElementById('price').value;
  var change = document.getElementById('change').value;
  var marketcap = document.getElementById('marketcap').value;
  var newStock = new stock(ticker, name, price, change, marketcap);
  });

