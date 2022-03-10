import Item, { ItemProps } from "./components/Item/Item";

import americanBuryingBeetle from "./assets/american-burying-beetle.png";
import deltaGreenGroundBeetle from "./assets/delta-green-ground-beetle.png";
import laysanDuck from "./assets/laysan-duck.png";
import northernIdahoGroundSquirrel from "./assets/nothern-idaho-ground-squirrel.png";
import yosemiteToad from "./assets/yosemite-toad.png";

import styled from "styled-components";
import { GoBackBtnProps } from "@mf-shared-library/shared-props";
import Parcel from "single-spa-react/parcel";
import { mountRootParcel } from "single-spa";

export const items: ItemProps[] = [
  {
    name: "American Burying Beetle",
    image: americanBuryingBeetle,
    origin:
      "Arkansas, Kansas, Massachusetts, Nebraska, Ohio, Oklahoma, Rhode Island, South Dakota, Texas",
  },
  {
    name: "Delta Green Ground Beetle",
    image: deltaGreenGroundBeetle,
    origin: "California",
  },
  {
    name: "Laysan Duck",
    image: laysanDuck,
    origin: "Hawaii",
  },
  {
    name: "Norther Indaho Ground Squirrel",
    image: northernIdahoGroundSquirrel,
    origin: "Idaho",
  },
  {
    name: "Yosemite Toad",
    image: yosemiteToad,
    origin: "California",
  },
];

export default function Root(props) {
  //@ts-ignore
  const parcelConfig = async () =>
    import("@joaoc/mf-shared").then((module: any) => module.goBackBtnParcel);

  const parcelProps: GoBackBtnProps = {
    url: "/continents",
    btnText: "Back to continents",
  };

  return (
    <>
      <ParcelWrapper>
        <Parcel
          config={parcelConfig}
          mountParcel={mountRootParcel}
          {...parcelProps}
        />
      </ParcelWrapper>
      <ContentWrapper>
        {items.map((item, index) => {
          return (
            <Item
              name={item.name}
              image={item.image}
              origin={item.origin}
              key={index}
            />
          );
        })}
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 100px auto;
  width: 1280px;
  flex-wrap: wrap;
`;

const ParcelWrapper = styled.div`
  margin: 50px;
`;
