import Image from "next/image";
import { useContext } from "react";
import { globalDataContext } from "../../pages/_app";
import { getRandon } from "../../lib/utils";

export default function Spotlight() {
  const globalData = useContext(globalDataContext);
  const randomPiece = globalData[getRandon(globalData.length)];
  return (
    <div>
      <Image
        src={randomPiece.imageSource}
        alt={randomPiece.name}
        width={300}
        height={300}
        priority
      />
      <p>Artist: {randomPiece.artist}</p>
    </div>
  );
}
