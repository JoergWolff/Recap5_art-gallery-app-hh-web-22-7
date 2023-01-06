import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <h4>{title}</h4>
      <Image src={image} alt={title} width={150} height={150} priority />
      <p>{artist}</p>
    </>
  );
}
