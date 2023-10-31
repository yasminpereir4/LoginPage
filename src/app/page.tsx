import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Button } from "~/components/Button";
import { USER_ID_COOKIE_NAME } from "~/utils/constants";

export default function Home() {
  const userId = cookies().get(USER_ID_COOKIE_NAME)?.value;
  if (!userId) {
    return redirect("/login");
  }
  return (
    <main className="items-center justify-center flex flex-col h-full">
      <p className="font-semibold text-[#343434] text-2xl mb-11">
        Você está logado!!
      </p>
      <Button
        variant="secondary"
        as="a"
        href="/api/logout"
        className="text-center w-full"
      >
        Sair
      </Button>
    </main>
  );
}
