const dark = {
  background: {
    first: '#191919',
    second: '#262626',
    third: '#333333',
  },
  color: {
    brand: '#177ddc',
    main: '#177ddc',
    hover: '#1866af',
    active: '#3c9be8',

    // Neutral - text
    title: 'rgba(255, 255, 255, 0.85)',
    primary: 'rgba(255, 255, 255, 0.85)',
    secondary: 'rgba(255, 255, 255, 0.45)',
    disable: 'rgba(255, 255, 255, 0.30)',
    border: 'rgba(255, 255, 255, 0.20)',
    divider: 'rgba(255, 255, 255, 0.12)',
    // background: 'rgba(255, 255, 255, 0.08)',
    tableHeader: 'rgba(255, 255, 255, 0.04)',
  },
};

export type ThemeType = typeof dark;
export default dark;
