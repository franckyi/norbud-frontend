const projects = {
  label: "Realizacje",
  classes:
    "w-36 h-36 p-12 flex flex-col justify-between items-center bg-green-700",
};
const regions = {
  count: "22",
  label: "Powiatów",
  classes:
    "w-36 h-36 p-12 flex flex-col justify-between items-center bg-green-700",
};

type NumbersProps = {
  worksCount: number;
};

function Numbers({ worksCount }: NumbersProps) {
  return (
    <div className="flex gap-4">
      <div className={projects.classes}>
        <div className="text-6xl">{worksCount}</div>
        <span className="text-base font-light">{projects.label}</span>
      </div>
      <div className={regions.classes}>
        <div className="text-6xl">{regions.count}</div>
        <span className="text-base font-light">{regions.label}</span>
      </div>
    </div>
  );
}

export default Numbers;
