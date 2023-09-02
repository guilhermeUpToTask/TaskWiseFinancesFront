import { Button, Form, Input, InputNumber, Select } from 'antd';
import React from 'react';
import type { Annotation } from '../../../../../lib/types';

interface IEditAnnotation {
    annotation: Annotation;
    connect: (newAnnotation: Annotation) => void;
    isLoading: boolean;
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};



export default function EditAnnotation(props: IEditAnnotation): React.ReactElement {
    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    };

    const onFinish = (values: any) => {
        const updatedAnnotation: Annotation = {
            id: props.annotation.id,
            name: values.annotation_name,
            description: values.annotation_description,
            date: props.annotation.date, // for now we will not edit the date
            status: props.annotation.status, // we need a option to change the status
            repeat: props.annotation.repeat,
            annon_type: values.annotation_type,
            value: values.annotation_value,
        }
        props.connect(updatedAnnotation);
    }

    return (
        <Form
            {...layout}
            form={form}
            name={'edit_annotation' + props.annotation.id}
            onFinish={onFinish}
            style={{ maxWidth: 600, marginTop: '1rem' }}
            initialValues={{
                annotation_name: props.annotation.name,
                annotation_description: props.annotation.description,
                annotation_type: props.annotation.annon_type,
                annotation_value: props.annotation.value,

            }}

        >
            <Form.Item name="annotation_name" label="Anotation Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="annotation_description" label="Anotation Description" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="annotation_type" label="Type of the Anotation" rules={[{ required: true }]}>
                <Select
                    placeholder="Select wich type the Annotation is"
                    options={[
                        { label: 'Payment', value: 'payment' },
                        { label: 'Bill', value: 'bill' },
                    ]} />
            </Form.Item>
            <Form.Item name="annotation_value" label="Value" rules={[{ required: true }]}>
                <InputNumber />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" loading={props.isLoading}>
                    Update
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
}


