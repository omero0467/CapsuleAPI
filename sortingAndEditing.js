import mainApp from "./app.js"
import data from "./dataDisplay.js"
const searchBar =document.querySelector('#search')
const selector = document.querySelector('#searchparameter')
// async function editText(params) {
    //     const userObj = await mainApp.TESTfunc()
    //     console.log(userObj)
    //     liItems.forEach((e=>{
        //         e.childNodes.forEach(element => {
            //             // if(edit.clicked === true){
                //                 element.addEventListener('click', function editInnerText(){
                    //                 element.setAttribute('contenteditable','true')
                    //                 })
                    //             // }
                    //         });
                    //     }))
                    // }
                    
                    async function editText() {
                        await mainApp.TESTfunc()
                        const liItems = document.querySelectorAll('li') 
                        let clicked= false
                        const myList = [...liItems]
                        const editBtns = document.querySelectorAll('.edit')
                        const clickSetter = function (e) {
                            clicked = true;
                            const SaveBtn = document.createElement('div')
                            SaveBtn.classList.add('save','btn')
                            SaveBtn.innerText='Save'
                            
                            let parent =''
                            if (clicked){
                                liItems.forEach(li=>{li.childNodes.forEach(div=>{
                                    parent = li
                                    div.addEventListener('click',edit(e, SaveBtn,parent))
                                })});
                                SaveBtn.addEventListener('click',newFunction(SaveBtn,parent))
                            }
                        };
                        editBtns.forEach(editButton=>{
                            editButton.addEventListener('click', clickSetter)
                            
                        })
                        let editbtn =null
                        function newFunction(SaveBtn, li) {
                            return (e) => {
                                e.target.setAttribute('contenteditable', 'false');
                                e.target.parentElement.setAttribute('contenteditable', 'false');
                                editbtn = document.createElement('div');
                                editbtn.classList.add('btn', 'edit');
                                editbtn.innerText = 'Edit';
                                editbtn.addEventListener('click', clickSetter);
                                e.target.replaceWith(editbtn);
                                clicked = false;
                            };
                        }
                        
                        function edit(e, SaveBtn,li) {
                            // li.replaceChild(e.target,SaveBtn)
                            li.setAttribute('contenteditable', 'true');
                            e.target.setAttribute('contenteditable', 'false');
                            e.target.replaceWith(SaveBtn);
                        }
                    }


                    
                    
                    searchBar.addEventListener('input',
                    async function displayBySearch(event) {
                        const users = await mainApp.TESTfunc()
                        const ListItems = document.querySelectorAll('li')
                        let value =event.target.value
                        users.forEach((user,i)=>{
                            // console.log(user);
                            // console.log(i);
                            let selectorValue = selector.value
                            switch (selectorValue) {
                                case 'firstName':
                                    const isVisible = user.firstName.includes(value)
                                    // console.log(isVisible)
                                    if(!isVisible){
                                        ListItems[i].style.display='none'
                                    }else{ListItems[i].style.display='flex'}
                                    break;
                                case 'firstName':
                                    const isVisible2 = user.firstName.includes(value)
                                    // console.log(isVisible2)
                                    if(!isVisible2){
                                        ListItems[i].style.display='none'
                                    }else{ListItems[i].style.display='flex'}
                                    break;
                                case 'age':
                                    const isVisible3 = user.age.includes(value)
                                    // console.log(isVisible3)
                                    if(!isVisible3){
                                        ListItems[i].style.display='none'
                                    }else{ListItems[i].style.display='flex'}
                                    break;
                                case 'capsule':
                                    const isVisible4 = user.capsule.includes(value)
                                    // console.log(isVisible4)
                                    if(!isVisible4){
                                        ListItems[i].style.display='none'
                                    }else{ListItems[i].style.display='flex'}
                                    break;
                                case 'city':
                                    const isVisible5 = user.city.includes(value)
                                    // console.log(isVisible5)
                                    if(!isVisible5){
                                        ListItems[i].style.display='none'
                                    }else{ListItems[i].style.display='flex'}
                                    break;
                                case 'gender':
                                    const isVisible6 = user.gender.includes(value)
                                    // console.log(isVisible6)
                                    if(!isVisible6){
                                        ListItems[i].style.display='none'
                                    }else{ListItems[i].style.display='flex'}
                                    break;
                                case 'lastName':
                                    const isVisible7 = user.lastName.includes(value)
                                    // console.log(isVisible7)
                                    if(!isVisible7){
                                        ListItems[i].style.display='none'
                                    }else{ListItems[i].style.display='flex'}
                                    break;
                            
                                default:
                                    break;
                            }
                         
                            // ListItems[i].classList.toggle('hidden',!isVisible)
                            // console.log(ListItems)
                        }) 
                        console.log(event.target.value)
                        // console.log(event.data)
                    }
                    )


                    export default {editText,searchBar}   
                    