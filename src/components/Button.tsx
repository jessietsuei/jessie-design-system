type ButtonProps = {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    onClick?: () => void;
  };
  
  export default function Button({ 
    variant = 'primary', 
    size = 'md', 
    children, 
    onClick 
  }: ButtonProps) {
    
    const baseStyles = 'font-medium rounded-md transition-colors';
    
    const variants = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600',
      secondary: 'bg-neutral-200 text-neutral-800 hover:bg-neutral-300',
    };
    
    const sizes = {
      sm: 'px-sm py-xs text-sm',
      md: 'px-md py-sm text-base',
      lg: 'px-lg py-md text-lg',
    };
  
    return (
      <button 
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      >
        {children}
      </button>
    );
  }