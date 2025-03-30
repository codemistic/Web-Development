// Initilizing the variables
let songIndex =0;
let audioElement = new Audio('Spotify Clone/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
	{songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
	{songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
	{songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
	{songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
	{songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
	{songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
	{songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
]
// Handel play/pause click
masterPlay.addEventListener('click', ()=>{
	if(audioElement.paused || audioElement.currentTime <= 0 ){
		audioElement.play();
		masterPlay.classList.remove('fa-circle-play');
		masterPlay.classList.add('fa-circle-pause');
		gif.style.opacity = 1;
	}
	else{
		audioElement.pause();
		masterPlay.classList.remove('fa-circle-pause');
		masterPlay.classList.add('fa-circle-play');
		gif.style.opacity = 0;
	}
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=> {
	// Update Seek bar
	progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
	myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
	audioElement.currentTime = ((audioElement.duration * myProgressBar.value)/100);
})

const makeAllPlays = ()=>{
	Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
		element.classList.remove('fa-pause-circle');
		element.classList.add('fa-play-circle');
	})	
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
	element.addEventListener('click', (e) =>{

		makeAllPlays();
		songIndex = parseInt(e.target.id);
		e.target.classList.remove('fa-play-circle');
		e.target.classList.add('fa-pause-circle');
		audioElement.src = `Spotify Clone/songs/${songIndex+1}.mp3`;
		masterSongName.innerText = songs[songIndex].songName;
		audioElement.currentTime = 0;
		audioElement.play();
		masterPlay.classList.remove('fa-play-circle');
		masterPlay.classList.add('fa-pause-circle');

	})
})
document.getElementById('next').addEventListener('click', ()=> {
	if(songIndex >= 6){
		songIndex = 0;
	}
	else {
		songIndex += 1;
	}
	audioElement.src = `Spotify Clone/songs/${songIndex+1}.mp3`;
	masterSongName.innerText = songs[songIndex].songName;
	audioElement.currentTime = 0;
	audioElement.play();
	masterPlay.classList.remove('fa-play-circle');
	masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=> {
	if(songIndex <= 0){
		songIndex = 0;
	}
	else {
		songIndex -= 1;
	}
	audioElement.src = `Spotify Clone/songs/${songIndex+1}.mp3`;
	masterSongName.innerText = songs[songIndex].songName;
	audioElement.currentTime = 0;
	audioElement.play();
	masterPlay.classList.remove('fa-play-circle');
	masterPlay.classList.add('fa-pause-circle');
})
