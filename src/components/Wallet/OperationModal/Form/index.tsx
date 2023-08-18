import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react';
import { NewWalletOperation, OperationType } from '../../../../lib/types';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

interface IOperationFormProps {
    onConnect: (newOperation: NewWalletOperation) => void;
    operationType: OperationType;
    clearForm: boolean;
    setClearForm: (clearForm: boolean) => void;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;


}


export default function OperationForm (props: IOperationFormProps): React.ReactElement {
    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    };

    const onFinishHandler = (values: any) => {
        props.setIsLoading(true);
        const newOperation : NewWalletOperation = {
            name: values.movement_name,
            description: values.movement_description,
            value: values.movement_value,
            operation_type: props.operationType,
        }
        props.onConnect(newOperation);
    }

    if (props.clearForm) {
        onReset();
        props.setClearForm(false);
    }

    return (
        <Form
            {...layout}
            form={form}
            name={`${props.operationType}_movement_form`}
            onFinish={onFinishHandler}
            style={{ maxWidth: 600 }}

        >
            <Form.Item name="movement_name" label={`Wallet ${props.operationType} Name`} 
            rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="movement_description" label={`Wallet ${props.operationType} Description`} 
            rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="movement_value" label={`Wallet ${props.operationType} Value`} 
            rules={[{ required: true }]}>
                <InputNumber />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" loading={props.isLoading}>
                    Save
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
}

