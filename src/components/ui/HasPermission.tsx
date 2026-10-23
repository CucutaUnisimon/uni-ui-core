import React from 'react';

export interface HasPermissionProps {
  permission?: string | string[];
  hasPermission?: boolean;
  checkPermission?: (permission: string | string[]) => boolean;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

export const HasPermission: React.FC<HasPermissionProps> = ({
  permission,
  hasPermission,
  checkPermission,
  fallback = null,
  children
}) => {
  let isAllowed = true;

  if (hasPermission !== undefined) {
    isAllowed = hasPermission;
  } else if (checkPermission && permission !== undefined) {
    isAllowed = checkPermission(permission);
  }

  return isAllowed ? <>{children}</> : <>{fallback}</>;
};

export default HasPermission;
