import { Layout } from '../../components';
import { useGameConfig } from '../../hooks/useGameConfig';

const EndPage = () => {
  const { stageData } = useGameConfig();
  return (
    <Layout>
      <p className="layout__total-score">Total score:</p>
      <h1>
        {stageData.earnedMoney.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        })}
      </h1>
    </Layout>
  );
};

export { EndPage };
