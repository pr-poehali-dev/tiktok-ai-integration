import { VideoPost } from "@/lib/types";
import { Music } from "lucide-react";

interface VideoInfoProps {
  video: VideoPost;
}

export default function VideoInfo({ video }: VideoInfoProps) {
  return (
    <div className="absolute bottom-24 left-4 right-20 text-white">
      <h3 className="font-semibold text-lg">@{video.username}</h3>
      <p className="text-sm mt-2 line-clamp-2">{video.caption}</p>
      
      <div className="flex items-center mt-3 gap-2">
        <Music className="w-4 h-4" />
        <p className="text-xs">Оригинальный звук - {video.username}</p>
      </div>
    </div>
  );
}
