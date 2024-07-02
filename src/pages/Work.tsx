// Define the type for the experience data
interface ExperienceData {
  period: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
}

// Define the experience data
const experienceData: ExperienceData[] = [
  {
    period: "10.2023 -",
    company: "Asociatia Oportunitati si Cariere",
    position:
      "Frontend developer | JavaScript, React, Next.JS, TailwindCSS, SCSS, Redux",
    startDate: "2023-10",
  },
  {
    period: "2022 - 2022",
    company: "Endava",
    position: "Frontend developer | React, Material UI, Axios",
    startDate: "2022-08",
    endDate: "2022-11",
  },
];

// Function to calculate the difference in months between two dates
function calculateExperience(
  startDate: string,
  endDate: string = new Date().toISOString()
): number {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();

  return years * 12 + months;
}

// Function to calculate total experience
function getTotalExperience(experiences: ExperienceData[]): {
  years: number;
  months: number;
} {
  let totalMonths = 0;

  experiences.forEach((exp) => {
    const endDate = exp.endDate ? exp.endDate : new Date().toISOString();
    totalMonths += calculateExperience(exp.startDate, endDate);
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months };
}
const Work = () => {
  const totalExperience = getTotalExperience(experienceData);

  return (
    <div className="my-5 mb-40">
      <h1 className="text-5xl md:text-6xl text-end font-firaCode mb-8 border-b border-b-grayLight">
        Work Experience
      </h1>
      <div className="flex flex-wrap font-firaCode  text-xl gap-5">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap flex-col md:flex-row  gap-5 w-full items-center py-5 rounded-xl border border-grayLight text-textWhite hover:text-backgroundBlack hover:bg-textWhite duration-300 group"
          >
            <div className="flex flex-col text-grayLight font-openSans mx-5 text-lg group-hover:text-backgroundBlack ">
              <p>{item.period}</p>
              <span>
                {calculateExperience(
                  item.startDate,
                  item.endDate ? item.endDate : undefined
                )}{" "}
                months
              </span>
            </div>

            <div className="flex flex-col gap-5 items-center flex-1 text-center text-balance">
              <p>{item.company}</p>
              <p>{item.position}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-end mt-8 text-xl font-openSans">
        <p className="text-grayLight">Work experience</p>

        <p className="italic text-textWhite">
          {totalExperience.years >= 1
            ? `${totalExperience.years} years and ${totalExperience.months} months`
            : `${totalExperience.months} months`}
        </p>
      </div>
    </div>
  );
};

export default Work;
