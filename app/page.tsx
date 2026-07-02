import {
  GlobalOverview,
  InvestmentContext,
  PortfolioControl,
  OperatingModel,
  PerformanceEngine,
  RiskIntelligence,
  InvestmentDecision,
  ActionSystem,
} from "@/sections";

export default function HomePage() {
  return (
    <>
      <GlobalOverview />
      <InvestmentContext />
      <PortfolioControl />
      <OperatingModel />
      <PerformanceEngine />
      <RiskIntelligence />
      <InvestmentDecision />
      <ActionSystem />
    </>
  );
}
