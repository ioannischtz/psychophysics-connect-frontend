// Define the props interface for your component
interface SvgDisplayProps {
  svgSource: string; // The source URL or inline SVG content
  width?: string; // SVG width (optional)
  height?: string; // SVG height (optional)
  className?: string; // Additional CSS class (optional)
  altText?: string; // Alternative text for accessibility (optional)
}

// Define your SvgDisplay component using a regular function
function SvgDisplay({
  svgSource,
  width = "100%",
  height = "100%",
  className = "",
  altText = "SVG Image",
}: SvgDisplayProps) {
  return (
    <div className={`svg-container ${className}`}>
      <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={altText}
        dangerouslySetInnerHTML={{ __html: svgSource }}
      />
    </div>
  );
}

export default SvgDisplay;
