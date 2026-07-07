"use client";

import { useId, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface Series {
  label: string;
  data: number[];
  color: string;
  dashed?: boolean;
}

interface LineChartProps {
  labels: string[];
  series: Series[];
  height?: number;
}

const VIEW_WIDTH = 700;

export function LineChart({ labels, series, height = 260 }: LineChartProps) {
  const gradientId = useId();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const max = useMemo(
    () => Math.max(...series.flatMap((s) => s.data)) * 1.15,
    [series]
  );

  const stepX = VIEW_WIDTH / (labels.length - 1);

  function pointsFor(data: number[]) {
    return data.map((value, i) => {
      const x = i * stepX;
      const y = height - (value / max) * (height - 24) - 8;
      return [x, y] as const;
    });
  }

  function pathFor(points: readonly (readonly [number, number])[]) {
    return points
      .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
      .join(" ");
  }

  const primarySeriesPoints = pointsFor(series[0].data);

  return (
    <div className="relative w-full" style={{ height }}>
      <svg
        viewBox={`0 0 ${VIEW_WIDTH} ${height}`}
        className="w-full h-full overflow-visible"
        preserveAspectRatio="none"
        onMouseLeave={() => setHoverIndex(null)}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={series[0].color} stopOpacity={0.18} />
            <stop offset="100%" stopColor={series[0].color} stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* horizontal grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((f) => (
          <line
            key={f}
            x1={0}
            x2={VIEW_WIDTH}
            y1={height - f * (height - 8)}
            y2={height - f * (height - 8)}
            stroke="currentColor"
            className="text-outline-variant/20"
            strokeWidth={1}
          />
        ))}

        {/* hover scrub area */}
        {labels.map((_, i) => (
          <rect
            key={i}
            x={i * stepX - stepX / 2}
            y={0}
            width={stepX}
            height={height}
            fill="transparent"
            onMouseEnter={() => setHoverIndex(i)}
          />
        ))}

        {series.map((s) => {
          const points = pointsFor(s.data);
          const d = pathFor(points);
          const areaD = `${d} L${VIEW_WIDTH},${height} L0,${height} Z`;
          return (
            <g key={s.label}>
              {!s.dashed && (
                <motion.path
                  d={areaD}
                  fill={`url(#${gradientId})`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
              )}
              <motion.path
                d={d}
                fill="none"
                stroke={s.color}
                strokeWidth={s.dashed ? 2 : 3}
                strokeDasharray={s.dashed ? "6 6" : undefined}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
              />
            </g>
          );
        })}

        {hoverIndex !== null && (
          <line
            x1={hoverIndex * stepX}
            x2={hoverIndex * stepX}
            y1={0}
            y2={height}
            stroke="currentColor"
            className="text-outline-variant/40"
            strokeWidth={1}
          />
        )}

        {hoverIndex !== null &&
          primarySeriesPoints[hoverIndex] &&
          series.map((s) => {
            const pts = pointsFor(s.data);
            const [x, y] = pts[hoverIndex];
            return (
              <circle
                key={s.label}
                cx={x}
                cy={y}
                r={4.5}
                fill={s.color}
                stroke="white"
                strokeWidth={2}
              />
            );
          })}
      </svg>

      {hoverIndex !== null && (
        <div
          className="absolute -top-2 -translate-y-full bg-inverse-surface text-inverse-on-surface text-xs rounded-lg px-3 py-2 shadow-lg pointer-events-none"
          style={{
            left: `${(hoverIndex / (labels.length - 1)) * 100}%`,
            transform: "translate(-50%, -100%)",
          }}
        >
          <p className="font-label-sm mb-1">{labels[hoverIndex]}</p>
          {series.map((s) => (
            <p key={s.label} className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ backgroundColor: s.color }}
              />
              {s.label}: {s.data[hoverIndex]}
            </p>
          ))}
        </div>
      )}

      <div className="flex justify-between mt-2 text-[10px] text-on-surface-variant px-0.5">
        {labels
          .filter((_, i) => i % 2 === 0)
          .map((l) => (
            <span key={l}>{l}</span>
          ))}
      </div>
    </div>
  );
}
