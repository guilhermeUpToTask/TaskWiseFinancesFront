import React from 'react';
import { WalletOperation } from '../../../../../lib/types';
import { Dayjs } from 'dayjs';
import { message } from 'antd';
import ConnectOperation from './ConnectOperation';


    interface IConnectOperationProps {
        operation: WalletOperation;
    }

export default function WithMsgOperation(props: IConnectOperationProps): React.ReactElement {
 
    const [messageApi, contextHolder] = message.useMessage();


    const onLoading = () => {
        messageApi.open({
            key: `delete_operation`,
            type: 'loading',
            content:
                `Deleting Operation...`
        });
    }

    const onSuccess = () => {
        messageApi.open({
            key: `delete_operation`,
            type: 'success',
            content:
                `Successfully deleted Operation!`
        });

    }

    const onError = () => {
        messageApi.open({
            key: `delete_operation`,
            type: 'error',
            content:
                `Failed to delete Operation!`
        })
    }

    return (
        <>
            {contextHolder}
            <ConnectOperation
                operation={props.operation}
                messageFns={{ onLoading, onSuccess, onError }}
            />
        </>
    )
}