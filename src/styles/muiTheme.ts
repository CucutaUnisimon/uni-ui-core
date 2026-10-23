import { createTheme } from '@mui/material/styles';
import { esES } from '@mui/x-data-grid/locales';

/**
 * Tema Institucional Simón Bolívar para MUI
 * Sincronizado dinámicamente con las variables CSS de globals.css y Tailwind
 */
export const theme = createTheme({
    palette: {
        primary: {
            main: '#09843B', // Verde Institucional
            light: '#0BA849',
            dark: '#076930',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#64748b',
            light: '#94a3b8',
            dark: '#475569',
        },
        background: {
            default: '#f8fafc',
            paper: '#ffffff',
        },
        error: {
            main: '#ef4444',
        },
        success: {
            main: '#10b981',
        },
        warning: {
            main: '#f59e0b',
        },
        info: {
            main: '#3b82f6',
        },
        divider: '#f1f5f9',
    },
    typography: {
        fontFamily: "'Inter', 'system-ui', 'sans-serif'",
        h6: {
            fontWeight: 800,
        },
        subtitle1: {
            fontWeight: 700,
        },
        subtitle2: {
            fontWeight: 600,
        },
        body1: {
            fontFamily: "'Inter', 'system-ui', 'sans-serif'",
        },
        body2: {
            fontFamily: "'Inter', 'system-ui', 'sans-serif'",
        },
    },
    shape: {
        borderRadius: 'var(--radius-md)' as any,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 700,
                    borderRadius: 'var(--radius-md)',
                    padding: '8px 20px',
                    transition: 'all 0.2s ease-in-out',
                },
                containedPrimary: {
                    backgroundColor: 'var(--primary-main)',
                    color: 'var(--primary-contrast)',
                    '&:hover': {
                        backgroundColor: 'var(--primary-dark)',
                    },
                },
                outlinedPrimary: {
                    color: 'var(--primary-main)',
                    borderColor: 'var(--primary-main)',
                    '&:hover': {
                        backgroundColor: 'var(--primary-50)',
                        borderColor: 'var(--primary-dark)',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    minHeight: '48px',
                },
                indicator: {
                    backgroundColor: 'var(--primary-main)',
                    height: '3px',
                    borderRadius: '3px 3px 0 0',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    minHeight: '48px',
                    color: 'var(--secondary-dark)',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        color: 'var(--primary-main)',
                        opacity: 0.9,
                    },
                    '&.Mui-selected': {
                        color: 'var(--primary-main)',
                        fontWeight: 700,
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-soft)',
                    border: '1px solid var(--secondary-100)',
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: 'var(--radius-modal)',
                    padding: '4px',
                    boxShadow: 'var(--shadow-premium)',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 'var(--radius-md)',
                    transition: 'all 0.2s ease-in-out',
                    '& fieldset': {
                        borderColor: 'var(--secondary-200)',
                        transition: 'border-color 0.2s ease-in-out',
                    },
                    '&:hover fieldset': {
                        borderColor: 'var(--primary-main) !important',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'var(--primary-main) !important',
                        borderWidth: '2px',
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    display: 'flex',
                    alignItems: 'center',
                },
            },
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--secondary-100)',
                    overflow: 'hidden',
                },
                columnHeaders: {
                    backgroundColor: 'var(--secondary-50)',
                    borderBottom: '1px solid var(--secondary-200)',
                },
                cell: {
                    borderColor: 'var(--secondary-100)',
                }
            }
        }
    } as any,
}, esES);

export default theme;
