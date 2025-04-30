import { Currency } from '../models/Search.model';

class NumberUtils {
  /**
   * @param amount
   * @returns Example: $2.350,50
   */
  static getCurrency(amount: number, currency: Currency, maximumFractionDigits?: number): string {
    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: maximumFractionDigits ? maximumFractionDigits : 0
    });
    return formatter.format(amount);
  }
}

export default NumberUtils;
