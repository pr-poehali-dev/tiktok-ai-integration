import { VideoPost } from "./types";

export const mockVideos: VideoPost[] = [
  {
    id: "1",
    username: "ai_creator",
    caption: "Нейросеть создала это видео о космосе #ai #space",
    videoUrl: "https://images.unsplash.com/photo-1639628735078-ed2f038a193e",
    likes: 12500,
    comments: 843,
    shares: 327,
    userAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    followed: false
  },
  {
    id: "2",
    username: "digital_artist",
    caption: "Искусственный интеллект нарисовал этот пейзаж #digitalart",
    videoUrl: "https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c",
    likes: 8700,
    comments: 231,
    shares: 112,
    userAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop",
    followed: true
  },
  {
    id: "3",
    username: "future_tech",
    caption: "ИИ показывает будущее технологий #technology #future",
    videoUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4",
    likes: 32100,
    comments: 1023,
    shares: 734,
    userAvatar: "https://images.unsplash.com/photo-1548449112-96a38a643324?w=150&h=150&fit=crop",
    followed: false
  }
];
