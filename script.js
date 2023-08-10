gsap.to("#loader",{
    display:"none",
    duration:5,
    onComplete:function(){
        document.querySelector("#main").style.display="initial";
        var flag=0;
        document.querySelector(".ri-user-line").addEventListener("click",()=>{
            if(flag === 0)
            {
                document.querySelector("#quicklink").style.display="flex";
                flag=1;
            }
            else
            {
                document.querySelector("#quicklink").style.display="none";
                flag=0;
            }
        })
        
        
        gsap.from("#nav",{
            y:-100,
            duration:1
        })
        gsap.from("#section1>img",{
            x:300,
            duration:1,
            delay:1,
            opacity:0
        })
        gsap.from("#productdets",{
            x:-300,
            duration:1,
            delay:1,
            opacity:0
        })
        
        gsap.from("#section2>p",{
            scrollTrigger:{
              trigger:`#section2`,
              start:`top 80%`,
            //   scroller:`#main`,
            //   markers:true
            },
            opacity:0,
            duration:2,
            ease: Expo.easeInOut,
            x:-200
        })
        gsap.from("#section2>h1",{
            scrollTrigger:{
              trigger:`#section2`,
              start:`top 80%`,
            //   scroller:`#main`,
            //   markers:true
            },
            opacity:0,
            duration:2,
            ease: Expo.easeInOut,
            x:-200,
        })
        gsap.from(".categroy",{
            scrollTrigger:{
              trigger:`#section2 h1`,
              start:`top 50%`,
            //   scroller:`#main`,
            //   markers:true
            },
            opacity:0,
            duration:2,
            scale:0,
            stagger:.2,
            ease: Expo.easeInOut
        })
        
        
        gsap.from("#headphonedets",{
            scrollTrigger:{
              trigger:`#section3 img`,
              start:`top 50%`,
            //   scroller:`#main`,
            //   markers:true
            },
            opacity:0,
            duration:2,
            ease: Expo.easeInOut,
            x:-200,
        })
        gsap.from("#section3 img",{
            scrollTrigger:{
              trigger:`#section3 #s3overlay`,
              start:`top 80%`,
            //   scroller:`#main`,
            //   markers:true
            },
            opacity:0,
            duration:2,
            ease: Expo.easeInOut
        })

        // shopping ka

        gsap.from("#shopping>p",{
          scrollTrigger:{
            trigger:`#shopping`,
            start:`top 80%`,
          //   scroller:`#main`,
          //   markers:true
          },
          opacity:0,
          duration:2,
          ease: Expo.easeInOut,
          x:-200
      })
      gsap.from("#shopping>h1",{
          scrollTrigger:{
            trigger:`#shopping`,
            start:`top 80%`,
          //   scroller:`#main`,
          //   markers:true
          },
          opacity:0,
          duration:2,
          ease: Expo.easeInOut,
          x:-200,
      })
      gsap.from(".shoppingitem",{
          scrollTrigger:{
            trigger:`#shopping h1`,
            start:`top 50%`,
          //   scroller:`#main`,
          //   markers:true
          },
          opacity:0,
          duration:2,
          scale:0,
          stagger:.2,
          ease: Expo.easeInOut
      })
      gsap.from("#shopping>a",{
        scrollTrigger:{
          trigger:`#shopping>a`,
          start:`top 80%`,
        //   scroller:`#main`,
        //   markers:true
        },
        opacity:0,
        duration:2,
        ease: Expo.easeInOut,
        y:50,
    })

        // shopping ka khatam
        
        gsap.from("#section4 #sold p",{
            scrollTrigger:{
              trigger:`#section4`,
              start:`top 80%`,
            //   scroller:`#main`,
            //   markers:true
            },
            opacity:0,
            duration:2,
            ease: Expo.easeInOut
        })
        gsap.from("#section4 #sold h1",{
            scrollTrigger:{
              trigger:`#section4`,
              start:`top 80%`,
            //   scroller:`#main`,
            //   markers:true
            },
            opacity:0,
            duration:2,
            ease: Expo.easeInOut
        })
        
        gsap.from(".item",{
            scrollTrigger:{
              trigger:`#section4 h1`,
              start:`top 50%`,
            //   scroller:`#main`,
            //   markers:true
            },
            opacity:0,
            duration:2,
            scale:0,
            stagger:.2,
            ease: Expo.easeInOut
        })
        
        
        gsap.from("#section4 #trust p",{
            scrollTrigger:{
              trigger:`#section4  #trust p`,
              start:`top 80%`,
            //   scroller:`#main`,
            //   markers:true
            },
            opacity:0,
            duration:2,
            ease: Expo.easeInOut
        })
        gsap.from("#section4 #trust h1",{
            scrollTrigger:{
              trigger:`#section4  #trust p`,
              start:`top 80%`,
            //   scroller:`#main`,
            //   markers:true
            },
            opacity:0,
            duration:2,
            ease: Expo.easeInOut
        })
        
        gsap.from(".reason",{
            scrollTrigger:{
              trigger:`#section4  #trust p`,
              start:`top 50%`,
            //   scroller:`#main`,
            //   markers:true
            },
            opacity:0,
            duration:2,
            scale:0,
            stagger:.2,
            ease: Expo.easeInOut
        })
        
        
        gsap.from("#section5 #headphone",{
            scrollTrigger:{
              trigger:`#section5 #headphone`,
              start:`top 80%`,
            //   scroller:`#main`,
            //   markers:true
            },
            opacity:0,
            duration:2,
            y:100,
            ease: Expo.easeInOut
        })
        gsap.from("#section5 #vr",{
            scrollTrigger:{
              trigger:`#section5`,
              start:`top 50%`,
            //   scroller:`#main`,
            //   markers:true
            },
            opacity:0,
            duration:2,
            y:100,
            ease: Expo.easeInOut,
            onComplete:function(){
                gsap.to("#section6",{
                    opacity:1,
                    duration:1,
                    ease: Expo.easeInOut
                })
            }
        })
    }
})


// var flag=0;
// document.querySelector(".ri-user-line").addEventListener("click",()=>{
//     if(flag === 0)
//     {
//         document.querySelector("#quicklink").style.display="flex";
//         flag=1;
//     }
//     else
//     {
//         document.querySelector("#quicklink").style.display="none";
//         flag=0;
//     }
// })


// gsap.from("#nav",{
//     y:-100,
//     duration:1
// })
// gsap.from("#section1>img",{
//     x:300,
//     duration:1,
//     delay:1,
//     opacity:0
// })
// gsap.from("#productdets",{
//     x:-300,
//     duration:1,
//     delay:1,
//     opacity:0
// })

// gsap.from("#section2>p",{
//     scrollTrigger:{
//       trigger:`#section2`,
//       start:`top 80%`,
//     //   scroller:`#main`,
//     //   markers:true
//     },
//     opacity:0,
//     duration:2,
//     ease: Expo.easeInOut,
//     x:-200
// })
// gsap.from("#section2>h1",{
//     scrollTrigger:{
//       trigger:`#section2`,
//       start:`top 80%`,
//     //   scroller:`#main`,
//     //   markers:true
//     },
//     opacity:0,
//     duration:2,
//     ease: Expo.easeInOut,
//     x:-200,
// })
// gsap.from(".categroy",{
//     scrollTrigger:{
//       trigger:`#section2 h1`,
//       start:`top 50%`,
//     //   scroller:`#main`,
//     //   markers:true
//     },
//     opacity:0,
//     duration:2,
//     scale:0,
//     stagger:.2,
//     ease: Expo.easeInOut
// })


// gsap.from("#headphonedets",{
//     scrollTrigger:{
//       trigger:`#section3 img`,
//       start:`top 50%`,
//     //   scroller:`#main`,
//     //   markers:true
//     },
//     opacity:0,
//     duration:2,
//     ease: Expo.easeInOut,
//     x:-200,
// })
// gsap.from("#section3 img",{
//     scrollTrigger:{
//       trigger:`#section3 #s3overlay`,
//       start:`top 80%`,
//     //   scroller:`#main`,
//     //   markers:true
//     },
//     opacity:0,
//     duration:2,
//     ease: Expo.easeInOut
// })

// gsap.from("#section4 #sold p",{
//     scrollTrigger:{
//       trigger:`#section4`,
//       start:`top 80%`,
//     //   scroller:`#main`,
//     //   markers:true
//     },
//     opacity:0,
//     duration:2,
//     ease: Expo.easeInOut
// })
// gsap.from("#section4 #sold h1",{
//     scrollTrigger:{
//       trigger:`#section4`,
//       start:`top 80%`,
//     //   scroller:`#main`,
//     //   markers:true
//     },
//     opacity:0,
//     duration:2,
//     ease: Expo.easeInOut
// })

// gsap.from(".item",{
//     scrollTrigger:{
//       trigger:`#section4 h1`,
//       start:`top 50%`,
//     //   scroller:`#main`,
//     //   markers:true
//     },
//     opacity:0,
//     duration:2,
//     scale:0,
//     stagger:.2,
//     ease: Expo.easeInOut
// })


// gsap.from("#section4 #trust p",{
//     scrollTrigger:{
//       trigger:`#section4  #trust p`,
//       start:`top 80%`,
//     //   scroller:`#main`,
//     //   markers:true
//     },
//     opacity:0,
//     duration:2,
//     ease: Expo.easeInOut
// })
// gsap.from("#section4 #trust h1",{
//     scrollTrigger:{
//       trigger:`#section4  #trust p`,
//       start:`top 80%`,
//     //   scroller:`#main`,
//     //   markers:true
//     },
//     opacity:0,
//     duration:2,
//     ease: Expo.easeInOut
// })

// gsap.from(".reason",{
//     scrollTrigger:{
//       trigger:`#section4  #trust p`,
//       start:`top 50%`,
//     //   scroller:`#main`,
//     //   markers:true
//     },
//     opacity:0,
//     duration:2,
//     scale:0,
//     stagger:.2,
//     ease: Expo.easeInOut
// })


// gsap.from("#section5 #headphone",{
//     scrollTrigger:{
//       trigger:`#section5 #headphone`,
//       start:`top 80%`,
//     //   scroller:`#main`,
//     //   markers:true
//     },
//     opacity:0,
//     duration:2,
//     y:100,
//     ease: Expo.easeInOut
// })
// gsap.from("#section5 #vr",{
//     scrollTrigger:{
//       trigger:`#section5`,
//       start:`top 50%`,
//     //   scroller:`#main`,
//     //   markers:true
//     },
//     opacity:0,
//     duration:2,
//     y:100,
//     ease: Expo.easeInOut,
//     onComplete:function(){
//         gsap.to("#section6",{
//             opacity:1,
//             duration:1,
//             ease: Expo.easeInOut
//         })
//     }
// })