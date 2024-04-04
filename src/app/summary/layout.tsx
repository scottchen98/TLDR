import UrlQuery from "../url-query";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <UrlQuery />
      {children}
    </div>
  );
}
