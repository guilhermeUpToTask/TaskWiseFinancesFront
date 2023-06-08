import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import AnotationTypeSelect from './AnotationTypeSelect';
const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


export default function (): React.ReactElement {
    const [form] = Form.useForm();


    const onFinish = (values: any) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };


    return (
        <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
        >
            <Form.Item name="anotation_name" label="Anotation Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="anotation_description" label="Anotation Description" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            
            <Form.Item name="anotation_type" label="Type of the Anotation" rules={[{ required: true }]}>
            <AnotationTypeSelect/>
            </Form.Item>
            <Form.Item name="anotation_value" label="Value" rules={[{ required: true }]}>
                    <Input type='number'/>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Create
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
};

