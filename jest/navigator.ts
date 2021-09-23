Object.defineProperty(global.window, 'navigator', {
    writable: true,
    value: {
        userAgent: 'Chrome'
    }
});
