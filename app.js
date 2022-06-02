const desktop_nav_items = document.querySelectorAll('.desktop-nav .nav-item')
const desktop_menu_box = document.querySelectorAll('.desktop-nav .nav-item .menu-box')
const android_nav_items = document.querySelectorAll('.mobile-nav-container .nav-item a')
const nav_btn = document.querySelector('.nav-btn')
const android_nav_container = document.querySelector('.mobile-nav-container')





desktop_nav_items.forEach(element => {
    element.addEventListener('mouseover',makeMenuBoxVisibleOnHover(element))

    element.addEventListener('click',()=>{
       if(element.classList.contains('visibl')){
        desktop_nav_items.forEach(element=>{
            element.classList.remove('visibl')
        })

        element.classList.remove('visibl')
       } 
       else{
        desktop_nav_items.forEach(element=>{
            element.classList.remove('visibl')
        })

        element.classList.add('visibl')
       }
    
        
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
        element.parentElement.classList.toggle('visible')
    })
})

function makeMenuBoxVisibleOnHover(element) {
    return () => {
        desktop_nav_items.forEach(element => {
            element.classList.remove('visible') //remove visible class from all menu items
        })

        element.classList.add('visible')

    }
}

function makeMenuBoxVisibleOnClick(element) {
    return () => {
        desktop_nav_items.forEach(element => {
            element.classList.remove('visible') //remove visible class from all menu items
        })

        element.classList.add('visible')


    }
}

