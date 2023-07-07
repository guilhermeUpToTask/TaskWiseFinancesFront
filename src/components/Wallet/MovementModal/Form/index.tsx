import { Button, Form, Input, InputNumber } from 'antd';
import { Dayjs } from 'dayjs';
import React from 'react';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

interface IMovementFormProps {
    onFinish: (values: any) => void;
    movementType: string;


}


export default function MovementForm (props: IMovementFormProps): React.ReactElement {
    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Form
            {...layout}
            form={form}
            name={`${props.movementType}_movement_form`}
            onFinish={props.onFinish}
            style={{ maxWidth: 600 }}

        >
            <Form.Item name="movement_name" label={`Wallet ${props.movementType} Name`} 
            rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="movement_description" label={`Wallet ${props.movementType} Description`} 
            rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="movement_value" label={`Wallet ${props.movementType} Value`} 
            rules={[{ required: true }]}>
                <InputNumber />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
}

