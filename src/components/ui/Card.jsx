/**
 * Card Component
 * Reusable card container for features and content blocks
 */
const Card = ({
    children,
    className = '',
    hover = false,
    ...props
}) => {
    const baseStyles = `
    bg-white rounded-xl p-6
    border border-gray-200
  `;

    const hoverStyles = hover ? `
    transition-all duration-300
    hover:shadow-lg hover:border-primary/20
    hover:-translate-y-1
  ` : '';

    return (
        <div
            className={`${baseStyles} ${hoverStyles} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
