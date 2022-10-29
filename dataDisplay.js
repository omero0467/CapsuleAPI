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
const usersList =document.createElement('ul')
gridContainer.append(usersList)
const displayGrid = async()=>{
    
    const users = await omer.TESTfunc()
    console.log(users);
    for (let i = 0; i < users.length; i++) {
        const{id,firstName,lastName,age,city,capsule,gender} = users[i]
        const userEl = document.createElement('li')
        createAndAppend2(firstName,userEl,'firstName')
        createAndAppend2(lastName,userEl,'lastName')
        createAndAppend2(age,userEl,'age')
        createAndAppend2(city,userEl,'city')
        createAndAppend2(capsule,userEl,'capsule')
        createAndAppend2(gender,userEl,'gender')
        createAndAppend2('Edit',userEl,'btn')
        createAndAppend2('Delete',userEl,'btn')
        usersList.appendChild(userEl)
    }

}
displayGrid()

function createAndAppend2(property,appendingParent,className) {
    let key = document.createElement('div');
    key.classList.add(`${className}`);
    key.innerText = `${property}`;
    appendingParent.appendChild(key)
}

// -----OptionB
// function createAndAppend(firstName, lastName, age, id, city, gender) {
//     const first = document.createElement('div');
//     first.classList.add('name');
//     first.innerText = firstName;

//     const last = document.createElement('div');
//     last.classList.add('lastName');
//     last.innerText = lastName;

//     const userAge = document.createElement('div');
//     userAge.classList.add('age');
//     userAge.innerText = age;

//     const userId = document.createElement('div');
//     userId.classList.add('userId');
//     userId.innerText = id;

//     const userCity = document.createElement('div');
//     userCity.classList.add('city');
//     userCity.innerText = city;

//     const userGender = document.createElement('div');
//     userGender.innerText = gender;
//     userGender.classList.add('gender');

//     firstNameTitle.append(first);
//     lastNameTitle.append(last);
//     userIdTitle.append(userId);
//     genderTitle.append(userGender);
//     cityTitle.append(userCity);
//     ageTitle.append(userAge);
// }

