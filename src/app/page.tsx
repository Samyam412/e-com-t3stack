import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap gap-4  ">
      {images.map((image, index) => (
        <div key={image.id + "-" + index} className="flex h-48 w-48 flex-col ">
          <Image
            className="object-cover"
            height={192}
            width={192}
            alt={image.name}
            src={image.url}
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="size-full text-2xl ">
          Please sign in to see the images
        </div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
