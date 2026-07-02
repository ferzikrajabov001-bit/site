import Link from "next/link";
import type { Asset } from "@/data/types";
import { Trend } from "@/components/Trend";
import { formatEur } from "@/lib/utils";

/**
 * Portfolio control layer — a dense data table (Bloomberg/JLL report style),
 * not cards. Numeric columns are right-aligned and monospaced.
 */
export function PortfolioTable({ assets }: { assets: Asset[] }) {
  return (
    <div className="-mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0">
      <table className="w-full min-w-[680px] border-collapse text-left">
        <thead>
          <tr className="border-b border-graphite/30">
            <th className="sys-label py-3 pr-4 font-medium">Asset</th>
            <th className="sys-label py-3 px-4 text-right font-medium">Occupancy</th>
            <th className="sys-label py-3 px-4 text-right font-medium">ADR</th>
            <th className="sys-label py-3 px-4 text-right font-medium">RevPAR</th>
            <th className="sys-label py-3 px-4 text-center font-medium">Trend</th>
            <th className="sys-label py-3 pl-4 text-right font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr
              key={asset.id}
              className="group border-b border-line transition-colors duration-200 hover:bg-graphite/[0.02]"
            >
              <td className="py-4 pr-4">
                <Link
                  href={`/objects/${asset.id}`}
                  className="font-medium text-graphite transition-colors group-hover:text-accent"
                >
                  {asset.name}
                </Link>
                <span className="ml-2 hidden text-sm text-faint sm:inline">
                  {asset.location}
                </span>
              </td>
              <td className="data py-4 px-4 text-right text-graphite">
                {asset.kpi.occupancy}%
              </td>
              <td className="data py-4 px-4 text-right text-graphite">
                {formatEur(asset.kpi.adr)}
              </td>
              <td className="data py-4 px-4 text-right text-graphite">
                {formatEur(asset.kpi.revpar)}
              </td>
              <td className="py-4 px-4 text-center text-base">
                <Trend value={asset.trend} />
              </td>
              <td className="py-4 pl-4 text-right font-mono text-[13px] text-muted">
                {asset.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
