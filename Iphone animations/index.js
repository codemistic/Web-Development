
const html = document.documentElement;
const canvas = document.getElementById("wallpaper");
const context = canvas.getContext("2d");

const currentFrame = index => (
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
)

//making animation smooth with preload
const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const frameCount=148; //as apple has thismuch of images
canvas.width=1158;
canvas.height=770;

const img = new Image()
img.src = currentFrame(1); 
img.onload=function(){
  context.drawImage(img, 0, 0);
}
const updateImage=index=>{
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);  
}

//changing images on scroll

window.addEventListener('scroll',()=>{
  const scrollTop = html.scrollTop;
  const maxScrollTop=html.scrollHeight -window.innerHeight;
  const scrollFraction= scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  updateImage(frameCount)

  requestAnimationFrame(() => updateImage(frameIndex + 1))

})
preloadImages()
