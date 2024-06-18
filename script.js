const audio= document.querySelectorAll("audio");


const play=(search)=>{
    audio.forEach(e=>{
        // to fix => the comparison is not efficient at all
        let selected = e.dataset[key="key"];
        selected=String.fromCharCode(selected);
        selected=selected.toLowerCase();

        if(selected==search){
            e.currentTime=0;
            e.play();
            selected= selected.toUpperCase();
            const key = document.getElementById(`${selected}`);

            key.classList.add("playing");
            key.addEventListener("transitionend",e=>{
                if(e.propertyName=="transform"){
                    key.classList.remove("playing");
                }
            })
        }

    })
}


window.addEventListener("keydown",e =>{
    play(e.key);
});