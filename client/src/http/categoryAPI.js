import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createCategory = async(category)=>{
    const {data} = await $authHost.post('api/category',category)
    return data
}
export const fetchCategory = async()=>{
    const {data} = await $host.get('api/category')
    return data
}
export const fetchOneCategory = async(id)=>{
    const {data} = await $authHost.get(`api/category/${id}`)
    return data
}