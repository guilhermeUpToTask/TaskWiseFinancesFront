

export type Annotation = {
    id: number,
    name: string,
    description: string,
    value: number,
    date: string,
    repeat: 'never' | 'day' | 'week' | 'month', 
    status: 'pendent' | 'expired' | 'payed' | 'recived',
    type: 'bill' | 'payment',
}
export type Annotations = Array<Annotation>
export type AnnotationWithKey  = Annotation & {
    key:number
}
export type CreateAnnotation = {
    name: string;
    description: string;
    value: number,
    date: string,
    repeat: 'never' | 'day' | 'week' | 'month', 
    status: 'pendent' | 'expired' | 'payed' | 'recived',
    type: 'bill' | 'payment',
}
export type UpdateAnnotation = {
    name: string
    description: string
    value: number
    date: string,
    repeat: 'never' | 'day' | 'week' | 'month', 
    status: 'pendent' | 'expired' | 'payed' | 'recived',
    type: 'bill' | 'payment',
}
export type UpdateAnnotationStatus ={
    status: 'pendent' | 'expired' | 'payed' | 'recived',
}
export type DeleteAnnotation = {
    id: number;
}
