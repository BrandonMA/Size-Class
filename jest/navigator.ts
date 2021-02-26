Object.defineProperty(global.window, 'navigator', {
    writable: true,
    value: {
        userAgent: 'Chrome'
    }
});

// // @ts-ignore
// global.window = {
//     // @ts-ignore
//     navigator: {
//         userAgent: 'Chrome'
//     }
// };
