const quote = document.getElementById('quote');
const btn = document.getElementById('btn');
const author = document.getElementById('author1');

const getQuotes = async function(){
	const response = await fetch(
		"https://animechan.vercel.app/api/quotes/anime?title=naruto"
		);

	const animeData = await response.json();
		
		console.log(animeData);

		function generateQuote(){
			quote.textContent = animeData[randomNum()].quote;
			author.textContent = animeData[randomNum()].character;
		};

		function randomNum(){
			return Math.floor(Math.random() * animeData.length);
		}
		generateQuote();

		btn.addEventListener("click",()=>{generateQuote()});
	
}

getQuotes();