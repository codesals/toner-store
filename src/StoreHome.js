import "./App.css";
import { StoreImg, StoreImgWrapper } from "./styles";

const storeimgsrc =
  "https://upload.wikimedia.org/wikipedia/commons/9/9c/Dunder_Mifflin%2C_Inc.svg";

const StoreHome = () => {
  return (
    <>
      <StoreImgWrapper>
        <StoreImg src={storeimgsrc} alt={"Dunder Mifflin Header"} />
      </StoreImgWrapper>
      <h1 className="neon flicker"> NOW SELLING TONER TOO! </h1>
    </>
  );
};

export default StoreHome;
