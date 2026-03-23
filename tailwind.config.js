/**
 * Tailwind CSS Configuration
 * Self-contained — all values inlined for standalone use.
 */

export default {
  content: ['./src/**/*.{astro,html,js,ts,tsx,jsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          '50': '#f9fafa',
          '100': '#f4f5f5',
          '200': '#e4e7e6',
          '300': '#d1d6d4',
          '400': '#9ea8a4',
          '500': '#6c7873',
          '600': '#596461',
          '700': '#3c4441',
          '800': '#242926',
          '900': '#171c1a',
          '950': '#090c0b',
        },
        primary: {
          '50': '#fef3f2',
          '100': '#fde7e6',
          '200': '#fad1d1',
          '300': '#f5adac',
          '400': '#ef7d7e',
          '500': '#e44f54',
          '600': '#bf2a37',
          '700': '#af2131',
          '800': '#931e2f',
          '900': '#7e1d2e',
          '950': '#460b14',
        },
        accent: {
          '50':  '#f0fafa',
          '100': '#d6f0ef',
          '200': '#aee0de',
          '300': '#7dcbca',
          '400': '#4aaeac',
          '500': '#2d9290',
          '600': '#005f5b',
          '700': '#004e4b',
          '800': '#003d3a',
          '900': '#002e2b',
          '950': '#001a18',
        },
        secondary: {
          '600': '#BF6A39',
          '700': '#913d2c',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'scale-in-center': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'slide-in-bottom': {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'slide-in-top': {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'bounce-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)',
          },
          '50%': {
            transform: 'scale(1.05)',
          },
          '70%': {
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'spin-slow': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        'pulse-soft': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.7',
          },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 5px var(--glow-color, currentColor)',
          },
          '50%': {
            boxShadow: '0 0 20px var(--glow-color, currentColor)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
        'count-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'scale-in-center': 'scale-in-center 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slide-in-bottom': 'slide-in-bottom 0.4s ease-out forwards',
        'slide-in-top': 'slide-in-top 0.4s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.4s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.4s ease-out forwards',
        'bounce-in': 'bounce-in 0.6s ease-out forwards',
        'spin-slow': 'spin-slow 3s linear infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'count-up': 'count-up 0.4s ease-out forwards',
      },
      animationDelay: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(0, 0, 0, 0.08)',
        soft: '0 4px 16px -4px rgba(0, 0, 0, 0.1)',
        'soft-md': '0 8px 24px -6px rgba(0, 0, 0, 0.12)',
        'soft-lg': '0 12px 32px -8px rgba(0, 0, 0, 0.14)',
        'soft-xl': '0 20px 48px -12px rgba(0, 0, 0, 0.18)',
        'soft-2xl': '0 32px 64px -16px rgba(0, 0, 0, 0.22)',
        glow: '0 0 20px var(--tw-shadow-color)',
        'glow-sm': '0 0 10px var(--tw-shadow-color)',
        'glow-lg': '0 0 40px var(--tw-shadow-color)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        spring: 'cubic-bezier(0.5, 1.5, 0.5, 1)',
      },
      screens: {
        xs: '475px',
        '3xl': '1920px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
          '2xl': '3rem',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        display: ['ReklameScript', 'serif'],
      },
    },
  },
  plugins: [],
};
