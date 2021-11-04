import Layout from "../components/layout";
import { AwayWrapper } from "../context/awayState";
import { HomeWrapper } from "../context/homeState";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <HomeWrapper>
      <AwayWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AwayWrapper>
    </HomeWrapper>
  );
}

export default MyApp;
