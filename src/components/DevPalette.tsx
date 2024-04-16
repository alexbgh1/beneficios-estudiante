const DevPalette = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 px-4 font-mono text-xs text-black sm:px-1">
      <div className="flex flex-row text-center text-primary">
        <div className="w-4 h-4 bg-primary"></div>
        <div className="w-4 h-4 bg-secondary"></div>
        <div className="w-4 h-4 bg-card"></div>
        <div className="w-4 h-4 bg-accent"></div>
      </div>
    </div>
  );
};

export default DevPalette;
