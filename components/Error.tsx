import { useRouter } from "next/navigation";

function ErrorPage() {
  const router = useRouter();
  return (
    <main className=" w-screen flex-col h-svh flex items-center justify-center">
      <p className="text-88 pb-6"> \(o_o)/ </p>
      <button className="rounded-full button" onClick={() => router.push("/")}>
        Go back home
      </button>
    </main>
  );
}

export default ErrorPage;
