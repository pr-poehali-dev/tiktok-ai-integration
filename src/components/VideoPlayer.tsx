import { useState, useRef } from "react";
import { VideoPost } from "@/lib/types";
import VideoControls from "./VideoControls";
import VideoInfo from "./VideoInfo";

interface VideoPlayerProps {
  video: VideoPost;
  active: boolean;
}

export default function VideoPlayer({ video, active }: VideoPlayerProps) {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLDivElement>(null);

  // В реальном приложении здесь был бы настоящий видеоплеер
  // Сейчас мы имитируем видео изображением для демонстрации

  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      
      <div 
        ref={videoRef}
        className="relative w-full h-full"
        onClick={() => console.log("Video clicked - would toggle play/pause")}
      >
        <img 
          src={video.videoUrl} 
          alt={video.caption} 
          className="w-full h-full object-cover"
          onLoad={() => setLoading(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <VideoControls video={video} />
      <VideoInfo video={video} />
    </div>
  );
}
