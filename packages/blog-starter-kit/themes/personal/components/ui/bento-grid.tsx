import { cn } from "../../utils/cn";
import { BackgroundGradient } from './background-gradient';


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
	
	<BackgroundGradient className="rounded-xl border  dark:border-white/[0.2] flex h-full overflow-hidden">
		
    <div
      className={cn(
        "cursor-pointer group/bento dark:bg-black dark:border-white/[0.2] bg-white justify-between border space-y-2",
        className
      )}
    >
			<div className="group-hover/bento:-translate-y-1 transition duration-200">
			{icon}
			</div>
			
			<div className="">
			{header}

			</div>
			<div className="font-sans font-normal text-left text-neutral-600 text-xs dark:text-neutral-300">
			{description}
			</div>

    </div>
	</BackgroundGradient>
  );
};
