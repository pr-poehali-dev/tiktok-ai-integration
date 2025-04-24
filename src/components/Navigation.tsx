import { Home, Search, PlusSquare, MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    { id: "home", icon: Home, label: "Главная" },
    { id: "discover", icon: Search, label: "Интересное" },
    { id: "create", icon: PlusSquare, label: "" },
    { id: "inbox", icon: MessageCircle, label: "Сообщения" },
    { id: "profile", icon: User, label: "Профиль" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-14 bg-black flex justify-around items-center border-t border-gray-800 px-2 z-50">
      {tabs.map((tab) => (
        <button 
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "flex flex-col items-center justify-center", 
            tab.id === "create" ? "px-4 py-1" : "px-2",
            activeTab === tab.id ? "text-white" : "text-gray-500"
          )}
        >
          {tab.id === "create" ? (
            <div className="bg-primary text-white rounded-md p-1 -mt-4">
              <tab.icon className="w-8 h-8" />
            </div>
          ) : (
            <>
              <tab.icon className="w-6 h-6" />
              <span className="text-xs mt-1">{tab.label}</span>
            </>
          )}
        </button>
      ))}
    </div>
  );
}
