function getRandomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  const body = document.querySelector("body");
  const start = document.querySelector("#start");
  const stop = document.querySelector("#stop");
  // const ran = getRandomColor()
  // console.log(ran);
  
  
  const changeBackgroundColor = function(){
      body.style.backgroundColor = getRandomColor();
  }
  
  let interval;
  
  start.addEventListener("click",function(){
    if(!interval){
      interval = setInterval(function(){
        changeBackgroundColor();
        
      },1000)
      
    }
    
  })
  
  stop.addEventListener("click",()=>{
    clearInterval(interval);
    interval = null;
  })