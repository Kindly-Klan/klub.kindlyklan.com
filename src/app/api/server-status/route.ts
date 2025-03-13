import { NextResponse } from 'next/server';

// Minecraft server ping package will be needed
// To install: npm install minecraft-server-util

// Workaround for Edge runtime
let util: any = null;

export const runtime = 'nodejs'; // Use Node.js runtime for this API route

export async function GET() {
  try {
    if (!util) {
      try {
        util = await import('minecraft-server-util');
      } catch (error) {
        console.error('Failed to import minecraft-server-util:', error);
        return NextResponse.json(
          { online: false, error: 'Server status service unavailable' },
          { status: 500 }
        );
      }
    }

    // Adding console log to debug the API call
    console.log('Attempting to ping Minecraft server at play.kindlyklan.com:25565');

    // Cambiando la forma en que llamamos a status - usamos port como un número, no como objeto
    const result = await util.status('play.kindlyklan.com', 25565, {
      timeout: 5000,
      enableSRV: true,
    });

    console.log('Server ping successful:', result);

    return NextResponse.json({
      online: true,
      players: {
        online: result.players.online,
        max: result.players.max
      },
      version: result.version.name
    });
  } catch (error) {
    console.error('Error pinging Minecraft server:', error);
    // If we can't connect, the server is probably offline
    return NextResponse.json({
      online: false,
      players: {
        online: 0,
        max: 0
      }
    });
  }
}