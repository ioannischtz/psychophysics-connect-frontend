export const colorSchemes = [
  "base",
  "primary",
  "secondary",
  "accent",
  "success",
  "warning",
  "destructive",
] as const;

export type ColorScheme = (typeof colorSchemes)[number];

export const colorSchemeToClassname = (colorScheme: ColorScheme) => {
  switch (colorScheme) {
    case "base":
      return "";
    case "primary":
      return "primary-";
    case "secondary":
      return "secondary-";
    case "accent":
      return "accent-";
    case "success":
      return "success-";
    case "warning":
      return "warning-";
    case "destructive":
      return "destructive-";
    default:
      // Handle the case where an invalid colorScheme is provided.
      throw new Error(`Invalid colorScheme: ${colorScheme}`);
  }
};
