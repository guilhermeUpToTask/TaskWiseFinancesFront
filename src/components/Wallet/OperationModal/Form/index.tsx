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
    onConnect: (newOperation: NewWalletOperation) => Promise<boolean>,
    operationType: OperationType,
    isLoading: boolean,
}


export default function OperationForm(props: IOperationFormProps): React.ReactElement {
    const [form] = Form.useForm();


    const onReset = () => {
        form.resetFields();

    };

    const onFinishHandler = async (values: any) => {
        const newOperation: NewWalletOperation = {
            name: values.operation_name,
            description: values.operation_description,
            value: values.operation_value,
            operation_type: props.operationType,
        }
        const isSuccessfull = await props.onConnect(newOperation);
        if (isSuccessfull) {
            onReset();
        }
    }

    return (
        <Form
            {...layout}
            form={form}
            name={`${props.operationType}_operation_form`}
            onFinish={onFinishHandler}
            style={{ maxWidth: 600 }}

        >
            <Form.Item name="operation_name" label={`Wallet ${props.operationType} Name`}
                rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="operation_description" label={`Wallet ${props.operationType} Description`}
                rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="operation_value" label={`Wallet ${props.operationType} Value`}
                rules={[{ required: true }]}>
                <InputNumber />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={props.isLoading}
                    style={{ marginRight: 10 }}
                >
                    Create
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
}

