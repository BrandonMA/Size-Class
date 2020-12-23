import { isDesktop } from '../../../src/util/isDesktop';

describe('isDesktop', () => {
    it('returns true for anything else', () => {
        expect(isDesktop()).toBeTruthy();
    });
});
