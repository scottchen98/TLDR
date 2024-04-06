import UrlQuery from "../url-query";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-h-dvh max-w-5xl flex-col">
      <UrlQuery />
      <div className="grow overflow-y-auto">{children}</div>
    </div>
  );
}
