let  listElements = document.querySelectorAll('.list-button');

listElements.forEach( listElement => {
   
    listElement.addEventListener('click',()=>{

        let height = 0; // esto es una variable 
        let menu = listElement.nextElementSibling; // list show
        

        if (menu.clientHeight === 0) {
            height = menu.scrollHeight; // la altura necesaria para verse 
        }

        menu.style.height = `${height}px` // 40px

    } )
});



// listElements.forEach(listElement => {
//     listElement.addEventListener('click', ()=>{
        
//         listElement.classList.toggle('arrow');

//         let height = 0;
//         let menu = listElement.nextElementSibling; // list show
//         console.log(menu);
//         if(menu.clientHeight == "0"){// la altura del list show en px  
//             height= menu.scrollHeight;  // la altura que necesita el contenido
//         }

//         menu.style.height = `${height}px`; // le da la altura 

//     })
// });