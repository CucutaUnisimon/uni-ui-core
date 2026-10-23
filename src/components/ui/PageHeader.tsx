import React from 'react';
import { Box, Typography } from '@mui/material';
import { LucideIcon } from 'lucide-react';

interface PageHeaderProps {
    title: string;
    description: string;
    icon: LucideIcon | React.ElementType;
    iconColor?: string;
    iconBgColor?: string;
    actionButton?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    description,
    icon: Icon,
    iconColor = '#f59e0b', // Default to a neutral primary blue
    iconBgColor = 'rgba(255, 183, 17, 0.1)',
    actionButton
}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { md: 'center' },
            gap: 2,
            mb: 1 // Margen inferior para separar del contenido siguiente
        }}>
            <Box>
                <Typography variant="h4" sx={{ fontWeight: 900, color: '#111827', display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ p: 1.5, bgcolor: iconBgColor, borderRadius: '16px', display: 'flex', color: iconColor }}>
                        <Icon size={32} />
                    </Box>
                    {title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#6b7280', mt: 0.5, ml: 1 }}>
                    {description}
                </Typography>
            </Box>

            {actionButton && (
                <Box>
                    {actionButton}
                </Box>
            )}
        </Box>
    );
};

export default PageHeader;
