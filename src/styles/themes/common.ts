// common theme preset
const common = {
  breakpoints: ['40em', '52em', '64em'],
  fonts: {
    body: 'Open Sans, system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: {
    10: '10px',
    12: '12px',
    14: '14px',
    heading: '22px'
  },
  borderRadius: [0, '10px'],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  space: [0, '5px', '10px', '15px', '20px', '30px'],
  sizes: {
    avatar: 48
  },
  radii: {
    default: 4,
    circle: 99999
  },
  shadows: {
    cardLight: '0px 0px 50px #0000000d',
    menuLight: '0px 3px 20px #0000001A',
    overlay: '0px 8px 15px #00000014',
    cardImgLight: '0px 0px 50px #00000012',
    cardCategoryLight: '0px 0px 50px #0000000D'
  },
  transition: {
    default: '0.5s ease-in-out'
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 700,
      fontSize: '22px'
    },
    title: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 700,
      fontSize: '14px'
    },
    subTitle: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 700,
      fontSize: '10px'
    },
    details: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 700,
      fontSize: '12px'
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle'
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card'
    },
    link: {
      color: 'primary'
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary'
      }
    }
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default'
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px'
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }
  }
}

export default common
