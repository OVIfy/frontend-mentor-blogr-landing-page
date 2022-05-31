const desktop_nav_items = document.querySelectorAll('.desktop-nav .nav-item')
const desktop_menu_box = document.querySelectorAll('.desktop-nav .nav-item .menu-box')
const android_nav_items = document.querySelectorAll('.mobile-nav-container .nav-item')
const nav_btn = document.querySelector('.nav-btn')
const android_nav_container = document.querySelector('.mobile-nav-container')





desktop_nav_items.forEach(element => {
    element.addEventListener('mouseover',()=>{
        desktop_nav_items.forEach(element =>{
            element.classList.remove('visible') //remove visible class from all menu items
        })

        element.classList.add('visible') //make only the one that is hovered on visible
       
    })
});

// document.addEventListener('mouseleave')

document.addEventListener('click',(e)=>{
    let clicked = false;
    desktop_menu_box.forEach(element =>{
        if(element === e.target){
            clicked = true;
        }
    })

    if(clicked !== true){
        desktop_nav_items.forEach(element =>{
            element.classList.remove('visible')
        })
    }
    
})

desktop_menu_box.forEach(element=>{
    element.addEventListener('mouseleave',()=>{
       element.parentElement.classList.remove('visible')
    })
})

nav_btn.addEventListener('click',()=>{
  android_nav_container.classList.toggle('visible')
})

android_nav_items.forEach(element =>{
    element.addEventListener('click',()=>{
        element.classList.toggle('visible')
    })
})

