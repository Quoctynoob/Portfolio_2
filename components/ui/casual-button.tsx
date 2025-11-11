interface CasualButtonProps {
  label?: React.ReactNode;
  color?: string;
  hasHighlight?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function CasualButton({
  label,
  hasHighlight = true,
  disabled = false,
  onClick,
}: CasualButtonProps) {
  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  return (
    <div
      className={`inline-block ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <button
        disabled={disabled}
        onClick={handleClick}
        className={`relative p-2 rounded-full font-bold shadow-[0_4px_0_0_#2A2A2A] text-darkCharcoal border-2 border-darkCharcoal transition-all duration-150 overflow-hidden group
        bg-navbar-bg hover:shadow-none
        ${disabled ? 'opacity-50 pointer-events-none' : 'hover:translate-y-1 active:translate-y-0 active:shadow-[0_4px_0_0_#2A2A2A]'}`}
      >
        <span className="relative z-10 whitespace-nowrap">{label}</span>
        {hasHighlight && !disabled && (
          <div className="absolute top-1/2 left-[-100%] w-16 h-24 -translate-y-1/2 rotate-12 transition-all duration-500 ease-in-out group-hover:left-[200%]"></div>
        )}
      </button>
    </div>
  );
}