(() => {

console.log("hey");

const getRandomElement = () => {
	arr = Array.from(document.body.getElementsByTagName("*"))
	.filter((e) => { return typeof e.className === 'string' && !e.className.includes("ohnoes") });

	return arr.length > 0 ? arr[Math.floor(Math.random()*arr.length)] : document.body 
}

const spawnBeaver = () => {
	let img = document.createElement('img');
	img.src = chrome.extension.getURL("images/OhNoes.png");
	img.style.zIndex = "1";
	img.className = "ohnoes-errorbuddy";
	let text = document.createElement('div')
	text.style.zIndex = "1";	
	text.innerHTML = (Math.floor(Math.random() * 2) + 1) == 1 ? "Oh Noes! It looks like you're missing a semicolon" : "Oh Noes!"
	text.className = "ohnoes-text"
	ele = getRandomElement();
	ele.appendChild(img);
	ele.appendChild(text);
};

tick = setInterval(() => {
	spawnBeaver();
}, 500);

})();