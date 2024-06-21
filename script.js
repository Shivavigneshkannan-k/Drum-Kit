

function play(obj){
    const audio = document.querySelector(`audio[data-key="${obj.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${obj.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add("playing");
    key.addEventListener("transitionend",e=>{
        if(e.propertyName=="transform"){
            key.classList.remove("playing");
        }
    })
}


window.addEventListener("keydown",e =>{
    play(e);
});