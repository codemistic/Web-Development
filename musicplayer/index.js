const musicsContainer=document.querySelector('.music-container')
const playBtn=document.querySelector('#play');
const prevBtn=document.querySelector('#prev');
const nextBtn=document.querySelector('#next');
const audio=document.querySelector('#audio')
const progress=document.querySelector('.progress')
const progressContainer=document.querySelector('.progress-container')
const title =document.querySelector('#title')
const cover=document.querySelector('#cover')

//song title
const songs=['butter','killme','Decendents','leave_the_door_open','mood']

//keep track of songs(default)
let songIndex =4;

//intaialy load song info DOM
loadSongs(songs[songIndex]);

//update song details
function loadSongs(song){
    title.innerHTML= song
    audio.src =`music/${song}.mp3`;
    cover.src =`images/${song}.png`
}

function playSong(){
    musicsContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
   
    //audio playing
    audio.play();

}

function pauseSong(){
    musicsContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    //audio paused
    audio.pause();
}

//prev song function
function prevsong(){
    songIndex--;

    if(songIndex < 0){
        songIndex = songs.length - 1
    }

    loadSongs(songs[songIndex]);

    playSong();
}

//next song function
function nextsong(){
    songIndex++;

    if(songIndex > songs.length - 1){
        songIndex = 0
    }
    
    loadSongs(songs[songIndex]);

    playSong();

}

//progress
function updateProgress(e){
    const {duration,currentTime}=e.srcElement;
    const progresspercent = (currentTime / duration)*100;
    progress.style.width=`${progresspercent}%`

}

//controling progress
function setProgress(e){
  const width =this.clientWidth;
  const clientX =e.offsetX
  const duration=audio.duration;


  audio.currentTime=(clientX/width)*duration;
  
}

//eventlistner
playBtn.addEventListener('click',()=>{
    const isPlaying =musicsContainer.classList.contains('play')
    
    if(isPlaying){
        pauseSong()
    }
    else{
        playSong()
    }
});

//change song event
prevBtn.addEventListener('click',prevsong);
nextBtn.addEventListener('click',nextsong);

audio.addEventListener('timeupdate',updateProgress);

progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended',nextsong);