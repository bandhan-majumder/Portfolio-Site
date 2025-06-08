"use client";
import Link from "next/link";
import { Button } from "@repo/ui";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
// import { ModeToggle } from "./ModeToggle";
import { useRouter } from "next/navigation";
import UserAccountDropDown from "./UserAccountDropDown";
import Image from "next/image";

export const Appbar = () => {
  const { status, data } = useSession();
  const router = useRouter();

  return (
    <nav className="sticky mx-auto wrapper top-0 z-50 flex items-center gap-2 py-6 w-full">
      <div className="flex w-[90vw] justify-between mx-auto shadow-lg shadow-neutral-600/5 backdrop-blur-lg border border-gray-600 p-3 rounded-2xl md:w-[50vw]">
        <Link href={"/"} className="flex items-center gap-4 cursor-pointer">
        <Image
            src={"/logo.png"}
            width={50}
            height={50}
            alt="logo"
            className="rounded-full"
          />
        </Link>

        <div className="flex items-center gap-4">
          {(status === "unauthenticated") ? (
            <Button
              size="lg"
              variant={"default"}
              className="p-2 bg-[#7A4D44] hover:bg-[#4b2e28] text-white rounded-xl cursor-pointer text-md"
              onClick={async () => {
                await signIn();
                router.push('/');
              }}
            >
              Login
            </Button>
          ) : (
            <UserAccountDropDown />
          )}
        </div>
      </div>
    </nav>
  );
};