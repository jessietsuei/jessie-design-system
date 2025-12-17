import React from 'react';

type InputProps = {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ 
  label,
  placeholder = 'Enter text...',
  type = 'text',
  disabled = false,
  onChange,
}: InputProps) {
  
  return (
    <div className="flex flex-col gap-xs">
      {label && (
        <label className="font-body text-sm text-black-700">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className="font-body text-base px-md py-sm rounded-md border border-black-200 
                   bg-white text-black-900
                   placeholder:text-black-400
                   focus:outline-none focus:border-cello-500 focus:ring-1 focus:ring-cello-500
                   disabled:bg-black-50 disabled:text-black-400 disabled:cursor-not-allowed
                   transition-colors"
      />
    </div>
  );
}

export default Input;