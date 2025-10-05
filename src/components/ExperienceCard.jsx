const ExperienceCard = ({ experience }) => {
  const { title, company, description, time } = experience;
  return (
    <div className="flex flex-col border border-pink-300 p-2 gap-2 rounded-md bg-pink-200">
      <h1 className="text-xl font-bold text-pink-600">{title}</h1>
      <p className="text-lg font-medium">{company}</p>
      <p className="text-sm">{description}</p>
      <div className="flex justify-end">
        <p className="border px-2 py-1 rounded-md border-pink-300 bg-pink-100 w-fit font-semibold">
          {time}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
