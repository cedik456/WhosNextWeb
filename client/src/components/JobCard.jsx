const JobCard = ({
  jobTitle,
  company,
  companyLogo,
  location,
  type,
  salary,
  description,
  onApply,
  isVerified,
  bgColor = "bg-gray-100",
}) => {
  return (
    <div
      className={`${bgColor} rounded-xl p-5 w-full max-w-sm shadow-sm mr-10`}
    >
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2>{jobTitle}</h2>
          <div>
            {company}
            {isVerified && <span className=""></span>}
          </div>
        </div>
      </div>
      <img src={companyLogo} className="w-1- h-10 rounded" />

      <p className="text-sm text-gray-700 mb-4 line-clamp-2">{description}</p>

      <div className="flex items-center text-sm text-gray-600 mb-4 gap-4">
        <div className="flex items-center gap-1">📍 {location}</div>
        <div className="flex items-center gap-1">💼 {type}</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-800">
          ${salary}K <span className="text-sm font-normal">Monthly</span>
        </div>
        <button
          onClick={onApply}
          className="border border-black px-4 py-1 rounded-full hover:bg-black hover:text-white transition"
        ></button>
      </div>
    </div>
  );
};

export default JobCard;
