import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react';
import AnnotationTypeSelect from './AnnotationTypeSelect';

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
    values?: {
        name: string;
        description: string;
        type: string;
        value: number;
        id: number;
    }


}


export default function AnnotationForm (props: IAnotationFormProps): React.ReactElement {
    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    };
    console.log(props.values);

    return (
        <Form
            {...layout}
            form={form}
            name={props.formName}
            onFinish={props.onFinish}
            style={{ maxWidth: 600 }}
            initialValues={{
                anotation_name: (props.values) ? props.values.name : undefined,
                anotation_description: (props.values) ? props.values.description : undefined,
                anotation_type: (props.values) ? props.values.type : undefined,
                anotation_value: (props.values) ? props.values.value : undefined,

            }}

        >
            <Form.Item name="anotation_name" label="Anotation Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="anotation_description" label="Anotation Description" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="anotation_type" label="Type of the Anotation" rules={[{ required: true }]}>
                <AnnotationTypeSelect />
            </Form.Item>
            <Form.Item name="anotation_value" label="Value" rules={[{ required: true }]}>
                <InputNumber />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    {(props.values) ? 'Update' : 'Create'}
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
}

