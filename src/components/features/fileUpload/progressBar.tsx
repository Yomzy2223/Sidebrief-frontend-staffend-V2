interface ProgressBarProps {
  percent: number;
}

export const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <div className="space-y-2">
      <div className="flex flex-col items-start w-full gap-2">
        <div className="w-full h-3 rounded-2xl bg-grey">
          <div
            className="h-3 rounded-2xl bg-secondary"
            style={{ width: `${percent > 100 ? 100 : percent}%` }}
          />
        </div>
      </div>
      <div className="bg-secondary/10 p-2.5 w-fit rounded">
        <p className="text-secondary">{percent >= 100 ? "Uploaded" : "Uploading"}</p>
      </div>
    </div>
  );
};
