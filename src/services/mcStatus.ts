import { ServerStatus } from '../types';

const SERVER_IP = 'celestialcity.top';

export const fetchServerStatus = async (): Promise<ServerStatus> => {
  try {
    const response = await fetch(`https://api.mcsrvstat.us/3/${SERVER_IP}`);
    const data = await response.json();

    return {
      online: data.online,
      players: {
        online: data.players?.online || 0,
        max: data.players?.max || 1000,
      },
      version: data.version || '1.20.x',
      motd: data.motd?.clean?.[0] || 'A Premium Economy Experience',
    };
  } catch (error) {
    console.error('Error fetching MC status:', error);
    return {
      online: false,
      players: { online: 0, max: 0 },
      version: 'Unknown',
      motd: 'Offline',
    };
  }
};
