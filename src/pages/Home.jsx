import React, { lazy } from "react";
import ConnectView from "../components/ConnectView";
const Review = lazy(() => import("../components/Review"));
const Faq = lazy(() => import("../components/Faq"));
const Landing = lazy(() => import("../components/Landing"));
const LogoCloud = lazy(() => import("../components/LogoCloud"));
const CardContainer = lazy(() => import("../components/CardContainer"));
const RatingContainer = lazy(() => import("../components/RatingContainer"));
const BestServiceInformation = lazy(() =>
  import("../components/BestServiceInformation")
);
const InfiniteScrollText = lazy(() =>
  import("../components/InfiniteScrollText")
);
const Home = () => {
  // Create an array of images using useMemo

  return (
    <div>
      <Landing />
      <LogoCloud />
      <CardContainer />
      <InfiniteScrollText />
      <BestServiceInformation />
      <RatingContainer />
      <Review />
      <Faq />
      <ConnectView/>
    </div>
  );
};

export default Home;
