/* eslint-disable @typescript-eslint/ban-ts-comment */
import UAParser from 'ua-parser-js';
import { DeviceType } from '../../../src/types/DeviceType';
import { getDefaultDeviceType } from '../../../src/util/getDefaultDeviceType';
import canUseDOM from '../../../src/util/canUseDom';

jest.mock('ua-parser-js');
jest.mock('../../../src/util/canUseDom');

describe('getDefaultDeviceType when there is no dom', () => {
    beforeAll(() => {
        // @ts-ignore
        canUseDOM.mockImplementationOnce(() => false);
    });

    it('returns DeviceType.DESKTOP', () => {
        expect(getDefaultDeviceType()).toBe(DeviceType.DESKTOP);
    });
});

describe('getDefaultDeviceType for mobile', () => {
    beforeAll(() => {
        // @ts-ignore
        canUseDOM.mockImplementationOnce(() => true);

        UAParser.mockImplementationOnce(() => {
            return {
                getResult: () => {
                    return {
                        device: {
                            type: 'mobile'
                        }
                    };
                }
            };
        });
    });

    it('returns DeviceType.PHONE for mobile', () => {
        expect(getDefaultDeviceType()).toBe(DeviceType.PHONE);
    });
});

describe('getDefaultDeviceType for tablet', () => {
    beforeAll(() => {
        // @ts-ignore
        canUseDOM.mockImplementationOnce(() => true);

        UAParser.mockImplementationOnce(() => {
            return {
                getResult: () => {
                    return {
                        device: {
                            type: 'tablet'
                        }
                    };
                }
            };
        });
    });

    it('returns DeviceType.TABLET for tablet', () => {
        expect(getDefaultDeviceType()).toBe(DeviceType.TABLET);
    });
});

describe('getDefaultDeviceType for smarttv', () => {
    beforeAll(() => {
        // @ts-ignore
        canUseDOM.mockImplementationOnce(() => true);

        UAParser.mockImplementationOnce(() => {
            return {
                getResult: () => {
                    return {
                        device: {
                            type: 'smarttv'
                        }
                    };
                }
            };
        });
    });

    it('returns DeviceType.TV for smarttv', () => {
        expect(getDefaultDeviceType()).toBe(DeviceType.TV);
    });
});

describe('getDefaultDeviceType for anything else', () => {
    beforeAll(() => {
        // @ts-ignore
        canUseDOM.mockImplementationOnce(() => true);

        UAParser.mockImplementationOnce(() => {
            return {
                getResult: () => {
                    return {
                        device: {
                            type: 'console'
                        }
                    };
                }
            };
        });
    });

    it('returns DeviceType.UNKNOWN for anything else', () => {
        expect(getDefaultDeviceType()).toBe(DeviceType.UNKNOWN);
    });
});
