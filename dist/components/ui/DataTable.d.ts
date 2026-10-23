import React from 'react';
import { GridColDef } from '@mui/x-data-grid';
export interface DataTableProps {
    title: string;
    rows: any[];
    columns: GridColDef[];
    isLoading?: boolean;
    searchTerm?: string;
    onSearchChange?: (value: string) => void;
    searchPlaceholder?: string;
    getRowId?: (row: any) => string | number;
    extraFilters?: React.ReactNode;
    rowHeight?: number;
    initialState?: any;
    autoHeight?: boolean;
}
export declare const DataTable: React.FC<DataTableProps>;
export default DataTable;
