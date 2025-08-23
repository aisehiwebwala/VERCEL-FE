let BASE_URL = "http://localhost:3000/api"

if(window.location.host != "localhost:5173"){
    BASE_URL = "/api"
}

console.log({BASE_URL})

const getAuthFetch = (url)=>{
    try {
        return fetch(BASE_URL+url);
    } catch (error) {
        throw error
    }
}

const postAuthFetch = (url,body)=>{
    try {
        return fetch(BASE_URL+url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)})
    } catch (error) {
        throw error
    }
}

export {getAuthFetch,postAuthFetch}