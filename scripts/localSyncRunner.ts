import axios from 'axios';

const POLL_INTERVAL = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? 5000 : 2000;

async function doStuff() {
  try {
    await axios.post('http://localhost:3000/api/sync');
  } catch (error: any) {
    console.error('Error in localSyncRunner:', error.code);
  }
}

function run() {
  setInterval(doStuff, POLL_INTERVAL);
}

run();
