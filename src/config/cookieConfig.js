// cookieConfig.js

// Default base configuration
const config = {
    expires: 7, // Default expires
    path: '/', // Default path
    domain: process.env.VUE_APP_COOKIE_DOMAIN,
    secure: process.env.VUE_APP_COOKIE_SECURE === 'true', // Convert string to boolean
    sameSite: 'Lax' // Default SameSite policy
};

if (process.env.NODE_ENV === 'production') {
    config.sameSite = 'Strict'; // Use strict mode in production for extra security
}

export default config;
