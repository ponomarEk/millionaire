import Layout from '../../components/layout';
import useGameConfig from '../../hooks/useGameConfig';

const EndPage = () => {
  const { earnedMoney } = useGameConfig();
  return (
    <Layout>
      <p className="layout__total-score">Total score:</p>
      <h1>{earnedMoney} earned</h1>
    </Layout>
  );
};

export default EndPage;
