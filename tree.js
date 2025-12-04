// menu bar
const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links') 

    menuBtn.addEventListener('click',()=>{
        navlinks.classList.toggle('mobile-menu')
    })

// pledge count
let count = 0

document.getElementById("pledge-Btn").addEventListener("click", function(){
    count++;
    document.getElementById("Count").textContent = count
})



            
        
