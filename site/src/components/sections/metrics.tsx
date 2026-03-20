import { METRICS } from "@/lib/constants";

export function Metrics() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {METRICS.map((metric, i) => (
            <div
              key={metric.label}
              className={`animate-fade-up delay-${(i + 1) * 100} relative text-center lg:text-left ${
                i < METRICS.length - 1 ? "lg:border-r lg:border-gray-100" : ""
              }`}
            >
              <p className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-primary leading-none tracking-tight font-[family-name:var(--font-playfair)]">
                {metric.value}
              </p>
              <p className="mt-3 text-[13px] uppercase tracking-[0.12em] text-secondary-light font-medium">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
