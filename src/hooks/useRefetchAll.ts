import { useCallback } from 'react';
import { Dayjs } from 'dayjs';
import useRefetchers from './useRefetchers';



export default function useRefetchAll(date: Dayjs) {
    const {
        annotationsRefetch,
        operationsRefetch,
        walletRefetch,
        warningsRefetch
    } = useRefetchers(date);

    const refetchAll = useCallback((): boolean => {
        try {
            annotationsRefetch();
            operationsRefetch();
            walletRefetch();
            warningsRefetch();
        } catch (e) {
            console.error('Failed to refetch all:', e);
            throw e
        }
        return true;

    }, [annotationsRefetch, operationsRefetch, walletRefetch, warningsRefetch]);

    return refetchAll;
}