const DevPalette = () => {
  return (
    <div className="bg-[#808080] absolute bottom-0 left-0 z-50 p-1 text-black text-xs font-mono">
      <div className="flex flex-col text-primary text-center">
        <div className="w-4 h-4 bg-primary">P</div>
        <div className="w-4 h-4 bg-secondary">S</div>
        <div className="w-4 h-4 bg-third">T</div>
        <div className="w-4 h-4 bg-accent">F</div>
      </div>
    </div>
  );
};

export default DevPalette;
