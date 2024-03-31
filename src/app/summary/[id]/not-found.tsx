import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto mt-8 flex flex-col items-center gap-4">
      <h2 className="text-2xl">Summary Not Found</h2>
      <Link href="/" className="text-blue-500 hover:underline">
        Return Home
      </Link>
    </div>
  );
}
