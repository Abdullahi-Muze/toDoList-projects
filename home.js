let inputList= document.querySelector(".js-inputList")
let btnAdd= document.querySelector(".js-btnAd")
let containerHtml=  document.querySelector(".js-containerHtml")
let pendingNote= document.querySelector("footer")
let date= document.querySelector(".js-date")
let btnDeletes= document.querySelectorAll('#btnDelete')
console.log(btnDeletes)


btnDeletes.forEach(btnDelete =>{
    console.log(btnDelete[1])
})

let now = new Date();
let dayNumber = now.getDate().toString().padStart(2, "0"); // 09
let dayName = now.toLocaleDateString("en-US", { weekday: "long" }); // "Friday"
date.textContent=`${dayName}, ${dayNumber}`

let listStorage=["go to shop", "buy a mango", "call my father"];
console.log(listStorage)
getList()

btnAdd.addEventListener("click", ()=>{
    if(inputList.value){
        listStorage.push(inputList.value)
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


    // if(listStorage || inputList.value){
        // listStorage.push(inputList.value)
        // console.log(listStorage)
    
        let arrangeList=[];


        listStorage.forEach(list=>{
            list= `  <div class="task">
                        <small>${dayName}, ${dayNumber}</small>
                        <p>${list}</p>
                        <button id="btnDelete">Delete</button>
                    </div>
                  `
    
            arrangeList+=list
            // console.log(`waxa waaye ${displayList}`)

                                  })
         

        displayList(arrangeList)
        inputList.value=''

                    //   }  
        //                  else{
        // pendingNote.innerHTML=
        //  `  
        //  <p style= "text-align: right; color:red;"> Sorry input note is empty!</p>
        // `
        //                       }


        console.log(btnDelete)                  
}


function displayList(arrangeList){
    pendingNote.innerHTML=
    `
        <p>you have ${listStorage.length} pending tasks </p>
        <button>clear All</button>
    `
containerHtml.innerHTML= arrangeList
}


console.log("hi")
