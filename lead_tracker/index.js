let myLeads = []
const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("delete-btn")

const tabBtn = document.getElementById("tab-btn")


inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    render(myLeads)
    inputEl.value=""

    localStorage.setItem("myLeads",JSON.stringify(myLeads))

    // console.log(localStorage.getItem("myLeads"))
})


tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        render(myLeads)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
    })
})

// tabBtn.addEventListener("click", function(){    
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//         render(myLeads)
//     })
// })


deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
 })



const leads = JSON.parse(localStorage.getItem("myLeads"))

if(leads){
    myLeads=leads
    render(myLeads)
}



function render(leads){
    let listItems = ""
    for(let i=0;i<leads.length;i++){
            
        // const li = document.createElement("li")
        // li.textContent=myLeads[i]
        // ulEl.append(li);
    
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    
        // listItems+="<li><a href='" +myLeads[i]+ "' target='_black'>"+myLeads[i]+"</a></li>"


        // template string
        listItems += `
            <li>
                <a href="${leads[i]}" target="_blank">${leads[i]}</a>
            </li>
        `
    }
    ulEl.innerHTML=listItems
}





