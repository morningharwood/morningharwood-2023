/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  // purge: {
  //   content: [
  //     './pages/**/*.{js,ts,jsx,tsx}',
  //     './components/**/*.{js,ts,jsx,tsx}',
  //   ],
  // },
  theme: {
    letterSpacing: {
      tightest: '-0.25em',
      'widest': '.1em',
    },
    colors: {
      primary: {
        hover: 'var(--primary-400)',
        default: 'var(--primary-500)',
        active: 'var(--primary-600)',
        focus: 'var(--primary-700)',
        selected: {
          hover: 'var(--primary-500)',
          default: 'var--primary-600)',
          active: 'var(--primary-700)',
          focus: 'var(--primary-800)',
        },
      },
      secondary: {
        hover: 'var(--secondary-400)',
        default: 'var(--secondary-500)',
        active: 'var(--secondary-600)',
        focus: 'var(--secondary-700)',
        selected: {
          hover: 'var(--secondary-500)',
          default: 'var--secondary-600)',
          active: 'var(--secondary-700)',
          focus: 'var(--secondary-800)',
        },
      },
      tertiary: {
        hover: 'var(--tertiary-400)',
        default: 'var(--tertiary-500)',
        active: 'var(--tertiary-600)',
        focus: 'var(--tertiary-700)',
        selected: {
          hover: 'var(--tertiary-500)',
          default: 'var--tertiary-600)',
          active: 'var(--tertiary-700)',
          focus: 'var(--tertiary-800)',
        },
      },
      accentA: {
        hover: 'var(--accentA-400)',
        default: 'var(--accentA-500)',
        active: 'var(--accentA-600)',
        focus: 'var(--accentA-700)',
        selected: {
          hover: 'var(--accentA-500)',
          default: 'var--accentA-600)',
          active: 'var(--accentA-700)',
          focus: 'var(--accentA-800)',
        },
      },
      accentB: {
        hover: 'var(--accentB-400)',
        default: 'var(--accentB-500)',
        active: 'var(--accentB-600)',
        focus: 'var(--accentB-700)',
        selected: {
          hover: 'var(--accentB-500)',
          default: 'var--accentB-600)',
          active: 'var(--accentB-700)',
          focus: 'var(--accentB-800)',
        },
      },
      on: {
        primary: {
          hover: 'var(--secondary-400)',
          default: 'var(--secondary-500)',
          active: 'var(--secondary-600)',
          focus: 'var(--secondary-700)',
          selected: {
            hover: 'var(--secondary-500)',
            default: 'var--secondary-600)',
            active: 'var(--secondary-700)',
            focus: 'var(--secondary-800)',
          },
        },
        secondary: {
          hover: 'var(--primary-400)',
          default: 'var(--primary-500)',
          active: 'var(--primary-600)',
          focus: 'var(--primary-700)',
          selected: {
            hover: 'var(--primary-500)',
            default: 'var--primary-600)',
            active: 'var(--primary-700)',
            focus: 'var(--primary-800)',
          },
        },
        tertiary: {
          hover: 'var(--primary-400)',
          default: 'var(--primary-500)',
          active: 'var(--primary-600)',
          focus: 'var(--primary-700)',
          selected: {
            hover: 'var(--primary-500)',
            default: 'var--primary-600)',
            active: 'var(--primary-700)',
            focus: 'var(--primary-800)',
          },
        },
        accentA: {
          hover: 'var(--primary-400)',
          default: 'var(--primary-500)',
          active: 'var(--primary-600)',
          focus: 'var(--primary-700)',
          selected: {
            hover: 'var(--primary-500)',
            default: 'var--primary-600)',
            active: 'var(--primary-700)',
            focus: 'var(--primary-800)',
          },
        },
        accentB: {
          hover: 'var(--primary-400)',
          default: 'var(--primary-500)',
          active: 'var(--primary-600)',
          focus: 'var(--primary-700)',
          selected: {
            hover: 'var(--primary-500)',
            default: 'var--primary-600)',
            active: 'var(--primary-700)',
            focus: 'var(--primary-800)',
          },
        },
      },
    },
    extend: {
      fontSize: {
        xxs: ".625em"
      },
      maxWidth: {
        '1/3': '33.3333vw',
        '1/2': '50vw',
        '1/4': '25vw',
      },
      maxHeight: {
        '1/3': '33.3333vh',
        '1/2': '50vh',
        '1/4': '25vh',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
        display: 'var(--font-display)',
        mono: 'var(--font-mono)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
};
