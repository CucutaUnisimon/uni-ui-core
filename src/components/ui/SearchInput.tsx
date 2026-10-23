import React, { useState, ChangeEvent } from 'react';
import { Search, X } from 'lucide-react';

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
const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Buscar...',
  value,
  onChange,
  onClear,
  className = '',
  debounce = false,
  debounceDelay = 300,
}) => {
  const [localValue, setLocalValue] = useState<string>(value || '');
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);

    if (debounce) {
      // Cancelar el timer anterior
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      // Crear nuevo timer
      const timer = setTimeout(() => {
        onChange?.(newValue);
      }, debounceDelay);

      setDebounceTimer(timer);
    } else {
      onChange?.(newValue);
    }
  };

  const handleClear = () => {
    setLocalValue('');
    onChange?.('');
    onClear?.();
  };

  return (
    <div className={`relative ${className}`}>
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
      />
      <input
        type="text"
        value={debounce ? localValue : value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
      />
      {(debounce ? localValue : value) && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export { SearchInput };
export default SearchInput;
