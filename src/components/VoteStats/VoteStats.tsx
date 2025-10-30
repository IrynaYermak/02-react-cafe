import styles from './VoteStats.module.css';
import type { Votes } from '../types/votes';

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positivePercentage: number;
}

export default function VoteStats({
  votes,
  totalVotes = 0,
  positivePercentage = 0,
}: VoteStatsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positivePercentage}%</strong>
      </p>
    </div>
  );
}
