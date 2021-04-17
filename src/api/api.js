import * as axios from "axios";

const instance = axios.create({
     // withCredentials: true,
    baseURL:'http://host1827487.hostland.pro/api/v1/',
    headers:{
         'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})

export const registerAPI={
    signupUser(data){
        return instance.post(`signup`,data)
            .then(response=>{
                return response.data;
            })
    }
}