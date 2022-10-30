import Layout from '../../components/layout';

const EndPage = ({ earnedMoney, earnMoney }) => {
  return (
    <Layout
      path={'/'}
      buttonText={'Try again'}
      resetEarnedMoney={() => earnMoney('$ 0')}
    >
      <p className="layout__total-score">Total score:</p>
      <h1>{earnedMoney} earned</h1>
    </Layout>
  );
};

export default EndPage;
