export const environment = {
  production: true,
  apiUrl: 'https://cesargrachik-api.herokuapp.com',
  tokenWhitelistedDomains: [ new RegExp('cesargrachik-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
  };
