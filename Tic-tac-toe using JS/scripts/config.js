function openPlayerConfig(event){
    editedPlayer=+event.target.dataset.playerid;
    playerConfigname.style.display='block';
    backdrop.style.display='block';
}
function cancelPlayerConfig(){
    playerConfigname.style.display="none";
    backdrop.style.display="none";
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData=new FormData(event.target);
    const enteredPlayername=formData.get('Player name');
    
    /*if(!enteredPlayername){
        event.target.firstElementChild.classlist.add("error");
        notvalidError.textContent='please enter a valid Name';
        return;
    }*/
    const updatedPlayerDataElement=document.getElementById("player-" +editedPlayer+ "-data");
    updatedPlayerDataElement.children[1].textContent=enteredPlayername;   
    
    if(editedPlayer===1){
        player[0].name=enteredPlayername;
    }else{
        player[1].name=enteredPlayername;
    }
    cancelPlayerConfig();
}
