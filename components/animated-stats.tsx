import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Companies", value: 1200 },
  { label: "Active Users", value: 43000 },
  { label: "Uptime", value: "99.99%" },
];

function AnimatedCounter({ value }: { value: number | string }) {
  const isNumber = typeof value === "number";

  // Animate number up on mount
  const ref = React.useRef<HTMLSpanElement>(null);
  React.useEffect(() => {
    if (isNumber && ref.current) {
      let start = 0;
      const end = value as number;
      const step = Math.ceil(end/100);
      let current = start;
      const animate = () => {
        if (current < end) {
          current += step;
          if (current > end) current = end;
          ref.current!.textContent = current.toLocaleString();
          requestAnimationFrame(animate);
        } else {
          ref.current!.textContent = end.toLocaleString();
        }
      };
      animate();
    } else if (ref.current) {
      ref.current.textContent = value.toString();
    }
  }, [value, isNumber]);

  return (
    <span ref={ref} className="font-extrabold text-4xl text-neutral-900 dark:text-white" />
  );
}

export function AnimatedStats() {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center items-center mt-12">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          className="flex flex-col items-center backdrop-blur-sm glass-bg p-6 rounded-3xl border border-white/10 shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <AnimatedCounter value={stat.value} />
          <div className="text-base opacity-70 font-semibold mt-2">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
