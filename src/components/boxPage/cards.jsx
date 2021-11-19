import React from "react";
import { AllCard, Card3, CardsWrap, ImgCard } from "./cardsSty";
import bmw from "./bmw.jpg";
import mercedes from "./mercedes.jpg";
import ferrari from "./Ferrari.jpg";
import buggati from "./buggati.jpg";
import ford from "./ford.jpg";
import mustang from "./mustang.jpg"
function BoxCards() {
  return (
    <CardsWrap>
      <AllCard>
        <Card3>
          <ImgCard>
            <img src={bmw} alt="" />
          </ImgCard>
          <h3>BMW GROUP</h3>
          <p>
            The company uses international events at COP26 in Glasgow for
            constructive and critical exchange with stakeholders and is clearly
            committed to sustainable thinking and action.
          </p>
          <a href="https://www.bmwgroup.com/en.html">
            <h3>Link</h3>
          </a>
        </Card3>
        <Card3>
          <ImgCard>
            <img src={mercedes} alt="" />
          </ImgCard>
          <h3>Mercedes GROUP</h3>
          <p>
            We are one of the biggest producers of premium cars and the world's
            biggest manufacturer of commercial vehicles with a global reach. We
            provide financing, insurance and innovative mobility services.
          </p>
          <a href="https://www.daimler.com/company/">
            <h3>Link</h3>
          </a>
        </Card3>
        <Card3>
          <ImgCard>
            <img src={ferrari} alt="" />
          </ImgCard>
          <h3>Ferrari GROUP</h3>
          <p>
            Ferrari Group specializes in the worldwide shipping of jewellery and
            luxury goods, providing one-stop solutions for the logistics
            management of high-value merchandise
          </p>
          <a href="https://www.ferrarigroup.net/">
            <h3>Link</h3>
          </a>
        </Card3>
        <Card3>
          <ImgCard>
            <img src={buggati} alt="" />
          </ImgCard>
          <h3>Buggati GROUP</h3>
          <p>
            Bugatti Automobiles S.A.S. French pronunciation: ​bygati is a French
            high-performance luxury automobiles manufacturer and a luxury brand
            for hyper sports cars.
          </p>
          <a href="https://www.bugatti.com/">
            <h3>Link</h3>
          </a>
        </Card3>
        <Card3>
          <ImgCard>
            <img src={ford} alt="" />
          </ImgCard>
          <h3>Ford GROUP</h3>
          <p>
            Ford’s success is powered by a commitment that’s global in scale —
            166,000 people working in plants and offices in country after
            country. Discover more about that global organization below.
          </p>
          <a href="https://corporate.ford.com/">
            <h3>Link</h3>
          </a>
        </Card3>
        <Card3>
            <ImgCard>
            <img src={mustang} alt="" />
            </ImgCard>
            <h3>Mustang GROUP</h3>
          <p>
            The Mustang Group is a Boston-based private equity firm that invests
            in middle market companies with revenue between $5 million and $100
            million.The mustang Groups.
          </p>
          <a href="https://mustang.org/">
            <h3>Link</h3>
          </a>
        </Card3>
      </AllCard>
    </CardsWrap>
  );
}

export default BoxCards;
