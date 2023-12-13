const DevPalette = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 sm:px-1 px-4 text-black text-xs font-mono">
      <div className="flex flex-row text-primary text-center">
        <div className="w-4 h-4 bg-primary"></div>
        <div className="w-4 h-4 bg-secondary"></div>
        <div className="w-4 h-4 bg-third"></div>
        <div className="w-4 h-4 bg-accent"></div>
      </div>
    </div>
  );
};

export default DevPalette;
