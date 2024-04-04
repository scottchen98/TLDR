import UrlQuery from "../url-query";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl">
      <UrlQuery />
      {children}
    </div>
  );
}
