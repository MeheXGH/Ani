var tline = gsap.timeline();

tline
    .from(".ani",{
        opacity:0,
        y:50,
        duration:0.8,
    })
    .from(".graf",{
        opacity:0,
        scale:1.5,
        duration:1,
    })
    .from(".dis",{
        y:20,
        opacity:0,
    })
    
    .add('str')
        .from(".lc1 ,.lc2",{
            rotation:360,
            opacity:0,
            duration:0.8,
        },'str')
       
        .from(".rc1,.rc2",{
            rotation:-360,
            opacity:0,
            duration:0.8,
        },'str')
        