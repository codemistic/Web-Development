var color= ["#222f3e","#f368e0","#ee5353","#6c55cc","#24ffff","#ff2626","#ffffff","#000000","#7878ff","#cdcdcd","#454545","#909090","#cccddd","#0abde3","#10ac84","#5f27cd"];
var i=0;
document.querySelector("button").addEventListener("click",function(){
	i=1<color.length ? ++i : 0;
	document.querySelector("body").style.background=color[i]
})