import styled from "styled-components";

export interface ItemProps {
  name: string;
  image: any;
  origin: string;
}

const Item = (props: ItemProps) => {
  return (
    <ItemWrapper>
      <Image src={props.image} />
      <Name>{props.name}</Name>
      <Oring>Origin: {props.origin}</Oring>
    </ItemWrapper>
  );
};

export default Item;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border: 2px solid orange;
  background-color: blueviolet;
  align-items: center;
  width: 300px;
  margin: 20px 50px;
`;

const Image = styled.img`
  width: 300px;
  height: 200px;
  object-fit: revert;
`;

const Name = styled.span`
  color: white;
  font-weigth: bold;
  margin-top: 20px;
`;

const Oring = styled.span`
  color: white;
  font-weigth: bold;
  margin-top: 20px;
  text-align: center;
  padding: 0 10px 20px;
`;
