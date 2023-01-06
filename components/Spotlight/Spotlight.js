import Image from "next/image";
import { useContext } from "react";
import { myDataContext } from "../../pages/_app";

export default function Spotlight() {
  const globalData = useContext(myDataContext);
  const randomPiece = globalData[Math.floor(Math.random() * globalData.length)];
  console.log(randomPiece);
  return (
    <div>
      <Image
        src={randomPiece.imageSource}
        alt={randomPiece.name}
        width={300}
        height={300}
        priority
      />
      <p>{randomPiece.artist}</p>
    </div>
  );
}
