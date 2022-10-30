import Layout from '../../components/layout';

const StartPage = () => {
  return (
    <Layout path={'/game'} buttonText={'Start'}>
      <h1>
        Who wants to be
        <br />a millionaire?
      </h1>
    </Layout>
  );
};

export default StartPage;