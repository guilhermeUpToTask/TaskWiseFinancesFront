
import { useMemo } from 'react';
import { Dayjs } from 'dayjs';
import useAnnotationsByMonth from './useAnnotationsByMonth';
import useOperationsByMonth from './useOperationsByMonth';
import useWalletQuery from './useWalletQuery';
import useWarningsByDate from './useWarningsByPredDate';


export default function useRefetchers(date: Dayjs) {
    const annotationsRefetch = useAnnotationsByMonth(date).refetch;
    const operationsRefetch = useOperationsByMonth(date).refetch;
    const walletRefetch = useWalletQuery().refetch;
    const warningsRefetch = useWarningsByDate().refetch;

    return useMemo(() => ({
        annotationsRefetch,
        operationsRefetch,
        walletRefetch,
        warningsRefetch
    }), [annotationsRefetch, operationsRefetch, walletRefetch, warningsRefetch]);
}