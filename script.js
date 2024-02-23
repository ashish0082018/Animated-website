var tl=gsap.timeline();
tl.from("#nav h3",{      // from diya h , mean apne initial positions se ayega i.e upar se 
    y:-50,                 // y transform kiye h 
    opacity:0,
    delay:0.1,
    duration:0.2,
    stagger:0.3         // ak ak kar kr ayega nav ke h3 ke contents , you can set time also ex 0.2 (jaldi hoga)
})

tl.from('#main h1',{
    x:-500,
    opacity:0,
    duration:0.5,
    delay:0.1,
    stagger:0.5
})
tl.from('img',{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    delay:0.1,
    stagger:0.5
})

