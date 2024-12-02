import React from 'react';
import { Form, Input, InputNumber, Select, Button, Radio } from 'antd';
import { Annotation, CreateAnnotation } from '../../../../client/models/annotationModel';
import { Dayjs } from 'dayjs';
import AnnotationService, { TDataCreateAnnotation } from '../../../../client/services/annotationService';
import { useMutationWithMessage } from '../../../../hooks/useMutationWithMessage';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

interface ICreateAnnotationForm {
    selectedDate: Dayjs;
}

export default function CreateAnnotationForm(props: ICreateAnnotationForm): React.ReactElement {
    const [form] = Form.useForm();
    const [currentRepeat, setCurrentRepeat] = React.useState<string>('never');
    const {mutate, isLoading, isSuccess} = useMutationWithMessage<TDataCreateAnnotation, Annotation>({
        serviceFunction:AnnotationService.createAnnotation,
        queryKey:'annotations'
    })


    const onReset = () => {
        form.resetFields();
    };

    const onFinish = async (values: any) => {

        const newAnnotation: CreateAnnotation = {
            name: values.annotation_name,
            description: values.annotation_description,
            type: values.annotation_type,
            value: values.annotation_value,
            status: 'pendent',
            date: props.selectedDate.format('YYYY-MM-DD'),
            repeat: values.annotation_repeat,
        }


        mutate({body:newAnnotation})
        
        if (isSuccess) {
            onReset();
        }

    }

    return (
        <Form
            {...layout}
            form={form}
            name={'create_annotation'}
            onFinish={onFinish}
            style={{ maxWidth: 600 }}

        >
            <Form.Item
                name="annotation_name"
                label="Anotation Name"
                htmlFor="annotation_name"
                rules={[{ required: true }]}
            >
                <Input id="annotation_name" />
            </Form.Item>

            <Form.Item
                name="annotation_description"
                htmlFor="annotation_description"
                label="Anotation Description"
                rules={[{ required: true }]}
            >
                <Input id="annotation_description" />
            </Form.Item>

            <Form.Item
                name="annotation_type"
                label="Type of the Anotation"
                rules={[{ required: true }]}
            >
                <Select
                    placeholder="Select wich type the Annotation is"
                    options={[
                        { label: 'Payment', value: 'payment' },
                        { label: 'Bill', value: 'bill' },
                    ]}
                />
            </Form.Item>

            <Form.Item
                name="annotation_repeat"
                label="Repeat"
                initialValue={'never'}
                onReset={() => setCurrentRepeat('never')}
            >
                <Radio.Group onChange={(e) => setCurrentRepeat(e.target.value)}>

                    <Radio.Button value="never" defaultChecked>Never</Radio.Button>
                    <Radio.Button value="day">Daily</Radio.Button>
                    <Radio.Button value="week">Weekly</Radio.Button>
                    <Radio.Button value="month">Monthly</Radio.Button>

                </Radio.Group>
            </Form.Item>

            <Form.Item
                name="annotation_quantity"
                htmlFor="annotation_quantity"
                label="Repeat Quantity"
                initialValue={1}
            >
                <InputNumber value={1} disabled={currentRepeat === 'never'} id="annotation_quantity" />
            </Form.Item>

            <Form.Item
                name="annotation_value"
                htmlFor="annotation_value"
                label="Value"
                rules={[{ required: true }]}
            >
                <InputNumber id="annotation_value" />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Create
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
}



