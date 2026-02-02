import { useEffect, useState } from "react";
import { Users, Wifi, WifiOff } from "lucide-react";
import { fetchServerStatus } from "@/services/mcStatus";
import { ServerStatus as ServerStatusType } from "@/types";

const ServerStatus = () => {
  const [status, setStatus] = useState<ServerStatusType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStatus = async () => {
      const data = await fetchServerStatus();
      setStatus(data);
      setLoading(false);
    };

    getStatus();
    // Refresh every 60 seconds
    const interval = setInterval(getStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg px-4 py-3">
        <div className="w-3 h-3 rounded-full bg-muted-foreground animate-pulse" />
        <span className="font-space text-sm text-muted-foreground">Checking server...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {/* Online Status */}
      <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg px-4 py-3">
        {status?.online ? (
          <>
            <Wifi className="w-4 h-4 text-green-400" />
            <span className="font-space text-sm text-green-400 font-semibold">Online</span>
          </>
        ) : (
          <>
            <WifiOff className="w-4 h-4 text-red-400" />
            <span className="font-space text-sm text-red-400 font-semibold">Offline</span>
          </>
        )}
      </div>

      {/* Player Count */}
      <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg px-4 py-3">
        <Users className="w-4 h-4 text-primary" />
        <span className="font-space text-sm text-foreground">
          <span className="text-primary font-semibold">{status?.players.online || 0}</span>
          <span className="text-muted-foreground">/{status?.players.max || 0}</span>
          <span className="text-muted-foreground ml-1">players</span>
        </span>
      </div>

      {/* Version */}
      <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg px-4 py-3">
        <span className="font-space text-sm text-muted-foreground">
          Version: <span className="text-primary font-semibold">{status?.version || 'Unknown'}</span>
        </span>
      </div>
    </div>
  );
};

export default ServerStatus;
