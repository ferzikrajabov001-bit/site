/**
 * Lightweight inline sparkline — a single SVG polyline, no chart library.
 * Server-rendered, no interaction. Used in the asset intelligence layer.
 */
export function Sparkline({
  data,
  width = 520,
  height = 96,
  className,
  stroke = "#2F6BFF",
}: {
  data: number[];
  width?: number;
  height?: number;
  className?: string;
  stroke?: string;
}) {
  if (data.length === 0) return null;

  const pad = 4;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const stepX = (width - pad * 2) / (data.length - 1 || 1);

  const points = data.map((value, i) => {
    const x = pad + i * stepX;
    const y = pad + (1 - (value - min) / range) * (height - pad * 2);
    return [x, y] as const;
  });

  const path = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");

  const last = points[points.length - 1];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio="none"
      role="img"
      aria-hidden="true"
    >
      <path d={path} fill="none" stroke={stroke} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
      <circle cx={last[0]} cy={last[1]} r={2.5} fill={stroke} />
    </svg>
  );
}
