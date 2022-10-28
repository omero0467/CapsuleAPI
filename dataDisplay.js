import omer from "./app.js";

const title = document.querySelector('.titles')
// const mainContainer = document.querySelector('.main-container')
const firstNameTitle = document.querySelector('.firstNameTitle')
const lastNameTitle = document.querySelector('.lastNameTitle')
const userIdTitle = document.querySelector('.userIdTitle')
const genderTitle = document.querySelector('.genderTitle')
const cityTitle = document.querySelector('.cityTitle')
const ageTitle = document.querySelector('.ageTitle')
const gridContainer = document.querySelector('.gridContainer')

const displayGrid = async()=>{
    
    const users = await omer.TESTfunc()
    console.log(users);
    for (let i = 0; i < users.length; i++) {
        const{id,firstName,lastName,age,city,capsule,gender} = users[i]

        const first = document.createElement('div');
        first.classList.add('name')
        first.innerText = firstName

        const last = document.createElement('div');
        last.classList.add('lastName')
        last.innerText = lastName

        const userAge = document.createElement('div');
        userAge.classList.add('age')
        userAge.innerText = age

        const userId = document.createElement('div');
        userId.classList.add('userId')
        userId.innerText = id

        const userCity = document.createElement('div');
        userCity.classList.add('city')
        userCity.innerText = city

        const userGender = document.createElement('div');
        userGender.innerText = gender
        userGender.classList.add('gender');
        
        firstNameTitle.append(first)
        lastNameTitle.append(last)
        userIdTitle.append(userId)
        genderTitle.append(userGender)
        cityTitle.append(userCity)
        ageTitle.append(userAge)
        
        
    }

    
    // const myarr = 
    gridContainer.childNodes.forEach((element,index) => {
        element.childNodes.forEach((e,i)=>{
            if(i%2 !== 0){
                        e.style.backgroundColor = 'yellow'
                    } else {
                        e.style.backgroundColor = 'red'}
        })
    });

        

}
displayGrid()


