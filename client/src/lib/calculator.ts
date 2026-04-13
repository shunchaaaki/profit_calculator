/**
 * Sof Foyda Kalkulyatori - Hisoblash Mantiqи
 * Marketpleys sotuvchilari uchun barcha zarur ko'rsatkichlarni hisoblaydi
 */

export interface CalculatorInputs {
  costPrice: number; // Tovar tannarxi (so'mda)
  packagingCost: number; // Qadoqlash va boshqa mayda xarajatlar (so'mda)
  sellingPrice: number; // Tovar sotish narxi (so'mda)
  discountPercent: number; // Aksiya / Chegirma foizi (%)
  commissionPercent: number; // Marketpleys komissiyasi (%)
  logisticsCost: number; // Logistika xarajati (so'mda)
  transactionPercent: number; // Bank / Tranzaksiya foizi (%)
  taxPercent: number; // Soliq (%)
  advertisingType: 'percent' | 'fixed'; // Reklama xizmati turi
  advertisingPercent: number; // Reklama xizmati foizi (%)
  advertisingCost: number; // Reklama xizmati narxi (so'mda)
}

export interface CalculatorResults {
  discountedPrice: number; // Aksiyadagi sotuv narxi
  advertisingAmount: number; // Reklama xizmati miqdori
  totalExpenses: number; // Jami xarajatlar
  marketplaceShare: number; // Marketpleys ushlab qoladigan summa
  breakEven: number; // Nolga chiqish nuqtasi
  netProfit: number; // Sof Foyda
  marginPercent: number; // Marja (%)
  roiPercent: number; // ROI (%)
}

export function calculateProfit(inputs: CalculatorInputs): CalculatorResults {
  // 1. Aksiyadagi sotuv narxi (Discount applied price)
  const discountedPrice = inputs.sellingPrice * (1 - inputs.discountPercent / 100);

  // 2. Marketpleys komissiyasi (Commission amount)
  const commissionAmount = discountedPrice * (inputs.commissionPercent / 100);

  // 3. Bank / Tranzaksiya foizi (Transaction fee)
  const transactionAmount = discountedPrice * (inputs.transactionPercent / 100);

  // 4. Soliq (Tax amount)
  const taxAmount = discountedPrice * (inputs.taxPercent / 100);

  // 5. Reklama xizmati (Advertising cost)
  const advertisingAmount =
    inputs.advertisingType === 'percent'
      ? discountedPrice * (inputs.advertisingPercent / 100)
      : inputs.advertisingCost;

  // 6. Jami xarajatlar (Total expenses)
  // Tannarx + Qadoqlash + Logistika + Komissiya + Tranzaksiya + Soliq + Reklama
  const totalExpenses =
    inputs.costPrice +
    inputs.packagingCost +
    inputs.logisticsCost +
    commissionAmount +
    transactionAmount +
    taxAmount +
    advertisingAmount;

  // 6. Sof Foyda (Net Profit)
  const netProfit = discountedPrice - totalExpenses;

  // 7. Nolga chiqish nuqtasi (Break-even point)
  // Eng minimal sotuv narxi zarar qilmaslik uchun
  const breakEven = inputs.costPrice + inputs.packagingCost + inputs.logisticsCost;

  // 8. Marja (%) - Sof foydaning sotuv narxidagi ulushi
  const marginPercent = discountedPrice > 0 ? (netProfit / discountedPrice) * 100 : 0;

  // 9. ROI (%) - Sarmoya qoplaish rentabelligi
  const totalInvestment = inputs.costPrice + inputs.packagingCost + inputs.logisticsCost;
  const roiPercent = totalInvestment > 0 ? (netProfit / totalInvestment) * 100 : 0;

  // 10. Marketpleys ushlab qoladigan summa (Commission + Logistics share)
  const marketplaceShare = commissionAmount + inputs.logisticsCost;

  return {
    discountedPrice: Math.round(discountedPrice * 100) / 100,
    advertisingAmount: Math.round(advertisingAmount * 100) / 100,
    totalExpenses: Math.round(totalExpenses * 100) / 100,
    marketplaceShare: Math.round(marketplaceShare * 100) / 100,
    breakEven: Math.round(breakEven * 100) / 100,
    netProfit: Math.round(netProfit * 100) / 100,
    marginPercent: Math.round(marginPercent * 100) / 100,
    roiPercent: Math.round(roiPercent * 100) / 100,
  };
}

/**
 * Raqamni so'mda formatlash (Uzbek currency format)
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("uz-UZ", {
    style: "currency",
    currency: "UZS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Foizni formatlash
 */
export function formatPercent(value: number): string {
  return `${Math.round(value * 100) / 100}%`;
}
