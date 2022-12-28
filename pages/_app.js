import "../styles/globals.css";
import ThemeContextWrapper from "../context/themeContextWrapper";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextWrapper>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeContextWrapper>
  );
}

export default MyApp;
