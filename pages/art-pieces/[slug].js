import { useRouter } from "next/router";
import { useContext } from "react";
import { myDataContext } from "../_app";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtPieceDetailsPage() {
  const globalData = useContext(myDataContext);
  const router = useRouter();
  const { slug } = router.query;
  const currentArtPiece = globalData.find((data) => data.slug === slug);
  if (!currentArtPiece) {
    return <h1>ERROR 404</h1>;
  }
  const { imageSource, name, artist, year, genre } = currentArtPiece;
  return (
    <ArtPieceDetails
      image={imageSource}
      title={name}
      artist={artist}
      year={year}
      genre={genre}
    />
  );
}
