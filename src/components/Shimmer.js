const Shimmer = () => {
  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      {Array(15)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-full h-64 rounded-lg bg-gradient-to-r from-slate-500 to-slate-600 animate-pulse shadow-md"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
