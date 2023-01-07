import { useRouter } from "next/router";
import { useContext } from "react";
import { globalDataContext } from "../../pages/_app";
import ArtPiecePreview from "../ArtPiecePreview/index";

export default function ArtPieces() {
  const router = useRouter();
  const globalData = useContext(globalDataContext);
  function handleArtPieceClick(slug) {
    router.push(`../art-pieces/${slug}`);
  }

  return (
    <ul>
      {globalData.map((piece) => (
        <li key={piece.slug} onClick={() => handleArtPieceClick(piece.slug)}>
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
