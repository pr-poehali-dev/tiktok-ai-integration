import { useState } from "react";
import { mockVideos } from "@/lib/data";
import VideoPlayer from "@/components/VideoPlayer";
import Navigation from "@/components/Navigation";

export default function TikTokFeed() {
  const [activeTab, setActiveTab] = useState("home");
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const handleScroll = (direction: "up" | "down") => {
    if (direction === "up" && activeVideoIndex > 0) {
      setActiveVideoIndex(prev => prev - 1);
    } else if (direction === "down" && activeVideoIndex < mockVideos.length - 1) {
      setActiveVideoIndex(prev => prev + 1);
    }
  };

  return (
    <div className="h-screen w-full bg-black overflow-hidden">
      <div className="fixed top-0 left-0 right-0 h-12 bg-transparent z-10 flex justify-center items-center">
        <div className="flex space-x-12 text-white font-medium">
          <button className="opacity-70">Подписки</button>
          <button className="border-b-2 border-white pb-1">Для вас</button>
        </div>
      </div>

      <div 
        className="h-full w-full snap-y snap-mandatory overflow-y-scroll"
        onWheel={(e) => {
          if (e.deltaY > 0) {
            handleScroll("down");
          } else {
            handleScroll("up");
          }
        }}
      >
        {mockVideos.map((video, index) => (
          <div 
            key={video.id}
            className="h-screen w-full snap-start"
          >
            <VideoPlayer 
              video={video} 
              active={index === activeVideoIndex}
            />
          </div>
        ))}
      </div>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
