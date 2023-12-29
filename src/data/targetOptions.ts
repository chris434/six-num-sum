const BASE_RANGE = ['1-10', '10-100', '100-1000'] as const
export const SUM_RANGE = [...BASE_RANGE,'1-1000' ]
export const TARGET_RANGE =['any',...BASE_RANGE,'+1000']  as const