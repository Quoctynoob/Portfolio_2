interface CartoonButtonProps {
  label: string;
  color?: string;
  hasHighlight?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  bgColor?: string;
}

export function CartoonButton({
  label,
  hasHighlight = true,
  disabled = false,
  onClick,
  size = 'lg',
  bgColor = 'bg-navbar-bg',
}: CartoonButtonProps) {
  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  // Size variants
  const sizeClasses = {
    sm: 'h-10 px-4 text-sm rounded-lg ',
    md: 'h-12 px-5 text-base rounded-lg',
    lg: 'h-14 px-6 text-xl rounded-xl',
  };

  const shadowClasses = {
    sm: 'hover:shadow-[0_4px_0_0_#2A2A2A]',
    md: 'hover:shadow-[0_5px_0_0_#2A2A2A]',
    lg: 'hover:shadow-[0_6px_0_0_#2A2A2A]',
  };

  return (
    <div
      className={`inline-block ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <button
        disabled={disabled}
        onClick={handleClick}
        className={`relative ${sizeClasses[size]} font-bold text-darkCharcoal border-2 border-darkCharcoal transition-all duration-150 overflow-hidden group
        ${bgColor} ${shadowClasses[size]}
        ${disabled ? 'opacity-50 pointer-events-none' : 'hover:-translate-y-2 active:translate-y-0 active:shadow-none'}`}
      >
        <span className="relative z-10 whitespace-nowrap">{label}</span>
        {hasHighlight && !disabled && (
          <div className="absolute top-1/2 left-[-100%] w-16 h-24 -translate-y-1/2 rotate-12 transition-all duration-500 ease-in-out group-hover:left-[200%]"></div>
        )}
      </button>
    </div>
  );
}