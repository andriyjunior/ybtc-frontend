import { FC } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
// import styles from './Twit.module.scss';

export const Twit: FC = () => {
  return (
    <div>
      <div></div>
      <TwitterTweetEmbed
        onLoad={(t) => console.log(t)}
        tweetId={`1537023251603496961`}
      />
    </div>
  );
};
