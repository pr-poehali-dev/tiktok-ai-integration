import { useState } from "react";
import { Heart, MessageCircle, Share, Music } from "lucide-react";
import { VideoPost } from "@/lib/types";
import { cn } from "@/lib/utils";

interface VideoControlsProps {
  video: VideoPost;
}

export default function VideoControls({ video }: VideoControlsProps) {
  const [liked, setLiked] = useState(false);
  const [follows, setFollows] = useState(video.followed);
  const [likeCount, setLikeCount] = useState(video.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  const handleFollow = () => {
    setFollows(!follows);
  };

  const formatCount = (count: number): string => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K";
    }
    return count.toString();
  };

  return (
    <div className="absolute right-4 bottom-20 flex flex-col items-center gap-4">
      <div className="flex flex-col items-center">
        <button 
          onClick={handleLike}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black/20 text-white"
        >
          <Heart className={cn("w-7 h-7", liked && "fill-red-500 text-red-500")} />
        </button>
        <span className="text-white text-xs mt-1">{formatCount(likeCount)}</span>
      </div>

      <div className="flex flex-col items-center">
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-black/20 text-white">
          <MessageCircle className="w-7 h-7" />
        </button>
        <span className="text-white text-xs mt-1">{formatCount(video.comments)}</span>
      </div>

      <div className="flex flex-col items-center">
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-black/20 text-white">
          <Share className="w-7 h-7" />
        </button>
        <span className="text-white text-xs mt-1">{formatCount(video.shares)}</span>
      </div>

      <div className="w-12 h-12 relative mt-2">
        <img 
          src={video.userAvatar}
          alt={video.username}
          className="w-full h-full rounded-full object-cover border-2 border-white"
        />
        <button 
          onClick={handleFollow}
          className={cn(
            "absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center",
            follows ? "bg-primary text-white" : "bg-red-500 text-white"
          )}
        >
          {follows ? "+" : "✓"}
        </button>
      </div>
    </div>
  );
}
