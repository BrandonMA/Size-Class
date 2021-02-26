Object.defineProperty(global.window, 'addEventListener', {
    writable: true,
    value: jest.fn()
});

Object.defineProperty(global.window, 'removeEventListener', {
    writable: true,
    value: jest.fn()
});
