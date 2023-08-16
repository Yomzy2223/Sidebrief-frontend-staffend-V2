interface ProgressBarProps {
  percent: number;
}

export const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <div className="flex flex-col items-start w-full gap-2">
      <div className="w-full h-3 rounded-2xl bg-primary-foreground">
        <div
          className="h-3 rounded-2xl bg-primary"
          style={{ width: `${percent > 100 ? 100 : percent}%` }}
        />
      </div>
    </div>
  );
};
