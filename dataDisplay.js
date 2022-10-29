import mainApp from "./app.js";
import sorter from "./sortingAndEditing.js"
const title = document.querySelector('.titles')
// const mainContainer = document.querySelector('.main-container')
const firstNameTitle = document.querySelector('.firstNameTitle')
const lastNameTitle = document.querySelector('.lastNameTitle')
const userIdTitle = document.querySelector('.userIdTitle')
const genderTitle = document.querySelector('.genderTitle')
const cityTitle = document.querySelector('.cityTitle')
const ageTitle = document.querySelector('.ageTitle')
const gridContainer = document.querySelector('.gridContainer')
const usersList =document.createElement('ul')
gridContainer.append(usersList)

const displayGrid = async()=>{
    
 try{   const users = await mainApp.TESTfunc()
    const criterias = document.createElement('div')
    for (let i = 0; i < users.length; i++) {
        const{id,firstName,lastName,age,city,capsule,gender,hobby} = users[i]
        const userEl = document.createElement('li')
        createAndAppend2(firstName,userEl,'firstName')
        createAndAppend2(lastName,userEl,'lastName')
        createAndAppend2(age,userEl,'age')
        createAndAppend2(city,userEl,'city')
        createAndAppend2(capsule,userEl,'capsule')
        createAndAppend2(gender,userEl,'gender')
        createAndAppend2(hobby,userEl,'hobby')
        createAndAppend2('Edit',userEl,'btn','edit')
        createAndAppend2('Delete',userEl,'btn','delete')
        usersList.appendChild(userEl)
    }
    const deleteBtns = document.querySelectorAll('.delete')
    deleteBtns.forEach((k)=>{
        k.addEventListener('click',(e)=>{
            //    k.parentElement.classList.toggle('hidden')
            k.parentElement.style.display= 'none'
            console.log(k.parentElement)
        })
        
    })} catch (err){ console.log(err)}
    // console.log(editBTNS[i])
    
}
displayGrid()

function createAndAppend2(property,appendingParent,className,secondClass) {
    let key = document.createElement('div');
    key.classList.add(`${className}`);
    if (secondClass!==undefined) {
        key.classList.add(`${secondClass}`);
    }
    key.innerText = `${property}`;
    appendingParent.appendChild(key)
}
// sorter.editText()


// async function editText() {
    //     await displayGrid()
    //     const liItems = document.querySelectorAll('li') 
    //     let clicked= false
    //    const myList = [...liItems]
    //     const editBtns = document.querySelectorAll('.edit')
    //     const clickSetter = function (e) {
        //         clicked = true;
        //         const SaveBtn = document.createElement('div')
        //         SaveBtn.classList.add('save','btn')
        //         SaveBtn.innerText='Save'
        
        //         let parent =''
        //         if (clicked){
            //             liItems.forEach(li=>{li.childNodes.forEach(div=>{
                //                 parent = li
                //                 div.addEventListener('click',edit(e, SaveBtn,parent))
                //             })});
                //             SaveBtn.addEventListener('click',newFunction(SaveBtn,parent))
                //         }
                //     };
                //     editBtns.forEach(editButton=>{
                    //         editButton.addEventListener('click', clickSetter)
                    
                    //     })
                    //     console.log(clicked)
                    //     let editbtn =null
                    //     function newFunction(SaveBtn, li) {
                        //         return (e) => {
                            //             e.target.setAttribute('contenteditable', 'false');
                            //             e.target.parentElement.setAttribute('contenteditable', 'false');
                            //             editbtn = document.createElement('div');
                            //             editbtn.classList.add('btn', 'edit');
                            //             editbtn.innerText = 'Edit';
                            //             editbtn.addEventListener('click', clickSetter);
                            //             e.target.replaceWith(editbtn);
                            //             clicked = false;
                            //         };
                            //     }
                            
                            //     function edit(e, SaveBtn,li) {
                                //         // li.replaceChild(e.target,SaveBtn)
                                //         li.setAttribute('contenteditable', 'true');
                                //         e.target.setAttribute('contenteditable', 'false');
                                //         e.target.replaceWith(SaveBtn);
                                //     }
                                //     // console.log(userObj)
                                // }
                                export default {displayGrid}
                                sorter.editText()