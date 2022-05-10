import type { MessageTypeByTopic, Topic } from '@sound-xyz/constants';
import Pusher from 'pusher';

// Prevent multiple instances of Pusher in development
declare const global: typeof globalThis & {
  pusher?: Pusher;
};

const pusher =
  global.pusher ||
  new Pusher({
    appId: process.env.PUSHER_APP_ID as string,
    key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string,
    secret: process.env.PUSHER_APP_SECRET as string,
    cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER as string,
    useTLS: true,
  });

if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'development') {
  global.pusher = pusher;
}

export default pusher;

export function publishMessage<T extends Topic>(
  channelName: string,
  topic: T,
  message: MessageTypeByTopic[T],
) {
  return pusher.trigger(channelName, topic, message);
}
