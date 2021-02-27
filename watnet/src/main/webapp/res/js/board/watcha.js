////////////////////netflix, watcha
var recVideoImg1Elem = document.querySelector('#recVideo_img1')
var recVideoImg2Elem = document.querySelector('#recVideo_img2')
var recVideoImg3Elem = document.querySelector('#recVideo_img3')
var recVideoImg4Elem = document.querySelector('#recVideo_img4')
var modalElem = document.querySelector('.recVideo_modal')
var iframeElem = modalElem.querySelector('#recVideo_iframe')
var mdCloseElem = modalElem.querySelector('#recVideo_md_close')

const rec1WatchaUrl = 'https://www.youtube.com/embed/BoYVltlxxJM'
const rec2WatchaUrl = 'https://www.youtube.com/embed/g5fuR8GanFI'
const rec3WatchaUrl = 'https://www.youtube.com/embed/rApl8GrZ88E'
const rec4WatchaUrl = 'https://www.youtube.com/embed/ME9IMbWkn1Y'

function openModal(){
	modalElem.classList.remove('hidden')
}

function closeModal(){
	modalElem.classList.add('hidden')
}

recVideoImg1Elem.addEventListener('click', function(){
	iframeElem.setAttribute('src', rec1WatchaUrl)
	openModal()
})

recVideoImg2Elem.addEventListener('click', function(){
	iframeElem.setAttribute('src', rec2WatchaUrl)
	openModal()
})

recVideoImg3Elem.addEventListener('click', function(){
	iframeElem.setAttribute('src', rec3WatchaUrl)
	openModal()
})

recVideoImg4Elem.addEventListener('click', function(){
	iframeElem.setAttribute('src', rec4WatchaUrl)
	openModal()
})

mdCloseElem.addEventListener('click', function() {
	iframeElem.setAttribute('src', "")
	closeModal()
})

function getStringDay(date) {
	let year = date.getFullYear() // 년도
	let month = "" + (date.getMonth() + 1)  // 월
	if(month.length < 2) {
		month = "0" + month
	}
	let day = "" + date.getDate()  // 날짜
	if(day.length < 2) {
		day = "0" + date
	}
	
	let StringDay = year + '-' + month + '-' + day
	
	return StringDay
}

var boardElem = document.querySelector('.board-container')
var currentPageElem = document.querySelector('#currentPage')
var maxPageElem = document.querySelector('#maxPage')
var moreSelectElem = document.querySelector('#moreSelect')

selBoardList()

function selBoardList() {
	if(maxPage.value === '0') {
		maxPage.value = '1'
	}
	if(currentPage.value === maxPage.value) {
		moreSelectElem.classList.add('hidden')
	}
	
	fetch(`/boardAjax?category=2&page=${currentPageElem.value}`)
	.then(function(res) {
		return res.json()
	}).then(function(myJson) {
		myJson.forEach(function (item) {
			makeArticle(item)
		})
	})
}

function makeArticle(item) {
	let startDt = new Date(item.startDt)
	let endDt = new Date(item.endDt)
	
	let now = new Date()
	let nowDtString = getStringDay(now)
	let nowDt = new Date(nowDtString)

	let leftStartDays = Math.ceil((startDt.getTime()-nowDt.getTime())/(1000*3600*24))
	let leftLastDays = Math.ceil((endDt.getTime()-startDt.getTime())/(1000*3600*24))
	
	var article = document.createElement('article')
	article.classList.add('board-article')
	
	if(item.recruitNum == 2) {
		article.innerHTML =
		`
		<h2 class="article-h2">왓챠 프리미엄</h2>
		<span class="party-name">${item.title}</span>
		<div class="article-img">
			<img class="user1-profileImg" src="/res/img/profileImg.png" alt="profile image">
			<img class="user2-profileImg" src="/res/img/profileImg.png" alt="profile image">
			<img class="user3-profileImg" src="/res/img/default-profileImg.png"	alt="profile image">
			<img class="user4-profileImg" src="/res/img/default-profileImg.png" alt="profile image">
		</div>
		<div class="article-footer">
			<div class="party-date">
				<span>${item.startDt}부터 (${leftStartDays}일)</span> <span>${item.endDt}까지 (${leftLastDays}일)</span>
			</div>
			<span class="pay-point"><span class="price">${item.price}</span>원</span>
		</div>
		`
	} else if(item.recruitNum == 3) {
		article.innerHTML =
		`
		<h2 class="article-h2">왓챠 프리미엄</h2>
		<span class="party-name">${item.title}</span>
		<div class="article-img">
			<img class="user1-profileImg" src="/res/img/profileImg.png" alt="profile image">
			<img class="user2-profileImg" src="/res/img/profileImg.png" alt="profile image">
			<img class="user3-profileImg" src="/res/img/profileImg.png"	alt="profile image">
			<img class="user4-profileImg" src="/res/img/default-profileImg.png" alt="profile image">
		</div>
		<div class="article-footer">
			<div class="party-date">
				<span>${item.startDt}부터 (${leftStartDays}일)</span> <span>${item.endDt}까지 (${leftLastDays}일)</span>
			</div>
			<span class="pay-point"><span class="price">${item.price}</span>원</span>
		</div>
		`
	} else {
		article.innerHTML =
		`
		<h2 class="article-h2">왓챠 프리미엄</h2>
		<span class="party-name">${item.title}</span>
		<div class="article-img">
			<img class="user1-profileImg" src="/res/img/profileImg.png" alt="profile image">
			<img class="user2-profileImg" src="/res/img/default-profileImg.png" alt="profile image">
			<img class="user3-profileImg" src="/res/img/default-profileImg.png"	alt="profile image">
			<img class="user4-profileImg" src="/res/img/default-profileImg.png" alt="profile image">
		</div>
		<div class="article-footer">
			<div class="party-date">
				<span>${item.startDt}부터 (${leftStartDays}일)</span> <span>${item.endDt}까지 (${leftLastDays}일)</span>
			</div>
			<span class="pay-point"><span class="price">${item.price}</span>원</span>
		</div>
		`
	}
	
	boardElem.append(article)
}

function moreSelect() {
	let nextPage = parseInt(currentPageElem.value) + 1
	currentPageElem.value = nextPage
	
	selBoardList()
}

moreSelectElem.addEventListener('click', moreSelect)