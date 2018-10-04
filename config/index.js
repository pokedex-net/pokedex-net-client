module.exports = {
  name: 'Pokedex.net',
  shortName: 'Pokedex.net',
  brandColor: '#D52A2A',
  defaultLang: 'en',
  noscript: 'You need to enable JavaScript to use Pokedex.net.',
  apiHost: process.env.API_HOST || '//api.pokedex.net/',
  theme: {
    light: {
      statusBar: '#E0E0E0',
      appBar: '#F5F5F5',
      background: '#FAFAFA',
      card: '#FFFFFF',
      textPrimary: 'rgba(0, 0, 0, 0.87)',
      textSecondary: 'rgba(0, 0, 0, 0.54)',
    },
    dark: {
      statusBar: '#000000',
      appBar: '#212121',
      background: '#303030',
      card: '#424242',
      textPrimary: 'rgba(255, 255, 255, 1)',
      textSecondary: 'rgba(255, 255, 255, 0.7)',
    },
    colors: {
      primary: '#4073BF',
      success: '#40BF40',
      info: '#40AEBF',
      warning: '#BFAE40',
      danger: '#BF4040',
    },
  },
};
