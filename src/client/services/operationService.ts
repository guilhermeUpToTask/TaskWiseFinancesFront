import { CreateOperation, GroupedOperations, Operation, Operations } from "../models/operationModel";
import axiosInstance from "../../axiosInstance"
import { request as __request } from "../core/request"

export type TDataReadOperations = {
    limit?:number
    skip?:number,

}
export type TDataReadOperationsByMonth = {
    year:number,
    month:number
}
export type TDataReadOperation = {
    id:number
}
export type TDataCreateOperation = {
    body:CreateOperation
}
export type TDataDeleteOperation = {
    id:number
}
export default class OperationService {
    public static readOperations(data:TDataReadOperations):Promise<Operations>{
        const { limit = 100, skip = 0 } = data
       return __request({
            method:'GET',
            url:'/operation/',
            query:{
                skip,
                limit
            }
        }, axiosInstance)
    }
    public static readOperationsByMonth(data:TDataReadOperationsByMonth):Promise<GroupedOperations>{
        const { year, month } = data
       return __request({
            method:'GET',
            url:'/operation/get_all_from_month',
            query:{
                year,
                month
            }
        }, axiosInstance)
    }
    public static readOperation(data:TDataReadOperation):Promise<Operation>{
        const { id } = data
       return __request({
            method:'GET',
            url:'/operation/get',
            query:{
                id
            }
        }, axiosInstance)
    }
    public static createOperation(data:TDataCreateOperation):Promise<Operation>{
        const { body } = data
       return __request({
            method:'POST',
            url:'/operation/create',
            body:body
        }, axiosInstance)
    }
    public static deleteOperation(data:TDataDeleteOperation):Promise<Operation>{
        const { id } = data
       return __request({
            method:'DELETE',
            url:'/operation/delete',
            query:{
                operation_id:id
            }
        }, axiosInstance)
    }
}
