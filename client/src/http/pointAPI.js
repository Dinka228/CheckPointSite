import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createPoint = async(point)=>{
    const {data} = await $authHost.post('api/point',point)
    return data
}
export const fetchPoint = async()=>{
    const {data} = await $host.get('api/point')
    return data
}
export const fetchOnePoint = async(id)=>{
    const {data} = await $authHost.get(`api/point/${id}`)
    return data
}