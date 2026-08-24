import * as React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const TwitterIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M19.953 8.793c.012.176.012.353.012.53C19.965 14.746 15.837 21 8.29 21v-.004A11.615 11.615 0 0 1 2 19.155a8.239 8.239 0 0 0 6.073-1.7 4.108 4.108 0 0 1-3.834-2.85 4.09 4.09 0 0 0 1.853-.07A4.104 4.104 0 0 1 2.8 10.513v-.052c.57.318 1.21.494 1.863.514a4.108 4.108 0 0 1-1.27-5.48 11.646 11.646 0 0 0 8.456 4.288 4.108 4.108 0 0 1 6.992-3.742 8.234 8.234 0 0 0 2.607-.997 4.118 4.118 0 0 1-1.804 2.27A8.16 8.16 0 0 0 22 6.666a8.337 8.337 0 0 1-2.047 2.126Z"
      fill="#141414"
    />
  </svg>
);

export const DiscordIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M18.93 6.514a16.491 16.491 0 0 0-4.07-1.262.062.062 0 0 0-.066.03c-.175.313-.37.721-.506 1.042a15.226 15.226 0 0 0-4.573 0A10.538 10.538 0 0 0 9.2 5.283a.064.064 0 0 0-.065-.031 16.447 16.447 0 0 0-4.07 1.262.058.058 0 0 0-.028.023c-2.593 3.874-3.303 7.653-2.954 11.384a.069.069 0 0 0 .026.047 16.586 16.586 0 0 0 4.994 2.524.065.065 0 0 0 .07-.023c.385-.525.728-1.079 1.022-1.662a.063.063 0 0 0-.035-.088 10.916 10.916 0 0 1-1.56-.743.064.064 0 0 1-.007-.107c.105-.078.21-.16.31-.242a.062.062 0 0 1 .065-.01c3.273 1.495 6.817 1.495 10.051 0a.062.062 0 0 1 .066.009c.1.082.205.165.31.243a.064.064 0 0 1-.005.107c-.499.291-1.017.537-1.561.743a.064.064 0 0 0-.034.088c.3.582.643 1.136 1.02 1.662a.064.064 0 0 0 .07.023 16.532 16.532 0 0 0 5.003-2.524.065.065 0 0 0 .026-.046c.417-4.314-.699-8.062-2.957-11.384a.05.05 0 0 0-.026-.024ZM8.684 15.65c-.985 0-1.797-.905-1.797-2.016 0-1.11.796-2.016 1.797-2.016 1.01 0 1.813.913 1.798 2.016 0 1.111-.796 2.016-1.798 2.016Zm6.646 0c-.986 0-1.797-.905-1.797-2.016 0-1.11.796-2.016 1.797-2.016 1.009 0 1.813.913 1.797 2.016 0 1.111-.788 2.016-1.797 2.016Z"
      fill="#fff"
    />
  </svg>
);

export const PlusIcon: React.FC<IconProps> = ({ size = 24, color = "#fff", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const ThreeDIcon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 22L3 17V7L12 2L21 7V17L12 22Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22V12"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 7L12 12L3 7"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
