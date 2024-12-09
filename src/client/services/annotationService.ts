import { Annotations, Annotation, CreateAnnotation, UpdateAnnotation, GroupedAnnotations } from "../models/annotationModel"
import axiosInstance from "../../axiosInstance"
import { request as __request } from "../core/request"

export type TDataReadAnnotations = {
    limit?:number,
    skip?:number
}
export type TDataReadAnnotation = {
    id:number
}
export type TDataReadAnnotationsByMonth = {
    year:number,
    month:number
}

export type TDataCreateAnnotation = {
    body:CreateAnnotation
}
export type TDataUpdateAnnotation = {
    id: number
    body:UpdateAnnotation
}
export type TDataDeleteAnnotation = {
    id:number
}
export type TDataReadWarningAnnotation = {
    time_interval: number
}



export default class AnnotationService {
    public static readAnnotations(data:TDataReadAnnotations={}):Promise<Annotations>{
        const { limit = 100, skip = 0 } = data
       return __request({
            method:'GET',
            url:'/annotation/get_all',
            query:{
                skip,
                limit
            }
        }, axiosInstance)
    }

    public static readAnnotation(data:TDataReadAnnotation):Promise<Annotation>{
        const {id} = data
        return __request({
            method:'GET',
            url:'/annotation/{id}',
            path:{id}
        }, axiosInstance)
    }


    //needs to return the data from req not the the entire axios response
    public static readAnnotationsByMonth(data:TDataReadAnnotationsByMonth):Promise<GroupedAnnotations>{
        const {year, month} = data
        return __request({
            method:'GET',
            url:'/annotation/get_all_from_month',
            query:{year, month}
        }, axiosInstance)
    }

    public static createAnnotation(data:TDataCreateAnnotation):Promise<Annotation>{
        const {body} = data
        return __request({
            method:'POST',
            url:'/annotation/create',
            body:body
        }, axiosInstance)
    }
    public static updateAnnotation(data:TDataUpdateAnnotation):Promise<Annotation>{
        const {id, body} = data
        return __request({
            method:'PUT',
            url:'/annotation/update',
            //this is hideous code, we need to refactor the backend endpoints asp
            body:{id, ...body}
        }, axiosInstance)
    }
    public static deleteAnnotation(data:TDataDeleteAnnotation):Promise<Annotation>{
        const {id} = data
        const annotation_id = id
        return __request({
            method:'DELETE',
            url:'/annotation/delete',
            query:{annotation_id}
        }, axiosInstance)
    }

    public static readWarnings(data:TDataReadWarningAnnotation):Promise<Annotations>{
        const {time_interval} = data
        return __request({
            method:'GET',
            url:'/annotation/get_all_warnings',
            query:{time_interval}
        }, axiosInstance)
    }
}

