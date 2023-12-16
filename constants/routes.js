const ROUTES = [
    {
        url: '/free',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5,
        },
        proxy: {
            target: 'https://www.google.com',
            changeOrigin: true,
            pathRewrite: {
                [`^/free`]: '',
            },
        },
    },
    {
        url: '/repairers',
        auth: true,
        creditCheck: true,
        proxy: {
            target: 'http://localhost:16010',
            changeOrigin: true,
            // pathRewrite: {
            //     [`^/repairers/`]: '',
            // },
        },
    }
];

module.exports = {
    ROUTES
};
