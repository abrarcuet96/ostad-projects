const StatsCard = ({ statsNumber, statsDescription }) => {
  return (
    <div className="flex flex-col gap-2 text-left border px-3 py-1 rounded-md bg-pink-100 border-pink-200">
      <h1 className="text-3xl font-bold">{statsNumber}</h1>
      <p>{statsDescription}</p>
    </div>
  );
};

export default StatsCard;
