import { At } from "@phosphor-icons/react/dist/ssr/At";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { Eye } from "@phosphor-icons/react/dist/ssr/Eye";
import { Lock } from "@phosphor-icons/react/dist/ssr/Lock";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "~/components/Button";
import { USER_ID_COOKIE_NAME } from "~/utils/constants";

export default function Register() {
  const userId = cookies().get(USER_ID_COOKIE_NAME)?.value;
  if (userId) {
    return redirect("/");
  }
  return (
    <main className="items-center justify-center flex flex-col h-full">
      <p className="font-semibold text-[#343434] text-2xl mb-11">Cadastro</p>
      <div className="flex-col flex p-2 w-full gap-4">
        <div className="relative w-full">
          <At
            size={28}
            color="#828282"
            className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"
          />
          <input
            placeholder="Nome de usuário"
            className="border border-[#E6E9FA] p-2 rounded-lg pl-10 w-full"
          />
        </div>
        <div className="relative w-full">
          <EnvelopeSimple
            size={28}
            color="#828282"
            className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"
          />
          <input
            placeholder="Email"
            className="border border-[#E6E9FA] p-2 rounded-lg pl-10 w-full"
          />
        </div>
        <div className="relative w-full">
          <Lock
            size={28}
            color="#828282"
            className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"
          />
          <input
            placeholder="Password"
            className="border border-[#E6E9FA] p-2 rounded-lg px-10 w-full"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2">
            <Eye size={32} color="#828282" />
          </button>
        </div>
        <Button
          variant="secondary"
          as={Link}
          href="/login"
          className="text-center mt-4"
        >
          Cadastre-se
        </Button>
      </div>
    </main>
  );
}
