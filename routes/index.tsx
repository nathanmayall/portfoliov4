import Body from "../components/Body.tsx";
import Footer from "../components/Footer.tsx";
import Title from "../components/Title.tsx";
import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <>
      <Title />
      <Body />
      <Footer />
    </>
  );
});
