import { handleCopyClick, handleFavoritesClick, handleLikeClick, handleRepostClick } from "@/features/store/postSlice";
import { Button } from "@/shared/components/ui/button";
import { Copy, Repeat2, Star, ThumbsUp } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
 // путь подставь свой

const FooterCard = () => {
  const dispatch = useDispatch();
  const { likes, favorites, reposts, copies } = useSelector(
    (state: any) => state.post
  );

  return (
    <div className="flex justify-center px-4 gap-3">
      <Button
        onClick={() => dispatch(handleLikeClick())}
        className="flex items-center"
      >
        <ThumbsUp className="w-5 h-5" />
        <p className="pl-3">{likes}</p>
      </Button>
      <Button
        onClick={() => dispatch(handleFavoritesClick())}
        className="flex items-center"
      >
        <Star className="w-5 h-5" />
        <p className="pl-3">{favorites}</p>
      </Button>
      <Button
        onClick={() => dispatch(handleRepostClick())}
        className="flex items-center"
      >
        <Repeat2 className="w-5 h-5" />
        <p className="pl-3">{reposts}</p>
      </Button>
      <Button
        onClick={() => dispatch(handleCopyClick())}
        className="flex items-center"
      >
        <Copy className="w-5 h-5" />
        <p className="pl-3">{copies}</p>
      </Button>
    </div>
  );
};

export default FooterCard;
