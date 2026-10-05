import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Clock, Droplets, Thermometer, Gauge, Sparkles, Check } from 'lucide-react';
import { BREW_METHODS } from '../data/coffeeData';

export default function BrewRitualGuide({ onSelectBeanBag }) {
  const [selectedMethodId, setSelectedMethodId] = useState('v60');
  const [coffeeGrams, setCoffeeGrams] = useState(18); // default 18g dose
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const method = BREW_METHODS.find(m => m.id === selectedMethodId) || BREW_METHODS[0];

  // Calculated values
  const totalWaterGrams = Math.round(coffeeGrams * method.ratio);
  const bloomWaterGrams = Math.round(coffeeGrams * (method.bloomRatio || 3));

  // Timer interval handling
  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(s => s + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const handleResetTimer = () => {
    setTimerRunning(false);
    setTimerSeconds(0);
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Determine current active step based on timer seconds
  const getCurrentStepIndex = () => {
    if (selectedMethodId === 'v60') {
      if (timerSeconds < 45) return 1; // Bloom
      if (timerSeconds < 90) return 2; // First pour
      if (timerSeconds < 135) return 3; // Second pour
      return 4; // Drawdown
    } else if (selectedMethodId === 'chemex') {
      if (timerSeconds < 45) return 1;
      if (timerSeconds < 120) return 2;
      if (timerSeconds < 180) return 3;
      return 4;
    } else if (selectedMethodId === 'aeropress') {
      if (timerSeconds < 30) return 1;
      if (timerSeconds < 90) return 2;
      return 3;
    } else {
      // French press
      if (timerSeconds < 240) return 1;
      if (timerSeconds < 270) return 2;
      return 3;
    }
  };

  const activeStepIdx = getCurrentStepIndex();

  return (
    <section className="py-16 bg-[#F5EFE8] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#9C6237] mb-2 font-medium">
            Laboratory Precision · Home &amp; Bar Companion
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#241E19]">
            The Pour-Over Ratio &amp; Extraction Timer
          </h2>
          <p className="text-sm text-[#6B5E52] mt-3">
            Dial in brew parameters like a specialty roaster. Calculate exact gram ratios and follow timed pulse pours step-by-step.
          </p>
        </div>

        {/* Method Selector Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {BREW_METHODS.map((m) => {
            const isSelected = selectedMethodId === m.id;
            return (
              <button
                key={m.id}
                onClick={() => {
                  setSelectedMethodId(m.id);
                  handleResetTimer();
                }}
                className={`px-4 py-2.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#241E19] text-[#FBF9F5] shadow-sm font-semibold'
                    : 'bg-white text-[#524436] border border-[#D5C8BC] hover:bg-[#F2ECE4]'
                }`}
              >
                {m.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Dashboard: 2-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Calculator Parameters & Dose Slider */}
          <div className="lg:col-span-6 bg-white border border-[#E8DFC8] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            
            <div className="border-b border-[#F2ECE4] pb-4">
              <h3 className="text-xl font-serif font-medium text-[#241E19]">
                {method.name}
              </h3>
              <p className="text-xs text-[#6B5E52] mt-1 leading-relaxed">
                {method.description}
              </p>
            </div>

            {/* Dose Slider & Presets */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono uppercase tracking-wider text-[#736353] font-medium">
                  Coffee Dose (Whole Bean / Ground)
                </label>
                <span className="font-mono text-lg font-semibold tabular-nums text-[#9C6237]">
                  {coffeeGrams}g
                </span>
              </div>
              <input
                type="range"
                min="12"
                max="45"
                step="1"
                value={coffeeGrams}
                onChange={(e) => setCoffeeGrams(Number(e.target.value))}
                className="w-full h-2 bg-[#EAE3D9] rounded-lg appearance-none cursor-pointer accent-[#241E19]"
              />
              <div className="flex justify-between text-[11px] text-[#8C7A6B] mt-1 font-mono">
                <span>12g (Solo Cup)</span>
                <span>18g (Standard Mug)</span>
                <span>30g (Carafe to Share)</span>
                <span>45g (Max Pot)</span>
              </div>
            </div>

            {/* Dose Quick Presets */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#8A7563] font-mono">Presets:</span>
              {[15, 18, 22, 30].map(grams => (
                <button
                  key={grams}
                  onClick={() => setCoffeeGrams(grams)}
                  className={`px-2.5 py-1 text-xs rounded border font-mono tabular-nums transition-colors cursor-pointer ${
                    coffeeGrams === grams
                      ? 'bg-[#241E19] text-white border-[#241E19]'
                      : 'bg-[#FBF9F5] text-[#524436] border-[#D5C8BC] hover:bg-[#EFE9E0]'
                  }`}
                >
                  {grams}g
                </button>
              ))}
            </div>

            {/* Calculated Extraction Recipe Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-[#FAF7F2] border border-[#EAE3D9] rounded-xl p-3 text-center">
                <Droplets className="w-4 h-4 text-[#9C6237] mx-auto mb-1" />
                <p className="text-[10px] font-mono uppercase text-[#8A7563]">Total Water</p>
                <p className="font-mono text-base font-semibold tabular-nums text-[#241E19]">
                  {totalWaterGrams}g
                </p>
              </div>

              <div className="bg-[#FAF7F2] border border-[#EAE3D9] rounded-xl p-3 text-center">
                <Thermometer className="w-4 h-4 text-[#9C6237] mx-auto mb-1" />
                <p className="text-[10px] font-mono uppercase text-[#8A7563]">Water Temp</p>
                <p className="font-mono text-xs font-semibold tabular-nums text-[#241E19] mt-1">
                  {method.temp}
                </p>
              </div>

              <div className="bg-[#FAF7F2] border border-[#EAE3D9] rounded-xl p-3 text-center">
                <Gauge className="w-4 h-4 text-[#9C6237] mx-auto mb-1" />
                <p className="text-[10px] font-mono uppercase text-[#8A7563]">Grind Size</p>
                <p className="font-mono text-xs font-medium text-[#241E19] mt-1 line-clamp-1" title={method.grind}>
                  {method.grind.split(' ')[0]}
                </p>
              </div>

              <div className="bg-[#FAF7F2] border border-[#EAE3D9] rounded-xl p-3 text-center">
                <Clock className="w-4 h-4 text-[#9C6237] mx-auto mb-1" />
                <p className="text-[10px] font-mono uppercase text-[#8A7563]">Target Time</p>
                <p className="font-mono text-base font-semibold tabular-nums text-[#241E19]">
                  {method.totalTime}
                </p>
              </div>
            </div>

            {/* Bloom Callout */}
            {method.bloomRatio > 0 && (
              <div className="bg-[#F8F3EC] border border-[#E8DCCF] rounded-xl p-3.5 flex items-center justify-between text-xs text-[#5C4533]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#9C6237]" />
                  Bloom Water Target: <strong>{bloomWaterGrams}g</strong> ({method.bloomTime})
                </span>
                <span className="font-mono text-[#8C6D53]">Ratio 1:{method.ratio}</span>
              </div>
            )}

          </div>

          {/* Right Column: Live Brew Stopwatch & Timed Pulse Schedule */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Live Stopwatch Module */}
            <div className="bg-[#241E19] text-[#FBF9F5] border border-[#3D322A] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-md relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,154,108,0.15),transparent_70%)] pointer-events-none" />

              <span className="text-xs font-mono tracking-widest uppercase text-[#D5C0A8] mb-1">
                Precision Extraction Clock
              </span>

              {/* Digital Timer Display */}
              <div className="text-6xl sm:text-7xl font-mono font-medium tracking-tight tabular-nums text-[#FBF9F5] my-2">
                {formatTime(timerSeconds)}
              </div>

              <div className="text-xs text-[#B3A190] mb-6 font-mono">
                {timerRunning ? 'Extraction currently in progress...' : 'Press Start when beginning hot water pour'}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setTimerRunning(!timerRunning)}
                  className={`px-6 py-3 rounded-lg text-xs font-medium tracking-wider uppercase flex items-center gap-2 cursor-pointer transition-colors shadow-sm ${
                    timerRunning
                      ? 'bg-[#A85848] text-white hover:bg-[#8F4435]'
                      : 'bg-[#9C6237] text-white hover:bg-[#85512B]'
                  }`}
                >
                  {timerRunning ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-white" />
                      <span>Start Timer</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleResetTimer}
                  className="px-4 py-3 bg-[#382F27] hover:bg-[#473C32] text-[#D5C8BC] rounded-lg text-xs font-medium uppercase font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Reset timer to 0:00"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>

            </div>

            {/* Pour Steps Guide with Real-Time Highlight */}
            <div className="bg-white border border-[#E8DFC8] rounded-2xl p-6 shadow-xs space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#736353] font-medium pb-2 border-b border-[#F2ECE4]">
                Pulse Pour Schedule &amp; Agitation
              </div>

              <div className="space-y-2.5">
                {method.steps.map((st, idx) => {
                  const isCurrent = timerRunning && activeStepIdx === idx;
                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border text-xs transition-all ${
                        isCurrent
                          ? 'bg-[#F7F0E8] border-[#9C6237] ring-1 ring-[#9C6237]'
                          : 'bg-[#FCFAF7] border-[#EAE3D9]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[11px] ${
                            isCurrent ? 'bg-[#9C6237] text-white' : 'bg-[#EAE3D9] text-[#524436]'
                          }`}>
                            {idx + 1}
                          </span>
                          <span className={`font-semibold ${isCurrent ? 'text-[#9C6237]' : 'text-[#241E19]'}`}>
                            {st.name}
                          </span>
                        </div>
                        <span className="font-mono text-[#8A7563] tabular-nums">
                          {st.time}
                        </span>
                      </div>
                      <p className="text-[#6B5E52] pl-7 leading-relaxed">
                        {st.instruction}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
