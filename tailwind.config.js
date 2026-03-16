/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Text
        "da-t-title": "var(--da-color-t-title)",
        "da-t-body": "var(--da-color-t-body)",
        "da-t-discription": "var(--da-color-t-discription)",
        "da-t-placeholder": "var(--da-color-t-placeholder)",
        "da-t-disabled": "var(--da-color-t-disabled)",
        "da-t-inverse": "var(--da-color-t-inverse)",
        "da-t-primary": "var(--da-color-t-primary)",
        "da-t-primary-deep": "var(--da-color-t-primary-deep)",
        "da-t-link": "var(--da-color-t-link)",
        "da-t-link-hover": "var(--da-color-t-link-hover)",
        "da-t-positive": "var(--da-color-t-positive)",
        "da-t-attention": "var(--da-color-t-attention)",
      
        // Brand & Identity
        "da-lg-red1": "var(--da-color-lg-red1)",
        "da-lg-red2": "var(--da-color-lg-red2)",
        "da-lg-red3": "var(--da-color-lg-red3)",
        "da-primary": "var(--da-color-primary)",
        "da-white": "var(--da-color-white)",
        "da-black": "var(--da-color-black)",
      
        // Icons
        "da-icon-gray": "var(--da-color-icon-gray)",
        "da-icon-gray-state": "var(--da-color-icon-gray-state)",
        "da-icon-gray-hover": "var(--da-color-icon-gray-hover)",
        "da-icon-gray-disable": "var(--da-color-icon-gray-disable)",
      
        // Backgrounds
        "da-bg1": "var(--da-color-bg1)",
        "da-bg2": "var(--da-color-bg2)",
        "da-bg3": "var(--da-color-bg3)",
        "da-bg3-deep": "var(--da-color-bg3-deep)",
        "da-bg4": "var(--da-color-bg4)",
        "da-bg5": "var(--da-color-bg5)",
      
        // Form & Divider & Grid
        "da-form-read-dis-bg": "var(--da-color-form-read-dis-bg)",
        "da-form-essen-bg": "var(--da-color-form-essen-bg)",
        "da-form-input-line": "var(--da-color-form-input-line)",
        "da-form-input-line-focus": "var(--da-color-form-input-line-focus)",
        "da-divider-content-line": "var(--da-color-divider-content-line)",
        "da-divider-top-content-line": "var(--da-color-divider-top-content-line)",
        "da-grid-top-line": "var(--da-color-grid-top-line)",
        "da-grid-tr-line": "var(--da-color-grid-tr-line)",
        "da-grid-header": "var(--da-color-grid-header)",
        "da-grid-odd": "var(--da-color-grid-odd)",
        "da-grid-hover": "var(--da-color-grid-hover)",
        "da-grid-focus": "var(--da-color-grid-focus)",
        "da-grid-edit": "var(--da-color-grid-edit)",
        "da-grid-total": "var(--da-color-grid-total)",
      
        // Buttons
        "da-btn-line": "var(--da-color-btn-line)",
        "da-btn-line-focus": "var(--da-color-btn-line-focus)",
        "da-btn-disable": "var(--da-color-btn-disable)",
        "da-btn-purple": "var(--da-color-btn-purple)",
        "da-btn-purple-hover": "var(--da-color-btn-purple-hover)",
        "da-btn-purple-focus": "var(--da-color-btn-purple-focus)",
        "da-btn-gray": "var(--da-color-btn-gray)",
        "da-btn-gray-hover": "var(--da-color-btn-gray-hover)",
        "da-btn-gray-focus": "var(--da-color-btn-gray-focus)",
        "da-btn-white-hover": "var(--da-color-btn-white-hover)",
        "da-btn-tab-default": "var(--da-color-btn-tab-default)",

        // Animation gradient
        "da-ani-1": "var(--da-color-ani-1)",
        "da-ani-2": "var(--da-color-ani-2)",
        "da-ani-3": "var(--da-color-ani-3)",
      },
      spacing: {
        "da-space-xxsm": "var(--da-space-xxsm)",
        "da-space-xsm": "var(--da-space-xsm)",
        "da-space-sm": "var(--da-space-sm)",
        "da-space-md-s": "var--da-space-md-s)",
        "da-space-md": "var(--da-space-md)",
        "da-space-lg": "var(--da-space-lg)",
        "da-space-xlg": "var(--da-space-xlg)"
      },
      fontSize: {
        "da-h1": ["var(--da-fs-h1)", { lineHeight: "var(--da-lh-h1)", letterSpacing: "var(--da-ls-h1)" }],
        "da-h2": ["var(--da-fs-h2)", { lineHeight: "var(--da-lh-h2)", letterSpacing: "var(--da-ls-h2)" }],
        "da-h3": ["var(--da-fs-h3)", { lineHeight: "var(--da-lh-h3)", letterSpacing: "var(--da-ls-h3)" }],
        "da-b1": ["var(--da-fs-b1)", { lineHeight: "var(--da-lh-b1)", letterSpacing: "var(--da-ls-b1)" }],
        "da-b2": ["var(--da-fs-b2)", { lineHeight: "var(--da-lh-b2)", letterSpacing: "var(--da-ls-b2)" }],
        "da-b3": ["var(--da-fs-b3)", { lineHeight: "var(--da-lh-b3)", letterSpacing: "var(--da-ls-b3)" }],
        "da-b4": ["var(--da-fs-b4)", { lineHeight: "var(--da-lh-b4)", letterSpacing: "var(--da-ls-b4)" }],
      },
      keyframes: {
        "gradient-flow-btn": {
          "0%": { "background-position": "0% 0%" },
          "100%": { "background-position": "100% 100%" },
        },
      },
      animation: {
        "gradient-flow-btn": "gradient-flow-btn 3s linear infinite",
      },
      boxShadow: {
        "da-input-text": "0 2px 2px 0 rgba(0, 0, 0, 0.05)",
        "da-question-box": "1px 1px 10px 10px rgba(0, 0, 0, 0.10);",
        "da-answer-box" : "1px_2px_14px_14px_rgba(84,0,202,0.20);",
        "da-box": "1px 1px 3px 3px rgba(0, 0, 0, 0.10);",
      },
    }
  },
  plugins: [],
};