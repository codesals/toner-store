import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: #525252;
    text-align: center;
  }
`;

const StoreImgWrapper = styled.div`
  background-color: black;
`;
const StoreImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  background-color: black;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ItemWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
  }
`;

export { GlobalStyle, StoreImg, StoreImgWrapper, ItemWrapper, ListWrapper };
