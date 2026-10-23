import React from 'react';
import {
    DataGrid,
    GridColDef,
    GridToolbarContainer
} from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import {
    Typography,
    Stack,
    TextField,
    InputAdornment,
    Card
} from '@mui/material';

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

const CustomToolbar = () => (
    <GridToolbarContainer sx={{ p: 0 }} />
);

const NoRowsOverlay = () => (
    <div className="flex flex-col items-center justify-center h-full py-16 gap-3 bg-secondary-50/30">
        <InboxIcon sx={{ fontSize: 56, color: 'var(--secondary-light)' }} />
        <p className="text-sm font-medium text-secondary-main">Sin registros para mostrar</p>
        <p className="text-xs text-secondary-light">Intenta ajustar el filtro de búsqueda</p>
    </div>
);

export const DataTable: React.FC<DataTableProps> = ({
    title,
    rows,
    columns,
    isLoading = false,
    searchTerm,
    onSearchChange,
    searchPlaceholder = "Buscar...",
    getRowId,
    extraFilters,
    rowHeight,
    initialState,
    autoHeight = true
}) => {
    return (
        <Card sx={{ 
            p: 2, 
            overflow: 'hidden', 
            boxShadow: 'var(--shadow-soft)', 
            border: '1px solid var(--secondary-100)', 
            borderRadius: 'var(--radius-md)' 
        }}>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent="space-between"
                alignItems={{ xs: 'stretch', md: 'center' }}
                spacing={2}
                sx={{ p: 2, borderBottom: '2px solid var(--secondary-100)' }}
            >
                <Typography variant="h6" fontWeight="bold">
                    {title}
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" sx={{ width: { xs: '100%', md: 'auto' } }}>
                    {extraFilters}
                    {onSearchChange && (
                        <TextField
                            placeholder={searchPlaceholder}
                            variant="outlined"
                            size="small"
                            value={searchTerm || ''}
                            onChange={(e) => onSearchChange(e.target.value)}
                            sx={{
                                width: { xs: '100%', sm: 350 },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 'var(--radius-md)',
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ color: 'var(--secondary-main)' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                </Stack>
            </Stack>

            <DataGrid
                rows={rows}
                columns={columns.map(col => {
                    if (col.type === 'actions' || col.renderCell) {
                        return col;
                    }
                    return {
                        ...col,
                        renderCell: (params: any) => (
                            <span className="text-gray-500">{params.value}</span>
                        )
                    };
                })}
                getRowId={getRowId || ((row) => row.id || row.uuid || Math.random())}
                loading={isLoading}
                pageSizeOptions={[10, 25, 50]}
                initialState={initialState || {
                    pagination: { paginationModel: { pageSize: 10 } },
                }}
                slots={{
                    toolbar: CustomToolbar,
                    noRowsOverlay: NoRowsOverlay,
                }}
                slotProps={{
                    pagination: {
                        labelRowsPerPage: 'Filas por página:',
                        labelDisplayedRows: ({ from, to, count }: { from: number; to: number; count: number }) =>
                            `${from}-${to} de ${count !== -1 ? count : `más de ${to}`}`,
                    }
                }}
                sx={{
                    border: 'none',
                    '& .MuiDataGrid-cell': {
                        borderColor: 'var(--secondary-100)',
                        py: 1.5,
                        '&:focus': { outline: 'none' },
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        bgcolor: 'var(--secondary-50)',
                        borderColor: 'var(--secondary-200)',
                        minHeight: '56px !important',
                        '& .MuiDataGrid-columnHeaderTitle': {
                            fontWeight: 700,
                            color: 'var(--secondary-dark)',
                            textTransform: 'uppercase',
                            fontSize: '0.75rem',
                        },
                    },
                    '& ::-webkit-scrollbar': { width: '8px', height: '8px' },
                    '& ::-webkit-scrollbar-track': { background: 'var(--secondary-50)' },
                    '& ::-webkit-scrollbar-thumb': { background: 'var(--secondary-300)', borderRadius: '4px' },
                }}
                autoHeight={autoHeight}
                disableRowSelectionOnClick
                getRowHeight={rowHeight ? () => rowHeight : () => 'auto'}
            />
        </Card>
    );
};

export default DataTable;
