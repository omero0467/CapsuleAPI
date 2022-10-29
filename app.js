async function getAndCheckData (url){
    try{const response = await axios.get(url)
    // console.log(response.data)
    return response.data}catch(err){
        console.log(err)
    }
}

async function fetchUsers (call1){
try{    const groupResponse = await getAndCheckData(call1)

    const userPromises =[]
    for(let el of groupResponse){
        const {id} = el
        let fetchFromUserAPI = getAndCheckData(`https://capsules7.herokuapp.com/api/user/${id}`)
        userPromises.push(fetchFromUserAPI)
    }
     const userResponses = await Promise.all(userPromises)
    // console.log(userResponses)
    return userResponses}catch(err){console.error(err)}
}
const groupPromises = [fetchUsers('https://capsules7.herokuapp.com/api/group/one'),fetchUsers('https://capsules7.herokuapp.com/api/group/two')]
async function TESTfunc (){
    try{
    const groupResponses = await Promise.all(groupPromises)
    
    const usersarr = structureUsersObj(groupResponses)
    // console.log(usersarr);
    
    return usersarr
    }catch(err){console.error(err)}
}
// TESTfunc()
const structureUsersObj = (arr1) =>{
    let usersArr = arr1.flat()
    return usersArr
}

export default {TESTfunc,groupPromises,groupPromises}