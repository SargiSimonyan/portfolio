module.exports = {
  theme: {
    extend: {
      keyframes: {
        zoomSlow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        zoomSlow: 'zoomSlow 20s ease-in-out infinite alternate',
      },
    },
  },
};
