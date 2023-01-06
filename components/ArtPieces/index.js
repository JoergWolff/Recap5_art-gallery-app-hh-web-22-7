import ArtPiecePreview from "../ArtPiecePreview/index";
import { useContext } from "react";
import { myDataContext } from "../../pages/_app";

export default function ArtPieces() {
  const globalData = useContext(myDataContext);

  return (
    <ul>
      {globalData.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
          />
        </li>
      ))}
    </ul>
  );
}
