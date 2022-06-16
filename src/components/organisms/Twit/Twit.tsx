import { FC } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import styles from './Twit.module.scss';

const Twit: FC = () => {
  return (
    <div className={styles.root}>
      <TwitterTweetEmbed
        onLoad={(t) => console.log(t)}
        tweetId={`1537023251603496961`}
      />
    </div>
  );
};

export default Twit;
