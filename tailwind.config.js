/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Text
        "da-t-title": "#1A1A1AFF",
        "da-t-body": "#444444FF",
        "da-t-discription": "#666666FF",
        "da-t-placeholder": "#99A1AFFF",
        "da-t-disabled": "#A5A5A5FF",
        "da-t-inverse": "#F3F3F3FF",
        "da-t-primary": "#687AE6FF",
        "da-t-link": "#FF8C19FF",
        "da-t-link-hover": "#20BE67FF",
        "da-t-positive": "#009B98FF",
        "da-t-attention": "#FF0000FF",
      
        // Brand & Identity
        "da-lg-red1": "#A50034FF",
        "da-lg-red2": "#FD312EFF",
        "da-lg-red3": "#FF6F6FFF",
        "da-primary": "#687AE6FF",
        "da-white": "#FFFFFFFF",
        "da-black": "#000000FF",
      
        // Icons
        "da-icon-gray": "#74818CFF",
        "da-icon-gray-state": "#C4CCD3FF",
        "da-icon-gray-hover": "#212121FF",
        "da-icon-gray-disable": "#A5A5A5FF",
      
        // Backgrounds
        "da-bg1": "#F8F8F8FF",
        "da-bg2": "#F2F3F7FF",
        "da-bg3": "#F1F3FFFF",
        "da-bg3-deep": "#E0E5FFFF",
        "da-bg4": "#E0E4E8FF",
        "da-bg5": "#F1F7FFFF",
      
        // Form & Divider & Grid
        "da-form-read-dis-bg": "#F4F4F4FF",
        "da-form-essen-bg": "#FDFFE3FF",
        "da-form-input-line": "#CCCCCCFF",
        "da-form-input-line-focus": "#212121FF",
        "da-divider-content-line": "#E0E0E0FF",
        "da-divider-top-content-line": "#D6D6D6FF",
        "da-grid-top-line": "#212121FF",
        "da-grid-tr-line": "#EAEAEAFF",
        "da-grid-header": "#F7F7F7FF",
        "da-grid-odd": "#FAFAFAFF",
        "da-grid-hover": "#EBEBEBFF",
        "da-grid-focus": "#EAFAFFFF",
        "da-grid-edit": "#FFE9A1FF",
        "da-grid-total": "#FEF2E0FF",
      
        // Buttons
        "da-btn-line": "#AAAAAAFF",
        "da-btn-line-focus": "#212121FF",
        "da-btn-disable": "#D6DDEAFF",
        "da-btn-purple": "#687AE6FF",
        "da-btn-purple-hover": "#9DA9F4FF",
        "da-btn-purple-focus": "#2036BEFF",
        "da-btn-gray": "#4E6C84FF",
        "da-btn-gray-hover": "#889BACFF",
        "da-btn-gray-focus": "#123658FF",
        "da-btn-white-hover": "#F8F8F8FF",
        "da-btn-tab-default": "#FFFFFFFF",
      },
      spacing: {
        "da-xsm": "6px",
        "da-sm": "8px",
        "da-md": "24px",
      },
      fontSize: {
        "da-h1": ["32px", { lineHeight: "100%", letterSpacing: "-0.64px" }],
        "da-h2": ["24px", { lineHeight: "150%", letterSpacing: "-0.48px" }],
        "da-h3": ["20px", { lineHeight: "150%", letterSpacing: "-0.4px" }],
        "da-b1": ["18px", { lineHeight: "150%", letterSpacing: "-0.36px" }],
        "da-b2": ["16px", { lineHeight: "150%", letterSpacing: "-0.32px" }],
        "da-b3": ["14px", { lineHeight: "150%", letterSpacing: "-0.28px" }],
        "da-b4": ["12px", { lineHeight: "150%", letterSpacing: "-0.24px" }],
      },
      keyframes: {
        "gradient-flow-btn": {
          "0%": { "background-position": "0% 0%" },
          "100%": { "background-position": "100% 100%" },
        },
      },
      animation: {
        "gradient-flow-btn": "gradient-flow 3s linear infinite",
      },
    }
  },
  plugins: [],
};
