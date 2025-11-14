import { PriceWithTaxPipe } from './price-with-tax.pipe';

describe('PriceWithTaxPipe', () => {
  it('create an instance', () => {
    const pipe = new PriceWithTaxPipe();
    expect(pipe).toBeTruthy();
  });
});
