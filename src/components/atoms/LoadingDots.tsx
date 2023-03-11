function LoadingDots() {
  return (
    <div className="flex items-center justify-center gap-1">
      <div className="w-2 h-2 rounded-full bg-slate-400 animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_0s_infinite]" />
      <div className="w-2 h-2 rounded-full bg-slate-400 animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_0.5s_infinite] " />
      <div className="w-2 h-2 rounded-full bg-slate-400 animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_1s_infinite]" />
    </div>
  );
}

export default LoadingDots;
