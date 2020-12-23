import { isDesktop } from '../../../src/util/isDesktop';

describe('isDesktop', () => {
    it('returns false for android', () => {
        expect(isDesktop()).toBeFalsy();
    });
});
