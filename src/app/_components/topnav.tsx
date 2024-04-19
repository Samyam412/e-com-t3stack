"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUpload } from "./simple-upload";

export function TopNav() {
  return (
    <nav
      className="flex w-full items-center justify-between border-b p-4 text-xl 
      font-semibold "
    >
      <div>Gallery</div>
      <div className="flex flex-row gap-4 items-center ">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUpload />

          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
