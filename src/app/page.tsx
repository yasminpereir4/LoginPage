import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { Eye } from "@phosphor-icons/react/dist/ssr/Eye";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { GoogleLogo } from "@phosphor-icons/react/dist/ssr/GoogleLogo";
import { Lock } from "@phosphor-icons/react/dist/ssr/Lock";
import Link from "next/link";
import { Button } from "~/components/Button";

export default function Home() {
  return (
    <main className="items-center justify-center flex flex-col h-full">
      <p className="font-semibold text-[#343434] text-2xl mb-11">Bem-vindo</p>
      <div className="flex-col flex p-2 w-full gap-4">
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
        <p className="text-[#6F74DD] font-normal text-base self-end">
          Forgot password?
        </p>
        <Button variant="primary">Entrar</Button>
        <p className="text-[#828282] font-normal text-sm text-center">Ou</p>
        <div className="flex-row flex w-full gap-2">
          <Button
            variant="secondary"
            className="flex-1 items-center justify-center flex gap-3"
          >
            <GoogleLogo size={32} />
            Google
          </Button>
          <Button
            variant="secondary"
            className="flex-1 items-center justify-center flex gap-3"
          >
            <GithubLogo size={32} />
            Github
          </Button>
        </div>
        <p className="text-[#828282] font-normal text-sm text-center">
          Ainda não possuí uma conta?
        </p>
        <Button
          variant="secondary"
          as={Link}
          href="/register"
          className="text-center"
        >
          Cadastre-se
        </Button>
      </div>
    </main>
  );
}
