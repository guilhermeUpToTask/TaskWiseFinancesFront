import { Annotations, Annotation, CreateAnnotation, UpdateAnnotation } from "../models/annotationModel"
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


export default class AnnotationService {
    public static readAnnotations(data:TDataReadAnnotations={}):Promise<Annotations>{
        const { limit = 100, skip = 0 } = data
       return __request({
            method:'GET',
            url:'/annotation/',
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
            url:'/annotation/${id}',
            path:{id}
        }, axiosInstance)
    }

    public static readAnnotationsByMonth(data:TDataReadAnnotationsByMonth):Promise<Annotations>{
        const {year, month} = data
        return __request({
            method:'GET',
            url:'/annotation/get_all_from_month?year=${year}&month=${month}',
            path:{year, month}
        }, axiosInstance)
    }

    public static createAnnotation(data:TDataCreateAnnotation):Promise<Annotation>{
        const {body} = data
        return __request({
            method:'POST',
            url:'/annotation/',
            body:body
        }, axiosInstance)
    }
    public static updateAnnotation(data:TDataUpdateAnnotation):Promise<Annotation>{
        const {id, body} = data
        return __request({
            method:'PUT',
            url:'/annotation/${id}',
            path:{id},
            body:body
        }, axiosInstance)
    }
    public static deleteAnnotation(data:TDataDeleteAnnotation):Promise<Annotation>{
        const {id} = data
        return __request({
            method:'DELETE',
            url:'/annotation/${id}',
            path:{id}
        }, axiosInstance)
    }
}