import React from 'react';
import { Form, Input, InputNumber, Select, Button, Radio } from 'antd';
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
    connectCreate: (newAnnotation: NewAnnotation, quantity: number) => Promise<boolean>
}

export default function CreateAnnotation(props: ICreateAnnotation): React.ReactElement {
    const [form] = Form.useForm();
    const [currentRepeat, setCurrentRepeat] = React.useState<string>('never');

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
            repeat: values.annotation_repeat,
        }


        const isSuccessful = await props.connectCreate(newAnnotation, values.annotation_quantity);
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



