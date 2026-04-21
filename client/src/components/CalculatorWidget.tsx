import { useState } from "react";
import { Calculator, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
            <Card className="w-64 p-4 shadow-xl border-border bg-background">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-sm">Kalkulyator</h3>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="bg-muted p-3 rounded-lg mb-4 text-right overflow-hidden break-all min-h-[3rem] flex items-center justify-end">
                <span className="text-2xl font-medium tracking-tight">{display}</span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <Button variant="secondary" onClick={handleClear}>C</Button>
                <Button variant="secondary" onClick={toggleSign}>+/-</Button>
                <Button variant="secondary" onClick={handlePercent}>%</Button>
                <Button variant="default" onClick={() => handleOperatorClick("/")}>÷</Button>

                <Button variant="outline" onClick={() => handleNumClick("7")}>7</Button>
                <Button variant="outline" onClick={() => handleNumClick("8")}>8</Button>
                <Button variant="outline" onClick={() => handleNumClick("9")}>9</Button>
                <Button variant="default" onClick={() => handleOperatorClick("*")}>×</Button>

                <Button variant="outline" onClick={() => handleNumClick("4")}>4</Button>
                <Button variant="outline" onClick={() => handleNumClick("5")}>5</Button>
                <Button variant="outline" onClick={() => handleNumClick("6")}>6</Button>
                <Button variant="default" onClick={() => handleOperatorClick("-")}>-</Button>

                <Button variant="outline" onClick={() => handleNumClick("1")}>1</Button>
                <Button variant="outline" onClick={() => handleNumClick("2")}>2</Button>
                <Button variant="outline" onClick={() => handleNumClick("3")}>3</Button>
                <Button variant="default" onClick={() => handleOperatorClick("+")}>+</Button>

                <Button variant="outline" className="col-span-2" onClick={() => handleNumClick("0")}>0</Button>
                <Button variant="outline" onClick={() => handleNumClick(".")}>.</Button>
                <Button variant="default" onClick={calculate}>=</Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="icon"
        className={`h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-105 ${isOpen ? 'bg-primary/90' : 'bg-primary'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Calculator className="h-6 w-6" />
      </Button>
    </div>
  );
}
