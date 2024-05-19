import { iBubbleTea } from "@/model/BubbleTea";
import { CardMedia } from "@mui/material";

type BubbleTeaCardImageProps = {
  path: string;
};

export default function BubbleTeaCardImage({ path }: BubbleTeaCardImageProps) {
  return (
    <CardMedia
      className="w-full h-96"
      image={`/images/bubble_tea/${path}`}
      title="green iguana"
    />
  );
}
