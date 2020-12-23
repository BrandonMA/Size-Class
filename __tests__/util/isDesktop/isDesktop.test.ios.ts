import { isDesktop } from '../../../src/util/isDesktop';

describe('isDesktop', () => {
    it('returns false for ios', () => {
        expect(isDesktop()).toBeFalsy();
    });
});
