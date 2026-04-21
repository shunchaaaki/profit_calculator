import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { motion, AnimatePresence } from "framer-motion";

interface SliderWithTooltipProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  min: number;
  max: number;
  step: number;
  formatValue?: (value: number) => string;
  className?: string;
}

export function SliderWithTooltip({
  value,
  onValueChange,
  min,
  max,
  step,
  formatValue = (val) => val.toString(),
  className,
}: SliderWithTooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  // Calculate percentage to position tooltip
  const percentage = ((value[0] - min) / (max - min)) * 100;

  return (
    <div
      className={`relative pt-6 pb-2 ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onTouchStart={() => setShowTooltip(true)}
      onTouchEnd={() => setTimeout(() => setShowTooltip(false), 1000)}
    >
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full pointer-events-none"
          >
            <div
              className="absolute -top-1 origin-bottom transform -translate-x-1/2 flex flex-col items-center"
              style={{ left: `${percentage}%` }}
            >
              <div className="bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg whitespace-nowrap z-50">
                {formatValue(value[0])}
              </div>
              <div className="w-2 h-2 bg-slate-800 rotate-45 -mt-1 rounded-sm z-40"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Slider
        value={value}
        onValueChange={(val) => {
          setShowTooltip(true);
          onValueChange(val);
        }}
        min={min}
        max={max}
        step={step}
        className="cursor-pointer py-2" // Added py-2 for larger hit area on mobile
      />
    </div>
  );
}
