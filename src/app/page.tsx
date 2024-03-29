import { Dashboard } from "./dashboard";

export default function DashboardPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { query } = searchParams;

  return (
    <>
      <Dashboard query={query} />
    </>
  );
}
