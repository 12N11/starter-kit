import { Progress } from "./ui/progress";

// Pre-computed total duration from genesis to target day in days
const totalDurationDays = 1211;

// Genesis date as a JavaScript Date object
const genesisDate = new Date('2021-11-24T12:00:00');

// Helper function to calculate days from genesis to a given date
const calculateDaysFromGenesis = (toDate: Date) => {
  const oneDay = 86400000; // Milliseconds in one day
  const genesisTime = genesisDate.getTime();
  const toTime = toDate.getTime();
  return Math.round((toTime - genesisTime) / oneDay);
};

// The EpochTracker component
const EpochTracker = () => {
  // Current date
  const today = new Date();
  
  // Calculate the current day since genesis
  const currentDaySinceGenesis = calculateDaysFromGenesis(today);

  // Calculate the progress as a percentage
  const progressPercentage = Math.round(Math.min(100, (currentDaySinceGenesis / totalDurationDays) * 100));

  return (
    <div className="flex-col md:flex md:flex-row md:items-center justify-center text-neutral-600 dark:text-neutral-300 mx-auto p-4 gap-4">
      <div className="flex flex-col text-left"><span>Alphanet&apos;s Big Bang</span></div>
      <div className="">
        <Progress value={progressPercentage} className="md:min-w-[500px] h-3.5" />
      </div>
      <div className="flex flex-col text-right"><span className="text-right">Epoch 1211</span></div>
    </div>
  );
};

export default EpochTracker;