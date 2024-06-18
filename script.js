const audio= document.querySelectorAll("audio");
console.log(audio);
window.addEventListener("keydown",e=>{
    const clickedKey = e.keyCode;
    
})
const playAudio = (code)=>{
    audio.forEach(obj => {
        const key =obj.dataset.key;
        if(key==code){
            obj.classList.add("playing")
        }
        console.log(obj);
    })
}
window.addEventListener("keydown",e=>{
    const key = e.keyCode;
    playAudio(key);
    
})