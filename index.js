function goRandomLink(links){
	window.location.href = links[Math.floor(Math.random() * links.length)];
}


class Game{
	constructor(title, author, description, icon, trailer, downloadLinks){
		this.title = title;
		this.author = author;
		this.description = description;
		this.icon = icon;
		this.trailer = trailer;
		this.downloadLinks = downloadLinks;
	}

	generateSquare(id){
		return `
			<div class="game-square">
				<a href="#game${id}">
					<img class="game-square-image" src="${this.icon}"/>
				</a>
			</div>
		`;
	}

	generateDescription(id){
		return `
			<div id="game${id}" class="game-description">
				<div class="game-description-inner">
					<h2 class="game-description-title">${this.title}</h2>
					<p class="game-description-author">${this.author}</p>
					<hr>
					<iframe class="trailer" src="${this.trailer}"></iframe>
					<p class="game-description-text">${this.description}</p>
					<input class="download-button" type="button" value="다운로드" onclick="goRandomLink(games[${id}].downloadLinks);">
				</div>
			</div>
		`;
	}
}

const games = [
	new Game('Weaponry', '이시형', 'Never gonna give you up!', 'weaponry-poster.png', 'https://www.youtube.com/embed/nRYf2IUDnHI?si=quZCa3SmNA93YpaO', ['https://xkcd.com']),
	new Game('Weaponry', '이시형', 'Never gonna give you up!', 'weaponry-poster.png', 'https://www.youtube.com/embed/nRYf2IUDnHI?si=quZCa3SmNA93YpaO', ['https://xkcd.com']),
	new Game('Weaponry', '이시형', 'Never gonna give you up!', 'weaponry-poster.png', 'https://www.youtube.com/embed/nRYf2IUDnHI?si=quZCa3SmNA93YpaO', ['https://xkcd.com']),
	new Game('Weaponry', '이시형', 'Never gonna give you up!', 'weaponry-poster.png', 'https://www.youtube.com/embed/nRYf2IUDnHI?si=quZCa3SmNA93YpaO', ['https://xkcd.com']),
	new Game('Weaponry', '이시형', 'Never gonna give you up!', 'weaponry-poster.png', 'https://www.youtube.com/embed/nRYf2IUDnHI?si=quZCa3SmNA93YpaO', ['https://xkcd.com']),
	new Game('Weaponry', '이시형', 'Never gonna give you up!', 'weaponry-poster.png', 'https://www.youtube.com/embed/nRYf2IUDnHI?si=quZCa3SmNA93YpaO', ['https://xkcd.com']),
	new Game('Weaponry', '이시형', 'Never gonna give you up!', 'weaponry-poster.png', 'https://www.youtube.com/embed/nRYf2IUDnHI?si=quZCa3SmNA93YpaO', ['https://xkcd.com']),
];

function create(games){
	let whole = '';
	let squares = '';
	let descriptions = '';
	for(let i = 0; i < games.length; i++){
		squares += games[i].generateSquare(i);
		descriptions += games[i].generateDescription(i);
		let position = i % 4;
		if(position == 3){
			whole += squares + descriptions;
			squares = '';
			descriptions = '';
		}
	}
	whole += squares + descriptions;
	return whole;
}


function onload(){
	const main = document.getElementById('main');
	main.insertAdjacentHTML('afterbegin', create(games));
}
