async function getdata(categ){
    c=1
    console.log("Get called")
    var url = 'https://gnews.io/api/v4/top-headlines?token=2619b7773b89f1bee4232007bca232e6&lang=en&topic='+categ;
    const res = await fetch(url)
    const data = await res.json() 
    func2(1)

     //---------------nextbutton------------------

    var button=document.querySelector(".next");
    button.addEventListener("click", () => {
        length_array=data['articles'].length
        c=c+1
        if(c>=length_array)                 //testing-complete-working fine
        {
            c=0
        }  
        func2(c);  
        console.log("value of c is"+c)     
        console.log("Clicked")                
        console.log(data['articles'][c])        
    });
    //---------------backbutton------------------
    var button=document.querySelector(".back");
    button.addEventListener("click", () => {
        c=c-1
        console.log("Clicked")
        console.log(data['articles'][c])
        if(c<=0)                            //testing-complete-working fine
        {
            c=length_array
        }  
        func2(c);  
    });


    function func2(c)                        //main-function
    {
    var title=data['articles'][c]['title']
    var description=data['articles'][c]['description'].slice(0,100)+"..."
    var link=data['articles'][c]['url']
    var urltoimage=data['articles'][c]['image']
    $('.title').html(title);
    $('.description').html(description);
    $('.link').attr('href',link);
    $('.urltoimage').attr('src',urltoimage)

    var title1=data['articles'][c-1]['title']
    var description1=data['articles'][c-1]['description'].slice(0,100)+"..."
    var link1=data['articles'][c-1]['url']
    var urltoimage1=data['articles'][c-1]['image']
    $('.title1').html(title1);
    $('.description1').html(description1);
    $('.link1').attr('href',link1);
    $('.urltoimage1').attr('src',urltoimage1)

    var title2=data['articles'][c+1]['title']
    var description2=data['articles'][c+1]['description'].slice(0,100)+"..."
    var link2=data['articles'][c+1]['url']
    var urltoimage2=data['articles'][c+1]['image']
    $('.title2').html(title2);
    $('.description2').html(description2);
    $('.link2').attr('href',link2);
    $('.urltoimage2').attr('src',urltoimage2)
    };


}       

getdata('general')    //default category


var business=document.querySelector(".business");
business.addEventListener("click", () => {
    getdata('business')
});

var entertainment=document.querySelector(".entertainment");
entertainment.addEventListener("click", () => {
    getdata('entertainment')
});

var sports=document.querySelector(".general");
sports.addEventListener("click", () => {
    getdata('general')
});

var sports=document.querySelector(".sports");
sports.addEventListener("click", () => {
    getdata('sports')
});

function myFunction()   //dark mode
{
    var element = document.getElementById('hero');
    var headline=document.getElementById('headline');
    var navtoggle=document.getElementById('nav');
    headline.classList.toggle("headline-toggle");
    element.classList.toggle("toggle");
    navtoggle.classList.toggle("nav-toggle");
 }