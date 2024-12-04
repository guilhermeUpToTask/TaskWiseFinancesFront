
export type OperationType = 'income' | 'expanse'

export type Operation = {
    id: number,
    name: string,
    value: number,
    description: string,
    date: string,
    type: OperationType,
    type_id?: number,
}
export type Operations = Array<Operation>
export type CreateOperation = {
    name: string,
    value: number,
    description: string,
    type: OperationType,
    type_id?: number,
}
export type DeleteOperation = {
    id:number
}
export type GroupedOperations = {
    [date: string]: Operation[];
}