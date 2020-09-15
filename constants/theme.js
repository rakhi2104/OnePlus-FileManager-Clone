const palette = {
  red: "#f50714",
  black: "#000",
  white: "#faf9fb",
};

const POSTER_SIZES = {
  regular: {
    width: 420,
    height: 626,
  },
};

const sizes = {
  xs: 16,
  sm: 18,
  md: 24,
  lg: 28,
  xl: 36,
  xxl: 42,
};

const theme = {
  colors: {
    primary: palette.red,
    secondary: palette.black,
    white: palette.white,
    black: palette.black,
    error: palette.red,
  },
  Text: {
    style: {
      color: palette.white,
    },
    h1Style: {
      fontSize: sizes.xl,
      color: palette.white,
    },
    h2Style: {
      fontSize: sizes.lg,
      color: palette.white,
    },
    h3Style: {
      fontSize: sizes.md,
      color: palette.white,
    },
    h4Style: {
      fontSize: sizes.sm,
      color: palette.white,
    },
  },
};

export { palette, sizes, theme, POSTER_SIZES };
