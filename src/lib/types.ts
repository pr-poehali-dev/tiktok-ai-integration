export interface VideoPost {
  id: string;
  username: string;
  caption: string;
  videoUrl: string;
  likes: number;
  comments: number;
  shares: number;
  userAvatar: string;
  followed: boolean;
}
