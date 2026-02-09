/**
 * Button Component
 * Reusable button with primary and secondary variants
 */
const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-lg
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

    const variants = {
        primary: `
      bg-primary text-white
      hover:bg-primary-light
      focus:ring-primary
    `,
        secondary: `
      bg-white text-primary
      border-2 border-primary
      hover:bg-gray-50
      focus:ring-primary
    `,
        accent: `
      bg-accent text-charcoal
      hover:bg-accent-light
      focus:ring-accent
    `
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
