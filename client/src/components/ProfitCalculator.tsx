/**
 * Sof Foyda Kalkulyatori Komponenti
 * Neomorfizm + Soft Minimalism dizayn
 * Real-time hisoblash va yumshoq animatsiyalar
 */

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Percent, Target } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha */}
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Universal Sof Foyda Kalkulyatori
          </h1>
          <p className="text-lg text-slate-600 mb-2">
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
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <DollarSign className="w-6 h-6 mr-2 text-blue-600" />
                Kiritish Maydonlari
              </h2>

              <div className="space-y-4">
                {/* Tovar Tannarxi */}
                <Card className="p-5 shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-slate-100">
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-sm font-semibold text-slate-700">
                      Tovar Tannarxi
                    </Label>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {formatCurrency(inputs.costPrice)}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={inputs.costPrice}
                    onChange={(e) =>
                      handleInputChange("costPrice", parseFloat(e.target.value) || 0)
                    }
                    className="mb-3 text-base font-semibold"
                    placeholder="0"
                  />
                  <Slider
                    value={[inputs.costPrice]}
                    onValueChange={(value) =>
                      handleSliderChange("costPrice", value)
                    }
                    min={0}
                    max={500000}
                    step={10000}
                    className="w-full"
                  />
                </Card>

                {/* Qadoqlash Xarajati */}
                <Card className="p-5 shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-slate-100">
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-sm font-semibold text-slate-700">
                      Qadoqlash va Mayda Xarajatlar
                    </Label>
                    <span className="text-xs font-medium text-slate-600 bg-slate-50 px-2 py-1 rounded-full">
                      {formatCurrency(inputs.packagingCost)}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={inputs.packagingCost}
                    onChange={(e) =>
                      handleInputChange("packagingCost", parseFloat(e.target.value) || 0)
                    }
                    className="mb-3 text-base font-semibold"
                    placeholder="0"
                  />
                  <Slider
                    value={[inputs.packagingCost]}
                    onValueChange={(value) =>
                      handleSliderChange("packagingCost", value)
                    }
                    min={0}
                    max={100000}
                    step={1000}
                    className="w-full"
                  />
                </Card>

                {/* Sotish Narxi */}
                <Card className="p-5 shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-slate-100">
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-sm font-semibold text-slate-700">
                      Sotish Narxi
                    </Label>
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {formatCurrency(inputs.sellingPrice)}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={inputs.sellingPrice}
                    onChange={(e) =>
                      handleInputChange("sellingPrice", parseFloat(e.target.value) || 0)
                    }
                    className="mb-3 text-base font-semibold"
                    placeholder="0"
                  />
                  <Slider
                    value={[inputs.sellingPrice]}
                    onValueChange={(value) =>
                      handleSliderChange("sellingPrice", value)
                    }
                    min={0}
                    max={1000000}
                    step={10000}
                    className="w-full"
                  />
                </Card>

                {/* Chegirma Foizi */}
                <Card className="p-5 shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-slate-100">
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-sm font-semibold text-slate-700">
                      Aksiya / Chegirma
                    </Label>
                    <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                      {formatPercent(inputs.discountPercent)}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={inputs.discountPercent}
                    onChange={(e) =>
                      handleInputChange("discountPercent", parseFloat(e.target.value) || 0)
                    }
                    className="mb-3 text-base font-semibold"
                    placeholder="0"
                    min="0"
                    max="100"
                  />
                  <Slider
                    value={[inputs.discountPercent]}
                    onValueChange={(value) =>
                      handleSliderChange("discountPercent", value)
                    }
                    min={0}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </Card>

                {/* Komissiya Foizi */}
                <Card className="p-5 shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-slate-100">
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-sm font-semibold text-slate-700">
                      Komissiya (%)
                    </Label>
                    <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                      {formatPercent(inputs.commissionPercent)}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={inputs.commissionPercent}
                    onChange={(e) =>
                      handleInputChange("commissionPercent", parseFloat(e.target.value) || 0)
                    }
                    className="mb-3 text-base font-semibold"
                    placeholder="0"
                    min="0"
                    max="100"
                  />
                  <Slider
                    value={[inputs.commissionPercent]}
                    onValueChange={(value) =>
                      handleSliderChange("commissionPercent", value)
                    }
                    min={0}
                    max={50}
                    step={0.5}
                    className="w-full"
                  />
                </Card>

                {/* Logistika Xarajati */}
                <Card className="p-5 shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-slate-100">
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-sm font-semibold text-slate-700">
                      Logistika Xarajati
                    </Label>
                    <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                      {formatCurrency(inputs.logisticsCost)}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={inputs.logisticsCost}
                    onChange={(e) =>
                      handleInputChange("logisticsCost", parseFloat(e.target.value) || 0)
                    }
                    className="mb-3 text-base font-semibold"
                    placeholder="0"
                  />
                  <Slider
                    value={[inputs.logisticsCost]}
                    onValueChange={(value) =>
                      handleSliderChange("logisticsCost", value)
                    }
                    min={0}
                    max={200000}
                    step={5000}
                    className="w-full"
                  />
                </Card>

                {/* Tranzaksiya Foizi */}
                <Card className="p-5 shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-slate-100">
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-sm font-semibold text-slate-700">
                      Tranzaksiya Foizi
                    </Label>
                    <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                      {formatPercent(inputs.transactionPercent)}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={inputs.transactionPercent}
                    onChange={(e) =>
                      handleInputChange("transactionPercent", parseFloat(e.target.value) || 0)
                    }
                    className="mb-3 text-base font-semibold"
                    placeholder="0"
                    min="0"
                    max="100"
                  />
                  <Slider
                    value={[inputs.transactionPercent]}
                    onValueChange={(value) =>
                      handleSliderChange("transactionPercent", value)
                    }
                    min={0}
                    max={10}
                    step={0.1}
                    className="w-full"
                  />
                </Card>

                {/* Soliq Foizi */}
                <Card className="p-5 shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-slate-100">
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-sm font-semibold text-slate-700">
                      Soliq (%)
                    </Label>
                    <span className="text-xs font-medium text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full">
                      {formatPercent(inputs.taxPercent)}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={inputs.taxPercent}
                    onChange={(e) =>
                      handleInputChange("taxPercent", parseFloat(e.target.value) || 0)
                    }
                    className="mb-3 text-base font-semibold"
                    placeholder="0"
                    min="0"
                    max="100"
                  />
                  <Slider
                    value={[inputs.taxPercent]}
                    onValueChange={(value) =>
                      handleSliderChange("taxPercent", value)
                    }
                    min={0}
                    max={20}
                    step={0.5}
                    className="w-full"
                  />
                </Card>

                {/* Reklama Xizmati */}
                <Card className="p-5 shadow-lg hover:shadow-xl transition-all duration-300 bg-amber-50 border border-amber-200">
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-sm font-semibold text-amber-900">
                      Reklama Xizmati
                    </Label>
                    <button
                      onClick={() =>
                        handleInputChange(
                          "advertisingType",
                          inputs.advertisingType === "percent" ? "fixed" : "percent"
                        )
                      }
                      className={`text-xs font-bold px-3 py-1 rounded-full transition-colors ${
                        inputs.advertisingType === "percent"
                          ? "bg-blue-600 text-white"
                          : "bg-red-600 text-white"
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
                        className="mb-3 text-base font-semibold"
                        placeholder="0"
                        min="0"
                        max="100"
                      />
                      <Slider
                        value={[inputs.advertisingPercent]}
                        onValueChange={(value) =>
                          handleSliderChange("advertisingPercent", value)
                        }
                        min={0}
                        max={50}
                        step={0.5}
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
                        className="mb-3 text-base font-semibold"
                        placeholder="0"
                        min="0"
                      />
                      <Slider
                        value={[inputs.advertisingCost]}
                        onValueChange={(value) =>
                          handleSliderChange("advertisingCost", value)
                        }
                        min={0}
                        max={100000}
                        step={1000}
                        className="w-full"
                      />
                    </>
                  )}
                </Card>
              </div>
            </div>
          </div>

          {/* Natija Qismi */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Percent className="w-6 h-6 mr-2 text-blue-600" />
              Hisoblash Natijalari
            </h2>

            <div className="space-y-4">
              {/* Aksiyadagi Sotuv Narxi */}
              <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                <p className="text-sm font-semibold text-slate-600 mb-2">
                  Aksiyadagi Sotuv Narxi
                </p>
                <p className="text-3xl md:text-4xl font-bold text-blue-700">
                  {formatCurrency(results.discountedPrice)}
                </p>
              </Card>

              {/* Reklama Xizmati */}
              <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200">
                <p className="text-sm font-semibold text-slate-600 mb-2">
                  Reklama Xizmati
                </p>
                <p className="text-3xl md:text-4xl font-bold text-amber-700">
                  {formatCurrency(results.advertisingAmount)}
                </p>
              </Card>

              {/* Jami Xarajatlar */}
              <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
                <p className="text-sm font-semibold text-slate-600 mb-2">
                  Jami Xarajatlar
                </p>
                <p className="text-3xl md:text-4xl font-bold text-slate-700">
                  {formatCurrency(results.totalExpenses)}
                </p>
              </Card>

              {/* Marketpleys Ushlab Qoladigan Summa */}
              <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
                <p className="text-sm font-semibold text-slate-600 mb-2">
                  Marketpleys Ushlab Qoladigan Summa
                </p>
                <p className="text-3xl md:text-4xl font-bold text-slate-700">
                  {formatCurrency(results.marketplaceShare)}
                </p>
              </Card>

              {/* Nolga Chiqish Nuqtasi */}
              <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-slate-600">
                    Nolga Chiqish Nuqtasi (Break-even)
                  </p>
                  <Target className="w-4 h-4 text-orange-600" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-orange-700">
                  {formatCurrency(results.breakEven)}
                </p>
              </Card>

              {/* Sof Foyda - Asosiy Natija */}
              <Card
                className={`p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  isProfitable
                    ? "bg-gradient-to-br from-green-50 to-green-100 border-green-300"
                    : "bg-gradient-to-br from-red-50 to-red-100 border-red-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-slate-600">
                    Sof Foyda
                  </p>
                  {isProfitable ? (
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-600" />
                  )}
                </div>
                <p
                  className={`text-4xl md:text-5xl font-bold ${
                    isProfitable ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {formatCurrency(results.netProfit)}
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  {isProfitable
                    ? "✓ Sotish rentabel"
                    : "✗ Sotish zarar qiladi"}
                </p>
              </Card>

              {/* Marja */}
              <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                <p className="text-sm font-semibold text-slate-600 mb-2">
                  Marja (%)
                </p>
                <p className="text-3xl md:text-4xl font-bold text-purple-700">
                  {formatPercent(results.marginPercent)}
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  Sof foydaning sotuv narxidagi ulushi
                </p>
              </Card>

              {/* ROI */}
              <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200">
                <p className="text-sm font-semibold text-slate-600 mb-2">
                  ROI (%)
                </p>
                <p className="text-3xl md:text-4xl font-bold text-indigo-700">
                  {formatPercent(results.roiPercent)}
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  Sarmoya qoplaish rentabelligi
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500">
            💡 Maslahat: Sliderlardan yoki input maydonlaridan foydalanib parametrlarni o'zgartirganda, natijalar real-time yangilaniadi.
          </p>
        </div>
      </div>
    </div>
  );
}
