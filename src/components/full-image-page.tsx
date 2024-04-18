import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: {id: number}) {
 
  const image = await getImage(props.id);
  return (
    <div>
        <img src={image.url} alt={image.name} className="h-96 w-96" />
    </div>
  );
}
