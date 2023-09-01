import { Button, Form, Input, InputNumber, Select } from 'antd';
import React from 'react';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

interface IAnotationFormProps {
    formName: string;
    onFinish: (values: any) => void;
    isLoading: boolean;
    values?: {
        name: string;
        description: string;
        annon_type: string;
        value: number;
        id: number;
    }


}


export default function AnnotationForm(props: IAnotationFormProps): React.ReactElement {
    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    };

    const resetOnFinish = (values: any) => {
        props.onFinish(values);
        onReset();
    }

    return (
        <Form
            {...layout}
            form={form}
            name={props.formName}
            onFinish={resetOnFinish}
            style={{ maxWidth: 600 }}
            initialValues={{
                annotation_name: (props.values) ? props.values.name : undefined,
                annotation_description: (props.values) ? props.values.description : undefined,
                annotation_type: (props.values) ? props.values.annon_type : undefined,
                annotation_value: (props.values) ? props.values.value : undefined,

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
                    {(props.values) ? 'Update' : 'Create'}
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
}

