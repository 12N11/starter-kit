import { cn } from "../../utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
		className={cn(
			"absolute inset-0 rounded z-[1] opacity-20 group-hover:opacity-50 blur-3xl transition duration-500 will-change-transform",
			"bg-[radial-gradient(circle_farthest-side_at_0_0,#ffb6ef,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#d7ff38,transparent)]"
		  )}
		  
      />


      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
