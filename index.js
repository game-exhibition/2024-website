function goLink(link){
	window.location.href = link;
}


class Game{
	constructor(title, author, description, icon, trailer, postmortem, downloadLinks, downloadButtons, flavor){
		console.log(title);
		this.title = title;
		this.author = author;
		this.description = description;
		this.icon = icon;
		this.trailer = trailer;
		this.postmortem = postmortem;
		this.downloadLinks = downloadLinks;
		this.downloadButtons = downloadButtons;
		this.flavor = flavor;
	}

	generateSquare(id){
		return `
			<div class="game-square">
				<a href="#game${id}">
					<img class="game-square-image" src="games/${this.icon}"/>
				</a>
			</div>
		`;
	}

	generateDescription(id){
		let string = `
			<div id="game${id}" class="game-description">
				<div class="game-description-inner">
					<h2 class="game-description-title">${this.title}</h2>
					<p class="game-description-author">${this.author}</p>
					<hr>
					<p class="game-description-text">${this.description}</p>
					<div class="videos">
						<iframe allow="fullscreen;" class="trailer" src="${this.trailer}" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>
						<iframe allow="fullscreen;" class="trailer" src="${this.postmortem}" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>
					</div>`;

		string += `<div class="downloads">`
		
		if(this.downloadLinks.length == 0){
			string += `<input class="booth-only-button" type="button" value="게임 파일 제공 불가" title="${this.flavor}">`;
		} else {
			for(let i = 0; i < this.downloadLinks.length; i++){
				let downloadTitle = "다운로드"
				if(games[id].downloadButtons[i] != undefined){
					downloadTitle = games[id].downloadButtons[i];
				}
				string += `<input class="download-button" type="button" value="${downloadTitle}" title="${this.flavor}" onclick="goLink(games[${id}].downloadLinks[${i}]);">`;
			}
		}
		string += `</div>`
		string += `
				</div>
			</div>
		`;
		return string;
	}
}
// 게임 이름, 제작자, 게임 장문 설명, 1:1 웹 호환 1mb 미만 포스터 파일, 플레이버 텍스트
// Should've used JSON for this. Spaghetti incoming.

const games = [
	new Game('TRIGGER',
		 '홍서준, 홍주은, 하신영, 이예빈, 윤혜리, 김하영',
		 '트라우마 치료를 원하던 필립은 자신의 무의식 속으로 들어간다.',
		 'trigger.jpg',
		 'https://www.youtube.com/embed/DDMbHJ7jCOc',
		 'https://www.youtube.com/embed/HI336y8id-U',
		 ['https://kah-game-exhibition-2024.itch.io/trigger'],
		 [],
		 '게임 다운로드'),
	
	new Game('Forestale',
		 '최준, 최지오, 양의성, 오지훈, 이병훈, 김준연, 이원제, 우세람, 이지성, 최우주, 허준서, 박성현, 황시준, 홍기웅',
		 '지금, 거목의 마지막 힘으로 태어난 자손의 박동이 시작된다. 이 이야기는 그가 처음이자 마지막으로 뿌리내리는 이야기이다.',
		 'forestale.png',
		 'https://www.youtube.com/embed/W8TXLs0tJ5k',
		 'https://www.youtube.com/embed/DHMI1ODb4RQ',
		 ['https://kah-game-exhibition-2024.itch.io/forestale'],
		 [],
		 '게임 다운로드'),
	
	new Game('Vier : Alter Code',
		 '김예린, 오지훈, 이서하, 양의성, 은하얀, 허준서, 민예은, 예은우',
		 '이 세계의 이상현상을 연구중인 연구소에서 탈출한 주인공. 과연 그는 복수를 해낼 수 있을까?',
		 'vier-alter-code.png',
		 'https://www.youtube.com/embed/6QciTixYj7I',
		 'https://www.youtube.com/embed/sKx-0RI8QkU',
		 ['https://kah-game-exhibition-2024.itch.io/vier-alter-code'],
		 [],
		 '게임 다운로드'),
	
	new Game('파란 우주선',
		 '김수연, 김아진, 이서하, 은하얀, 이효린',
		 '비상! 우주선에 스파이가 있다!! 뭐? 기생충이 없어졌다고? 기생충 찾아! 백신 꽂아! 스파이 찾아! 우주선에서 내보내버려!',
		 'troublues-ship.png',
		 'https://www.youtube.com/embed/VbyR4QYwapg',
		 'https://www.youtube.com/embed/BpFrNGrvoY4',
		 ['https://kah-game-exhibition-2024.itch.io/troublues-ship'],
		 [],
		 '게임 다운로드'),
	
	new Game('리듬테라피',
		 '이유찬, 추유택, 홍윤교, 박태환, 이도현',
		 '음약을 연주하며 마음을 치유해보자!',
		 'rhythm-therapy.png',
		 'https://www.youtube.com/embed/AGhzyTl7W0o',
		 'https://www.youtube.com/embed/_yqRBf5Cg8w',
		 ['https://kah-game-exhibition-2024.itch.io/rhythm-therapy'],
		 [],
		 '게임 다운로드'),
	
	new Game('FLORADO',
		 '추유택, 이유찬, 홍윤교, 양유빈, 임진서, 오경규, 임서연',
		 '황무지가 된 세계, 이상향 플로라도로 향한다.',
		 'florado.jpg',
		 'https://www.youtube.com/embed/olwl3M8zKUo',
		 'https://www.youtube.com/embed/J3PWJ3ItD4o',
		 [],
		 [],
		 "부스전용 게임"),
	
	new Game('Noidi',
		 '양유빈, 김민수, 임승현, 최우주',
		 '우승자 제외 분쇄',
		 'noidi.png',
		 'https://www.youtube.com/embed/7-784zpqXxw',
		 'https://www.youtube.com/embed/7QIoSOP624E',
		 ['https://kah-game-exhibition-2024.itch.io/noidi'],
		 [],
		 '게임 다운로드'),
	
	new Game('Dormitory 2',
		 '변석영, 이병훈',
		 '작화실에서 깜빡 잠이 들었다! 어둠이 깔린 한애고에서 탈출하자.<br><b>실행이 되지 않는다면 <a href="https://learn.microsoft.com/ko-kr/cpp/windows/latest-supported-vc-redist?view=msvc-170">Microsoft Visual C++ Redistributable</a>의 설치가 필요할 수 있습니다.</b>',
		 'dormitory-2.png',
		 'https://www.youtube.com/embed/itkyap35V2E',
		 'https://www.youtube.com/embed/Y8TXAmG_txk',
		 [],
		 [],
		 '스팀 출시 고려중'),
	
	new Game('CG Fighter 23',
		 '김아진, 박찬이, 이은표, 최다연',
		 '권투 특성화고등학교가 되어버린 한애고?! 컴게과 학생들을 골라 싸움을 붙여보자. 본격 인권 유린 격투게임!',
		 'cg-fighter-23.png',
		 'https://www.youtube.com/embed/O8CAO46S1ug',
		 'https://www.youtube.com/embed/KZWzzPM2fd4',
		 ['https://kah-game-exhibition-2024.itch.io/cg-fighter-23'],
		 [],
		 '게임 다운로드'),
	
	new Game('Cat Village',
		 '변석영, 이병훈, 김준연, 안현산, 이현지, 백지은, 김다연',
		 '위대한 고양이들의 귀여운 여정!',
		 'cat-village.png',
		 'https://www.youtube.com/embed/hQcItLCmloM',
		 'https://www.youtube.com/embed/j63mQSwXo1I',
		 ['https://kah-game-exhibition-2024.itch.io/cat-village'],
		 [],
		 '게임 다운로드'),
	
	new Game('초능력자를 키우는 완벽한 방법',
		 '허지하, 김수연, 김아진, 최다연, 허유진, 윤다희, 이효린',
		 '어느날 초능력자 아기를 주웠다... 오늘부터 내가 보호자라고? 내가 너를 키워야 한다고? 내가 이 아이를 20살까지 키울 수 있을까?',
		 'perfect-superhuman-babysitting-method.png',
		 'https://www.youtube.com/embed/okDtL9RGD_s',
		 'https://www.youtube.com/embed/dxAMfU3wtEI',
		 [],
		 [],
		 '부스전용 게임'),
	
	new Game('GS-24',
		 '박태환, 이도현, 박성현, 민지명, 구원, 허지하, 홍기웅, 우세람, 민혜은, 정민재, 윤다희, 예은우, 이효린',
		 '싱글벙글 1학년들의 미니게임 대잔치! 미니게임 편의점 GS-24에 어서오세요!',
		 'gs-24.png',
		 'https://www.youtube.com/embed/P6Xiv89DWT0',
		 'https://www.youtube.com/embed/lca9CfppanE',
		 ['https://kah-game-exhibition-2024.itch.io/gs-24'],
		 [],
		 '게임 다운로드'),
	
	new Game('Cave Escape',
		 '이원제, 홍서준, 이지성, 유명현, 조승원, 강채우, 이예리',
		 '엄청난 가치의 보물이 숨겨져 있다는 악명높은 동굴. 그 동굴을 탐험하기 위한 전설적인 두 모험가의 여정이 시작된다!',
		 'cave-escape.png',
		 'https://www.youtube.com/embed/d7wXDVqt97I',
		 'https://www.youtube.com/embed/LbJ5SKGIv-A',
		 ['https://kah-game-exhibition-2024.itch.io/cave-escape'],
		 [],
		 '게임 다운로드'),
	
	new Game('Keep The Dragon',
		 '이원제, 김준연, 홍서준, 허지하, 민혜은',
		 '청룡이 되고 싶어 1000년동안 기다린 이무기는 드디어 청룡이 되기 위한 여정을 떠난다.',
		 'keep-the-dragon.png',
		 'https://www.youtube.com/embed/gKKyIR63JpY',
		 'https://www.youtube.com/embed/36VvPdfCNKQ',
		 ['https://kah-game-exhibition-2024.itch.io/keep-the-dragon'],
		 [],
		 '게임 다운로드'),
	
	new Game('스플래시',
		 '황시준, 윤다희, 은하얀, 정민재',
		 '유전자 조작으로 태어난 스플래시의 탈출을 저지하고 성장시켜라!',
		 'splash.png',
		 'https://www.youtube.com/embed/YLpaARigBko',
		 'https://www.youtube.com/embed/_59OPqAe914',
		 ['https://kah-game-exhibition-2024.itch.io/splash'],
		 [],
		 '게임 다운로드'),
	
	new Game('KEEP THE SCREEN',
		 '홍서준',
		 '네모의 짱친 람쥐썬더가 사라졌다?!! 사라진 람쥐썬더를 구하러 네모는 모험을 떠난다!',
		 'keep-the-screen.png',
		 'https://www.youtube.com/embed/XE-v2S7gUtA',
		 'https://www.youtube.com/embed/4CH92DaYZTU',
		 [],
		 [],
		 '스팀 출시 고려중'),
	
	new Game('Potato',
		 '김예린',
		 '이상한 방에서 깨어난 안네/캐샤. 어딘가 익숙한 느낌을 받은 두 사람은 다가오는 위화감에 직면한다.',
		 'potato.png',
		 'https://www.youtube.com/embed/9mo-sDMiGGc',
		 'https://www.youtube.com/embed/2wMOxsA2Q6E',
		 ['https://kah-game-exhibition-2024.itch.io/potato'],
		 [],
		 '게임 다운로드'),
	
	new Game('Candy Sugar Candy',
		 '허지하',
		 '평화로운 설탕의 세계, 갑자기 나타난 상사가 사탕이란 걸 만들어보라 합니다.',
		 'candy-sugar-candy.png',
		 'https://www.youtube.com/embed/Mbg_J9OrSXo',
		 'https://www.youtube.com/embed/y_Av1WPmGnw',
		 ['https://kah-game-exhibition-2024.itch.io/candy-sugar-candy'],
		 [],
		 '게임 다운로드'),
	
	new Game('비밀보장',
		 '조하은',
		 '사람의 마음을 보는 심리 상담사.',
		 'privacy-guaranteed.png',
		 'https://www.youtube.com/embed/n4X1G-Ofsuk',
		 'https://www.youtube.com/embed/6qXB29KF74Y',
		 ['https://kah-game-exhibition-2024.itch.io/privacy-guaranteed'],
		 [],
		 '게임 다운로드'),
	
	new Game('기적재정의론',
		 '박찬이',
		 '마법세계에 소환당한 해로. 마법에 재능이 없지만 최고의 마법사를 꿈꾸는 카문을 도와 해로는 원래의 세계에 돌아갈 수 있을까?',
		 'redefining-miracle.png',
		 'https://www.youtube.com/embed/xS1THKPBbjE',
		 'https://www.youtube.com/embed/0gcI_CWK_kk',
		 ['https://kah-game-exhibition-2024.itch.io/redefining-miracle'],
		 [],
		 '게임 다운로드'),
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
