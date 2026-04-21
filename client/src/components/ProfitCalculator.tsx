/**
 * Sof Foyda Kalkulyatori Komponenti
 * Neomorfizm + Soft Minimalism dizayn
 * Real-time hisoblash va yumshoq animatsiyalar
 */

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Percent, Target, Receipt, Box, PercentSquare, Truck, Banknote, Megaphone } from "lucide-react";
import { SliderWithTooltip } from "@/components/SliderWithTooltip";
import {
  calculateProfit,
  formatCurrency,
  formatPercent,
  type CalculatorInputs,
  type CalculatorResults,
} from "@/lib/calculator";

export default function ProfitCalculator() {
  // Kiritish maydonlari
  const [inputs, setInputs] = useState<CalculatorInputs>({
    costPrice: 50000,
    packagingCost: 5000,
    sellingPrice: 150000,
    discountPercent: 10,
    commissionPercent: 8,
    logisticsCost: 20000,
    transactionPercent: 2,
    taxPercent: 5,
    advertisingType: 'percent',
    advertisingPercent: 3,
    advertisingCost: 0,
  });

  // Natijalar
  const [results, setResults] = useState<CalculatorResults>(
    calculateProfit(inputs)
  );

  // Real-time hisoblash
  useEffect(() => {
    setResults(calculateProfit(inputs));
  }, [inputs]);

  // Input maydonini o'zgartirish
  const handleInputChange = (field: keyof CalculatorInputs, value: number | string) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Slider o'zgarishi
  const handleSliderChange = (field: keyof CalculatorInputs, value: number[]) => {
    handleInputChange(field, value[0]);
  };

  // Profitni tekshirish
  const isProfitable = results.netProfit > 0;

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 lg:p-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha */}
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-3 tracking-tight">
            Universal Sof Foyda Kalkulyatori
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
            Uzum, Yandex Market va boshqa marketpleyslar uchun
          </p>
          <p className="text-sm text-slate-500">
            Real-time hisoblash bilan sotish rentabelligi tahlili
          </p>
        </div>

        {/* Asosiy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Input Qismi */}
          <div className="space-y-4">
            <div className="sticky top-8">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
                <div className="p-2 neumorph rounded-full mr-3">
                  <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                Kiritish Maydonlari
              </h2>

              <div className="space-y-5">
                {/* Tovar Tannarxi */}
                <Card className="p-5 neumorph border-none">
                  <div className="flex justify-between items-center mb-4">
                    <Label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Box className="w-4 h-4 text-blue-500" /> Tovar Tannarxi
                    </Label>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 px-3 py-1 neumorph-inset rounded-full">
                      {formatCurrency(inputs.costPrice)}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={inputs.costPrice}
                    onChange={(e) =>
                      handleInputChange("costPrice", parseFloat(e.target.value) || 0)
                    }
                    className="mb-2 text-base font-semibold"
                    placeholder="0"
                  />
                  <SliderWithTooltip
                    value={[inputs.costPrice]}
                    onValueChange={(value) =>
                      handleSliderChange("costPrice", value)
                    }
                    min={0}
                    max={500000}
                    step={1000}
                    formatValue={formatCurrency}
                    className="w-full"
                  />
                </Card>

                {/* Qadoqlash Xarajati */}
                <Card className="p-5 neumorph border-none">
                  <div className="flex justify-between items-center mb-4">
                    <Label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Box className="w-4 h-4 text-slate-500" /> Qadoqlash va Mayda Xarajatlar
                    </Label>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400 px-3 py-1 neumorph-inset rounded-full">
                      {formatCurrency(inputs.packagingCost)}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={inputs.packagingCost}
                    onChange={(e) =>
                      handleInputChange("packagingCost", parseFloat(e.target.value) || 0)
                    }
                    className="mb-2 text-base font-semibold"
                    placeholder="0"
                  />
                  <SliderWithTooltip
                    value={[inputs.packagingCost]}
                    onValueChange={(value) =>
                      handleSliderChange("packagingCost", value)
                    }
                    min={0}
                    max={100000}
                    step={500}
                    formatValue={formatCurrency}
                    className="w-full"
                  />
                </Card>

                {/* Sotish Narxi */}
                <Card className="p-5 neumorph border-none">
                  <div className="flex justify-between items-center mb-4">
                    <Label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Banknote className="w-4 h-4 text-green-500" /> Sotish Narxi
                    </Label>
                    <span className="text-xs font-bold text-green-600 dark:text-green-400 px-3 py-1 neumorph-inset rounded-full">
                      {formatCurrency(inputs.sellingPrice)}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={inputs.sellingPrice}
                    onChange={(e) =>
                      handleInputChange("sellingPrice", parseFloat(e.target.value) || 0)
                    }
                    className="mb-2 text-base font-semibold"
                    placeholder="0"
                  />
                  <SliderWithTooltip
                    value={[inputs.sellingPrice]}
                    onValueChange={(value) =>
                      handleSliderChange("sellingPrice", value)
                    }
                    min={0}
                    max={1000000}
                    step={5000}
                    formatValue={formatCurrency}
                    className="w-full"
                  />
                </Card>

                {/* Chegirma Foizi */}
                <Card className="p-5 neumorph border-none">
                  <div className="flex justify-between items-center mb-4">
                    <Label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <PercentSquare className="w-4 h-4 text-orange-500" /> Aksiya / Chegirma
                    </Label>
                    <span className="text-xs font-bold text-orange-600 dark:text-orange-400 px-3 py-1 neumorph-inset rounded-full">
                      {formatPercent(inputs.discountPercent)}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={inputs.discountPercent}
                    onChange={(e) =>
                      handleInputChange("discountPercent", parseFloat(e.target.value) || 0)
                    }
                    className="mb-2 text-base font-semibold"
                    placeholder="0"
                    min="0"
                    max="100"
                  />
                  <SliderWithTooltip
                    value={[inputs.discountPercent]}
                    onValueChange={(value) =>
                      handleSliderChange("discountPercent", value)
                    }
                    min={0}
                    max={100}
                    step={1}
                    formatValue={formatPercent}
                    className="w-full"
                  />
                </Card>

                {/* Komissiya Foizi */}
                <Card className="p-5 neumorph border-none">
                  <div className="flex justify-between items-center mb-4">
                    <Label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Percent className="w-4 h-4 text-red-500" /> Komissiya (%)
                    </Label>
                    <span className="text-xs font-bold text-red-600 dark:text-red-400 px-3 py-1 neumorph-inset rounded-full">
                      {formatPercent(inputs.commissionPercent)}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={inputs.commissionPercent}
                    onChange={(e) =>
                      handleInputChange("commissionPercent", parseFloat(e.target.value) || 0)
                    }
                    className="mb-2 text-base font-semibold"
                    placeholder="0"
                    min="0"
                    max="100"
                  />
                  <SliderWithTooltip
                    value={[inputs.commissionPercent]}
                    onValueChange={(value) =>
                      handleSliderChange("commissionPercent", value)
                    }
                    min={0}
                    max={50}
                    step={0.5}
                    formatValue={formatPercent}
                    className="w-full"
                  />
                </Card>

                {/* Logistika Xarajati */}
                <Card className="p-5 neumorph border-none">
                  <div className="flex justify-between items-center mb-4">
                    <Label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Truck className="w-4 h-4 text-purple-500" /> Logistika Xarajati
                    </Label>
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400 px-3 py-1 neumorph-inset rounded-full">
                      {formatCurrency(inputs.logisticsCost)}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={inputs.logisticsCost}
                    onChange={(e) =>
                      handleInputChange("logisticsCost", parseFloat(e.target.value) || 0)
                    }
                    className="mb-2 text-base font-semibold"
                    placeholder="0"
                  />
                  <SliderWithTooltip
                    value={[inputs.logisticsCost]}
                    onValueChange={(value) =>
                      handleSliderChange("logisticsCost", value)
                    }
                    min={0}
                    max={200000}
                    step={1000}
                    formatValue={formatCurrency}
                    className="w-full"
                  />
                </Card>

                {/* Tranzaksiya Foizi */}
                <Card className="p-5 neumorph border-none">
                  <div className="flex justify-between items-center mb-4">
                    <Label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Banknote className="w-4 h-4 text-indigo-500" /> Tranzaksiya Foizi
                    </Label>
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 px-3 py-1 neumorph-inset rounded-full">
                      {formatPercent(inputs.transactionPercent)}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={inputs.transactionPercent}
                    onChange={(e) =>
                      handleInputChange("transactionPercent", parseFloat(e.target.value) || 0)
                    }
                    className="mb-2 text-base font-semibold"
                    placeholder="0"
                    min="0"
                    max="100"
                  />
                  <SliderWithTooltip
                    value={[inputs.transactionPercent]}
                    onValueChange={(value) =>
                      handleSliderChange("transactionPercent", value)
                    }
                    min={0}
                    max={10}
                    step={0.1}
                    formatValue={formatPercent}
                    className="w-full"
                  />
                </Card>

                {/* Soliq Foizi */}
                <Card className="p-5 neumorph border-none">
                  <div className="flex justify-between items-center mb-4">
                    <Label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Receipt className="w-4 h-4 text-cyan-500" /> Soliq (%)
                    </Label>
                    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 px-3 py-1 neumorph-inset rounded-full">
                      {formatPercent(inputs.taxPercent)}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={inputs.taxPercent}
                    onChange={(e) =>
                      handleInputChange("taxPercent", parseFloat(e.target.value) || 0)
                    }
                    className="mb-2 text-base font-semibold"
                    placeholder="0"
                    min="0"
                    max="100"
                  />
                  <SliderWithTooltip
                    value={[inputs.taxPercent]}
                    onValueChange={(value) =>
                      handleSliderChange("taxPercent", value)
                    }
                    min={0}
                    max={20}
                    step={0.5}
                    formatValue={formatPercent}
                    className="w-full"
                  />
                </Card>

                {/* Reklama Xizmati */}
                <Card className="p-5 neumorph border-none relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-amber-400 opacity-50"></div>
                  <div className="flex justify-between items-center mb-4 mt-1">
                    <Label className="text-sm font-semibold flex items-center gap-2 text-amber-600 dark:text-amber-400">
                      <Megaphone className="w-4 h-4" /> Reklama Xizmati
                    </Label>
                    <button
                      onClick={() =>
                        handleInputChange(
                          "advertisingType",
                          inputs.advertisingType === "percent" ? "fixed" : "percent"
                        )
                      }
                      className={`text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-md active:scale-95 ${
                        inputs.advertisingType === "percent"
                          ? "bg-blue-600 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {inputs.advertisingType === "percent" ? "Foiz (%)" : "Aniq Narx"}
                    </button>
                  </div>
                  {inputs.advertisingType === "percent" ? (
                    <>
                      <Input
                        type="number"
                        value={inputs.advertisingPercent}
                        onChange={(e) =>
                          handleInputChange(
                            "advertisingPercent",
                            parseFloat(e.target.value) || 0
                          )
                        }
                        className="mb-2 text-base font-semibold"
                        placeholder="0"
                        min="0"
                        max="100"
                      />
                      <SliderWithTooltip
                        value={[inputs.advertisingPercent]}
                        onValueChange={(value) =>
                          handleSliderChange("advertisingPercent", value)
                        }
                        min={0}
                        max={50}
                        step={0.5}
                        formatValue={formatPercent}
                        className="w-full"
                      />
                    </>
                  ) : (
                    <>
                      <Input
                        type="number"
                        value={inputs.advertisingCost}
                        onChange={(e) =>
                          handleInputChange(
                            "advertisingCost",
                            parseFloat(e.target.value) || 0
                          )
                        }
                        className="mb-2 text-base font-semibold"
                        placeholder="0"
                        min="0"
                      />
                      <SliderWithTooltip
                        value={[inputs.advertisingCost]}
                        onValueChange={(value) =>
                          handleSliderChange("advertisingCost", value)
                        }
                        min={0}
                        max={100000}
                        step={1000}
                        formatValue={formatCurrency}
                        className="w-full"
                      />
                    </>
                  )}
                </Card>
              </div>
            </div>
          </div>

          {/* Natija Qismi */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
              <div className="p-2 neumorph rounded-full mr-3">
                <Percent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              Hisoblash Natijalari
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Aksiyadagi Sotuv Narxi */}
              <Card className="p-6 neumorph border-none sm:col-span-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-5">
                  <Banknote className="w-32 h-32" />
                </div>
                <div className="flex flex-col gap-1 relative z-10">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Aksiyadagi Sotuv Narxi
                  </p>
                  <p className="text-3xl md:text-4xl font-black text-blue-600 dark:text-blue-400">
                    {formatCurrency(results.discountedPrice)}
                  </p>
                </div>
              </Card>

              {/* Jami Xarajatlar */}
              <Card className="p-6 neumorph border-none">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Jami Xarajatlar
                </p>
                <p className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300">
                  {formatCurrency(results.totalExpenses)}
                </p>
              </Card>

              {/* Marketpleys Ushlab Qoladigan Summa */}
              <Card className="p-6 neumorph border-none">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Marketpleys Ulushi
                </p>
                <p className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300">
                  {formatCurrency(results.marketplaceShare)}
                </p>
              </Card>

              {/* Reklama Xizmati */}
              <Card className="p-6 neumorph border-none sm:col-span-2">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Megaphone className="w-4 h-4 text-amber-500" /> Reklama Xizmati
                </p>
                <p className="text-2xl md:text-3xl font-bold text-amber-600 dark:text-amber-400">
                  {formatCurrency(results.advertisingAmount)}
                </p>
              </Card>

              {/* Nolga Chiqish Nuqtasi */}
              <Card className="p-6 neumorph border-none sm:col-span-2 relative overflow-hidden">
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-10">
                  <Target className="w-24 h-24 text-orange-600" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-orange-500" />
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Nolga Chiqish Nuqtasi (Break-even)
                    </p>
                  </div>
                  <p className="text-3xl md:text-4xl font-black text-orange-500">
                    {formatCurrency(results.breakEven)}
                  </p>
                </div>
              </Card>

              {/* Sof Foyda - Asosiy Natija */}
              <Card
                className={`p-8 sm:col-span-2 neumorph border-none relative overflow-hidden transition-colors duration-500 ${
                  isProfitable ? "ring-2 ring-green-400/50 shadow-[0_0_15px_rgba(34,197,94,0.15)] dark:shadow-[0_0_15px_rgba(34,197,94,0.05)]" : "ring-2 ring-red-400/50 shadow-[0_0_15px_rgba(239,68,68,0.15)] dark:shadow-[0_0_15px_rgba(239,68,68,0.05)]"
                }`}
              >
                <div 
                  className="absolute top-0 right-0 w-48 h-48 transform translate-x-10 -translate-y-10 rounded-full opacity-20 pointer-events-none"
                  style={{ background: isProfitable ? 'radial-gradient(circle, rgba(34,197,94,0.8) 0%, rgba(34,197,94,0) 70%)' : 'radial-gradient(circle, rgba(239,68,68,0.8) 0%, rgba(239,68,68,0) 70%)' }}
                ></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                      <Banknote className="w-5 h-5" /> Sof Foyda
                    </p>
                    <div className={`p-3 rounded-xl ${isProfitable ? "bg-green-100 text-green-600 dark:bg-green-900/30" : "bg-red-100 text-red-600 dark:bg-red-900/30"}`}>
                      {isProfitable ? (
                        <TrendingUp className="w-8 h-8" />
                      ) : (
                        <TrendingDown className="w-8 h-8" />
                      )}
                    </div>
                  </div>
                  <p
                    className={`text-5xl md:text-6xl font-black tracking-tight mb-2 ${
                      isProfitable ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"
                    }`}
                  >
                    {formatCurrency(results.netProfit)}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${isProfitable ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300'}`}>
                      {isProfitable
                        ? "✓ Sotish rentabel"
                        : "✗ Sotish zarar qiladi"}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Marja */}
              <Card className="p-6 neumorph border-none">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Marja (%)
                </p>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {formatPercent(results.marginPercent)}
                </p>
                <p className="text-xs text-slate-400 mt-2 font-medium">
                  Sof foydaning sotuv narxidagi ulushi
                </p>
              </Card>

              {/* ROI */}
              <Card className="p-6 neumorph border-none">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  ROI (%)
                </p>
                <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  {formatPercent(results.roiPercent)}
                </p>
                <p className="text-xs text-slate-400 mt-2 font-medium">
                  Sarmoya qoplaish rentabelligi
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pb-8 text-center">
          <div className="inline-block p-4 rounded-2xl glass">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
              💡 Maslahat: Sliderlardan yoki kiritish maydonlaridan foydalanib parametrlarni o'zgartirganda, natijalar real-time yangilaniadi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
