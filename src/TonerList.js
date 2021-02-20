import { ItemWrapper, ListWrapper } from "./styles";
import toners from "./tonerdata";

const TonerList = () => {
  return (
    <ListWrapper>
      {toners.map((toner) => {
        return (
          <ItemWrapper>
            <img src={toner.image} alt={toner.alt} />
            <h3> {toner.name}</h3>
            <h4> {toner.price} KD </h4>
          </ItemWrapper>
        );
      })}
    </ListWrapper>
  );
};

export default TonerList;
