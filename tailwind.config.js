const pxToRem = (px, base = 16) => `${px / base}rem`
const defaultTheme = require('tailwindcss/defaultTheme')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  content: [
    './src-static/**/*.html',
    './wordpress/themes/edgeempower/**/*.{php,html}', 
    'src-assets/js/**/*.js',
    'safelist.txt'
  ],
  theme: {
    screens: {
      mini: '375px',
      xs:   '480px',
      sm:   '768px',
      md:   '992px',
      lg:   '1200px',
      xl:   '1500px',
      xxl:  '1900px'
    },
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        'brand':        '#6d6d6d',
        'brand-alt':    '#00bfb3',
        'base-txt':     '#222222',
        'header':       '#000000',
      },
      // typography: (theme) => ({
      //   DEFAULT: {
      //     css: [
      //       {
      //         // https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
      //         '--tw-prose-body': theme('colors.base-txt'),
      //         '--tw-prose-headings': theme('colors.header'),
      //         '--tw-prose-links': theme('colors.brand'),
      //         '--tw-prose-bold': theme('colors.base-txt'),
      //         color: theme('colors.base-txt'),
      //         fontSize: rem(16),
      //         lineHeight: round(28 / 16),
      //         a: {
      //           color: theme('colors.brand'),
      //           '&:hover': {
      //             color: theme('colors.brand'),
      //           },
      //         },
      //         p: {
      //           marginTop: em(20, 16),
      //           marginBottom: em(20, 16),
      //         },
      //         '[class~="lead"]': {
      //           fontSize: em(20, 16),
      //           lineHeight: round(32 / 20),
      //           marginTop: em(24, 20),
      //           marginBottom: em(24, 20),
      //         },
      //         blockquote: {
      //           marginTop: em(32, 20),
      //           marginBottom: em(32, 20),
      //           paddingLeft: em(20, 20),
      //         },
      //         h1: {
      //           fontSize: em(36, 16),
      //           marginTop: '0',
      //           marginBottom: em(32, 36),
      //           lineHeight: round(40 / 36),
      //         },
      //         h2: {
      //           fontSize: em(24, 16),
      //           marginTop: em(54, 24),
      //           marginBottom: em(24, 24),
      //           lineHeight: round(32 / 24),
      //         },
      //         h3: {
      //           fontSize: em(20, 16),
      //           marginTop: em(42, 20),
      //           marginBottom: em(12, 20),
      //           lineHeight: round(32 / 20),
      //         },
      //         h4: {
      //           marginTop: em(36, 16),
      //           marginBottom: em(8, 16),
      //           lineHeight: round(24 / 16),
      //         },
      //         img: {
      //           marginTop: em(32, 16),
      //           marginBottom: em(32, 16),
      //         },
      //         video: {
      //           marginTop: em(32, 16),
      //           marginBottom: em(32, 16),
      //         },
      //         figure: {
      //           marginTop: em(32, 16),
      //           marginBottom: em(32, 16),
      //         },
      //         'figure > *': {
      //           marginTop: '0',
      //           marginBottom: '0',
      //         },
      //         figcaption: {
      //           fontSize: em(14, 16),
      //           lineHeight: round(20 / 14),
      //           marginTop: em(12, 14),
      //         },
      //         code: {
      //           fontSize: em(14, 16),
      //         },
      //         'h2 code': {
      //           fontSize: em(21, 24),
      //         },
      //         'h3 code': {
      //           fontSize: em(18, 20),
      //         },
      //         pre: {
      //           fontSize: em(14, 16),
      //           lineHeight: round(24 / 14),
      //           marginTop: em(24, 14),
      //           marginBottom: em(24, 14),
      //           borderRadius: rem(6),
      //           paddingTop: em(12, 14),
      //           paddingRight: em(16, 14),
      //           paddingBottom: em(12, 14),
      //           paddingLeft: em(16, 14),
      //         },
      //         ol: {
      //           marginTop: em(20, 16),
      //           marginBottom: em(20, 16),
      //         },
      //         ul: {
      //           marginTop: em(20, 16),
      //           marginBottom: em(20, 16),
      //         },
      //         li: {
      //           marginTop: em(8, 16),
      //           marginBottom: em(8, 16),
      //         },
      //         ol: {
      //           paddingLeft: em(26, 16),
      //         },
      //         'ol > li': {
      //           paddingLeft: em(6, 16),
      //         },
      //         ul: {
      //           paddingLeft: em(26, 16),
      //         },
      //         'ul > li': {
      //           paddingLeft: em(6, 16),
      //         },
      //         '> ul > li p': {
      //           marginTop: em(12, 16),
      //           marginBottom: em(12, 16),
      //         },
      //         '> ul > li > *:first-child': {
      //           marginTop: em(20, 16),
      //         },
      //         '> ul > li > *:last-child': {
      //           marginBottom: em(20, 16),
      //         },
      //         '> ol > li > *:first-child': {
      //           marginTop: em(20, 16),
      //         },
      //         '> ol > li > *:last-child': {
      //           marginBottom: em(20, 16),
      //         },
      //         'ul ul, ul ol, ol ul, ol ol': {
      //           marginTop: em(12, 16),
      //           marginBottom: em(12, 16),
      //         },
      //         hr: {
      //           marginTop: em(48, 16),
      //           marginBottom: em(48, 16),
      //         },
      //         'hr + *': {
      //           marginTop: '0',
      //         },
      //         'h2 + *': {
      //           marginTop: '0',
      //         },
      //         'h3 + *': {
      //           marginTop: '0',
      //         },
      //         'h4 + *': {
      //           marginTop: '0',
      //         },
      //         table: {
      //           fontSize: em(14, 16),
      //           lineHeight: round(24 / 14),
      //         },
      //         'thead th': {
      //           paddingRight: em(8, 14),
      //           paddingBottom: em(8, 14),
      //           paddingLeft: em(8, 14),
      //         },
      //         'thead th:first-child': {
      //           paddingLeft: '0',
      //         },
      //         'thead th:last-child': {
      //           paddingRight: '0',
      //         },
      //         'tbody td': {
      //           paddingTop: em(8, 14),
      //           paddingRight: em(8, 14),
      //           paddingBottom: em(8, 14),
      //           paddingLeft: em(8, 14),
      //         },
      //         'tbody td:first-child': {
      //           paddingLeft: '0',
      //         },
      //         'tbody td:last-child': {
      //           paddingRight: '0',
      //         },
      //       },
      //       {
      //         '> :first-child': {
      //           marginTop: '0',
      //         },
      //         '> :last-child': {
      //           marginBottom: '0',
      //         },
      //       },
      //     ],
      //   },
      // }),
      maxWidth: {
        'content': pxToRem(1170),
        'content-narrow': pxToRem(800),
        'content-wide': pxToRem(1400),
        'mobile-menu-smallest': pxToRem(260),
        'mobile-menu-mini': pxToRem(305),
        'mobile-menu-xs': pxToRem(380),
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      spacing: {
        '1': pxToRem(4),
        '2': pxToRem(8),
        '3': pxToRem(12),
        '4': pxToRem(16),
        '5': pxToRem(20),
        '6': pxToRem(24),
        '7': pxToRem(28),
        '8': pxToRem(32),
        '9': pxToRem(36),
        '10': pxToRem(40),
        '11': pxToRem(44),
        '12': pxToRem(48),
        '13': pxToRem(52),
        '14': pxToRem(56),
        '15': pxToRem(60),
        '16': pxToRem(64),
        '17': pxToRem(68),
        '18': pxToRem(72),
        '19': pxToRem(76),
        '20': pxToRem(80),
        '21': pxToRem(84),
        '22': pxToRem(88),
        '23': pxToRem(92),
        '24': pxToRem(96),
        '25': pxToRem(100),
        '26': pxToRem(104),
        '27': pxToRem(108),
        '28': pxToRem(112),
        '29': pxToRem(116),
        '30': pxToRem(120),
        '31': pxToRem(124),
        '32': pxToRem(128),
        '33': pxToRem(132),
        '34': pxToRem(136),
        '35': pxToRem(140),
        '36': pxToRem(144),
        '37': pxToRem(148),
        '38': pxToRem(152),
        '39': pxToRem(156),
        '40': pxToRem(160),
        '41': pxToRem(164),
        '42': pxToRem(168),
        '43': pxToRem(172),
        '44': pxToRem(176),
        '45': pxToRem(180),
        '46': pxToRem(184),
        '47': pxToRem(188),
        '48': pxToRem(192),
        '63': pxToRem(252),
        '64': pxToRem(256),
        '215': pxToRem(215),
        '225': pxToRem(225),
        'default-gap': '1.875rem',
        'button': '3.125rem',
        'default-typography-margin': '1em'
      },
      fontSize: {
        '12': pxToRem(12),
        '13': pxToRem(13),
        '14': pxToRem(14),
        '15': pxToRem(15),
        '16': pxToRem(16),
        '17': pxToRem(17),
        '18': pxToRem(18),
        '19': pxToRem(19),
        '20': pxToRem(20),
        '21': pxToRem(21),
        '22': pxToRem(22),
        '23': pxToRem(23),
        '24': pxToRem(24),
        '25': pxToRem(25),
        '26': pxToRem(26),
        '27': pxToRem(27),
        '28': pxToRem(28),
        '29': pxToRem(29),
        '30': pxToRem(30),
        '31': pxToRem(31),
        '32': pxToRem(32),
        '33': pxToRem(33),
        '34': pxToRem(34),
        '35': pxToRem(35),
        '36': pxToRem(36),
        '37': pxToRem(37),
        '38': pxToRem(38),
        '39': pxToRem(39),
        '40': pxToRem(40),
      },
      width: {
        '1/24' : '4.166666667%',
        '2/24' : '8.333333333',
        '3/24' : '12.5%',
        '4/24' : '16.66666667%',
        '5/24' : '20.83333333%',
        '6/24' : '25%',
        '7/24' : '29.16666667%',
        '8/24' : '33.33333333%',
        '9/24' : '37.5%',
        '10/24' : '41.66666667%',
        '11/24' : '45.83333333%',
        '12/24' : '50%',
        '13/24' : '54.16666667%',
        '14/24' : '58.33333333%',
        '15/24' : '62.5%',
        '16/24' : '66.66666667%',
        '17/24' : '70.83333333%',
        '18/24' : '75%',
        '19/24' : '79.16666667%',
        '20/24' : '83.33333333%',
        '21/24' : '87.5%',
        '22/24' : '91.66666667%',
        '23/24' : '95.83333333%',
        '24/24' : '100%',
      },
      borderWidth: {
        'dev-gap': '100px', 
      },
      lineHeight: {
        '1': '1',
        '1.05': '1.05',
        '1.1': '1.1',
        '1.15': '1.15',
        '1.2': '1.2',
        '1.25': '1.25',
        '1.3': '1.3',
        '1.35': '1.35',
        '1.4': '1.4',
        '1.45': '1.45',
        '1.5': '1.5',
        '1.55': '1.55',
        '1.6': '1.6',
        '1.65': '1.65',
        '1.7': '1.7',
        '1.75': '1.75',
        '1.8': '1.8',
        '1.85': '1.85',
        '1.9': '1.9',
        '1.95': '1.95',
        '2': '2'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
