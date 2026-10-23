import React from 'react';
export interface HasPermissionProps {
    permission?: string | string[];
    hasPermission?: boolean;
    checkPermission?: (permission: string | string[]) => boolean;
    fallback?: React.ReactNode;
    children: React.ReactNode;
}
export declare const HasPermission: React.FC<HasPermissionProps>;
export default HasPermission;
