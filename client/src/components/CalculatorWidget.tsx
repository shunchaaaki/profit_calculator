import { useState } from "react";
import { Calculator, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

export default function CalculatorWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumClick = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleOperatorClick = (op: string) => {
    if (operator && !waitingForNewValue) {
      calculate();
    } else {
      setPreviousValue(display);
    }
    setOperator(op);
    setWaitingForNewValue(true);
  };

  const calculate = () => {
    if (!operator || !previousValue) return;

    const current = parseFloat(display);
    const prev = parseFloat(previousValue);
    let result = 0;

    switch (operator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
    }

    setDisplay(String(result));
    setPreviousValue(String(result));
    setOperator(null);
    setWaitingForNewValue(true);
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNewValue(false);
  };

  const toggleSign = () => {
    setDisplay(String(parseFloat(display) * -1));
  };

  const handlePercent = () => {
    setDisplay(String(parseFloat(display) / 100));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Card className="w-72 p-5 glass border-none">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-sm text-slate-700 dark:text-slate-300">Kalkulyator</h3>
                <button 
                  className="h-8 w-8 rounded-full flex items-center justify-center neumorph-button text-slate-500 hover:text-slate-800"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="neumorph-inset p-4 rounded-xl mb-6 text-right overflow-hidden break-all min-h-[4rem] flex items-center justify-end">
                <span className="text-3xl font-black text-slate-800 dark:text-slate-200 tracking-tight">{display}</span>
              </div>

              <div className="grid grid-cols-4 gap-3">
                <button className="neumorph-button py-3 text-red-500 font-bold" onClick={handleClear}>C</button>
                <button className="neumorph-button py-3 text-slate-600 font-bold" onClick={toggleSign}>+/-</button>
                <button className="neumorph-button py-3 text-slate-600 font-bold" onClick={handlePercent}>%</button>
                <button className="neumorph-button py-3 text-blue-600 font-bold text-lg" onClick={() => handleOperatorClick("/")}>÷</button>

                <button className="neumorph-button py-3 text-slate-700 font-bold text-lg" onClick={() => handleNumClick("7")}>7</button>
                <button className="neumorph-button py-3 text-slate-700 font-bold text-lg" onClick={() => handleNumClick("8")}>8</button>
                <button className="neumorph-button py-3 text-slate-700 font-bold text-lg" onClick={() => handleNumClick("9")}>9</button>
                <button className="neumorph-button py-3 text-blue-600 font-bold text-lg" onClick={() => handleOperatorClick("*")}>×</button>

                <button className="neumorph-button py-3 text-slate-700 font-bold text-lg" onClick={() => handleNumClick("4")}>4</button>
                <button className="neumorph-button py-3 text-slate-700 font-bold text-lg" onClick={() => handleNumClick("5")}>5</button>
                <button className="neumorph-button py-3 text-slate-700 font-bold text-lg" onClick={() => handleNumClick("6")}>6</button>
                <button className="neumorph-button py-3 text-blue-600 font-bold text-lg" onClick={() => handleOperatorClick("-")}>-</button>

                <button className="neumorph-button py-3 text-slate-700 font-bold text-lg" onClick={() => handleNumClick("1")}>1</button>
                <button className="neumorph-button py-3 text-slate-700 font-bold text-lg" onClick={() => handleNumClick("2")}>2</button>
                <button className="neumorph-button py-3 text-slate-700 font-bold text-lg" onClick={() => handleNumClick("3")}>3</button>
                <button className="neumorph-button py-3 text-blue-600 font-bold text-lg" onClick={() => handleOperatorClick("+")}>+</button>

                <button className="neumorph-button py-3 text-slate-700 font-bold text-lg col-span-2" onClick={() => handleNumClick("0")}>0</button>
                <button className="neumorph-button py-3 text-slate-700 font-bold text-lg" onClick={() => handleNumClick(".")}>.</button>
                <button className="neumorph-button py-3 text-white bg-blue-500 font-bold text-lg" onClick={calculate}>=</button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className={`h-16 w-16 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 ${isOpen ? 'neumorph-inset text-blue-600' : 'neumorph bg-blue-600 text-white shadow-blue-500/50 shadow-lg'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Calculator className="h-7 w-7" />
      </button>
    </div>
  );
}
