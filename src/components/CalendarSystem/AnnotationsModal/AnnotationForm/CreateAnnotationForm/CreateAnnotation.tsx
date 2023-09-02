import React from 'react';
import { Form, Input, InputNumber, Select, Button, } from 'antd';
import { NewAnnotation } from '../../../../../lib/types';
import { Dayjs } from 'dayjs';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

interface ICreateAnnotation {
    selectedDate: Dayjs;
    isLoading: boolean;
    connect: (newAnnotation: NewAnnotation) => Promise<boolean>
}

export default function CreateAnnotation(props: ICreateAnnotation): React.ReactElement {
    const [form] = Form.useForm();


    const onReset = () => {
        form.resetFields();
    };

    const onFinish = async (values: any) => {
        console.log('Success:', values);

        const newAnnotation: NewAnnotation = {
            name: values.annotation_name,
            description: values.annotation_description,
            annon_type: values.annotation_type,
            value: values.annotation_value,
            status: 'pendent',
            date: props.selectedDate.format('YYYY-MM-DD'),
            repeat: 'never'
        }

        const isSuccessful = await props.connect(newAnnotation);
        if (isSuccessful) {
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
                    Create
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
}



