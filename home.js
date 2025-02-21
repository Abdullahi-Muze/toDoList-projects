let inputList= document.querySelector(".js-inputList")
let btnAdd= document.querySelector(".js-btnAd")
let containerHtml=  document.querySelector(".js-containerHtml")
let pendingNote= document.querySelector(".pendingConatiner")
let date= document.querySelector(".js-date")
let trashAll= document.querySelector(".trashAll")
let btnAddCon= document.querySelector(".btnAddCon")





let now = new Date();
let dayNumber = now.getDate().toString().padStart(2, "0"); // 09
let dayName = now.toLocaleDateString("en-US", { weekday: "long" }); // "Friday"
date.textContent=`${dayName}, ${dayNumber}`

let listStorage=JSON.parse(localStorage.getItem("listStorage")) || [];

getList()



btnAdd.addEventListener("click", ()=>{
    if(inputList.value){
        listStorage.push(inputList.value)
      localStorageGeT()
        getList()
    }        else{
    pendingNote.innerHTML=
     `  
     <p style= "text-align: right; color:red;"> Sorry input note is empty!</p>
    `
                          }
    
}
)



function getList(){

    let arrangeList=[];


        listStorage.forEach((list, i )=>{
            list= `  <div class="task">
                        <small> ${dayName}, ${dayNumber}</small>
                       <input class="textNote js-textNOte" name="" data-id="${i}" value="${list}">
                        <button class="btnEdit"
                            onclick="
                                
                                    let textNote= document.querySelectorAll('.js-textNOte')
                                    // console.log(textNote.dataset.id)
                                    
                                    textNote.forEach((note)=>{
                                        if(${i} == note.dataset.id){
                                        console.log(note.value) 
                                        listStorage[${i}]=note.value
                                        console.log(listStorage)
                                        localStorageGeT()
                                        getList()
                                        }
                                            
                                        })
                                        
                                    

                            "
                        >edit</button>
                       

                        <button class="btnDelete" 
                        onclick="
                         listStorage.splice(${i}, 1)
                         localStorage.removeItem('listStorage')
                         console.log(listStorage)
                        getList()
                        "
                        >Delete</button>
                    </div>
                  `
    
            arrangeList+=list
            // console.log(`waxa waaye ${displayList}`)

                                  })
         

        displayList(arrangeList)
        inputList.value=''
                
}


function displayList(arrangeList){
    pendingNote.innerHTML=
    `
        <p>you have ${listStorage.length} pending tasks </p>
    `
containerHtml.innerHTML= arrangeList
}



trashAll.addEventListener("click", ()=>{

    listStorage.splice(0, listStorage.length)
    localStorage.removeItem("listStorage")
    getList()
})


function localStorageGeT(){
    localStorage.setItem("listStorage",JSON.stringify(listStorage))
}



function editNote(list, i){
    // btnUpdate.addEventListener("click", ()=>{
    //     // if(inputList.value){
    //     //         listStorage.splice(i, 1)
    //     //         localStorage.removeItem('listStorage')
    //     //         console.log(listStorage)
    //     //         listStorage.push(inputList.value)
    //     //         btnUpdate.remove()
    //     //         document.querySelector(".btnAddCon").appendChild(btnAdd)
    //     //          getList()
    //     //     }



    //         console.log(document.querySelector(".js-textNOte").value)
    //     inputList.value= document.querySelector(".js-textNOte").value

    // })
    // listStorage[${i}]=document.querySelector('.js-textNOte').value
    // console.log( "waa kanaa ", listStorage[list])

    // localStorageGeT()
}



