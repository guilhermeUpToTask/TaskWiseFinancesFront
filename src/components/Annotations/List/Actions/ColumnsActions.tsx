import { Space } from 'antd';
import { AnnotationWithKey } from '../../../../lib/types';


const handleEdit = (annotation_id: number) => {
    console.log('Edit', annotation_id)
}
const handleDelete = (annotation_id: number) => {
    console.log('delete', annotation_id)
}
const handleCheck = (annotation_id: number) => {
    console.log('Check', annotation_id)
}


export default function ColumnsAction(_: unknown, record: AnnotationWithKey): JSX.Element {

    return (
        <Space>

             <a onClick={() => handleEdit(record.id)}>Edit</a>
            <a onClick={() => handleDelete(record.id)}>Delete</a>
            <a onClick={() => handleCheck(record.id)}>Check</a>
        </Space>
    )

}