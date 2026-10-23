import React from 'react';
interface SearchInputProps {
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    onClear?: () => void;
    className?: string;
    debounce?: boolean;
    debounceDelay?: number;
}
/**
 * Componente SearchInput Reutilizable
 */
declare const SearchInput: React.FC<SearchInputProps>;
export { SearchInput };
export default SearchInput;
