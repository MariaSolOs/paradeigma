import { useState, useEffect } from 'react';

/**
 * Hook for debouncing fast changing values.
 * 
 * @param value - The value to be set
 * @param delay - The debounce delay (in milliseconds)
 */
export default function useDebounce<T>(value: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}