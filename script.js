

var h5timer = document.querySelector("#line1-part1 h5")
var grow = 0;


var tl = gsap.timeline()
tl.from(".line h1",{
    y:200,
    opacity:0,
    delay: 0.5,
    stagger: 0.2,
    duration:0.6
})
tl.from(".line h2",{
    y: -100,
    opacity:0  
    
})
tl.from("#line1-part1, .line h2",{
    opacity: 0,
    onStart: function(){
        
setInterval(function(){ 
    if(grow <100){
     h5timer.innerHTML = grow++
    }else{
     h5timer.innerHTML = grow
    }
 },45)

    }
})

tl.to("#loader",{
    opacity: 0,
   delay: 4
    
})
tl.from("#page1",{
    delay:0.2,
    y: 1200,
    opacity:0

})
tl.to("#loader",{
    display : "none"
})