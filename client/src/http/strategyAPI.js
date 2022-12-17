import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createStrategy = async(strategy)=>{
    const {data} = await $authHost.post('api/strategy',strategy)
    return data
}
export const fetchStrategy = async()=>{
    const {data} = await $host.get('api/strategy')
    return data
}
export const fetchOneStrategy = async(id)=>{
    const {data} = await $authHost.get(`api/strategy/${id}`)
    return data
}