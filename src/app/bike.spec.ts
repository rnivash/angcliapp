import { Bike } from './bike';

describe('Bike', () => {
  it('should create an instance', () => {
    expect(new Bike(1, "", "")).toBeTruthy();
  });
});
