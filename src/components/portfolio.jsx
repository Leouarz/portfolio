import React from "react";

//import stock
import mathPic from "../img/math.png";
import sogeracksPic from "../img/sogeracks.png";
import sogeflexPic from "../img/sogeflex.png";
import sciencespoPic from "../img/sciencespo.png";
import companyPic from "../img/company.png";
import pdmPic from "../img/info-plantdatamanager.jpg";
import wmsPic from "../img/info-warehousemanagementstation.jpg";
import gdpPic from "../img/info-gestiondupersonnel.jpg";
import gdqPic from "../img/info-gestiondesquais.jpg";
import potentielPic from "../img/info-potentiel.jpg";
import tstPic from "../img/info-trialsupplytool.jpg";
import aliansactPic from "../img/aliansact.png";
import zoePic from "../img/zoe.png";
import cysPic from "../img/checkyoursmile.png";
import launchpadPic from "../img/launchpadPic.png";
import indexerPic from "../img/indexerPic.png";
import secretNftPic from "../img/secretnftPic.png";
import bridgePic from "../img/bridgePic.png";
import apiPic from "../img/apiPic.png";

const carousel0 = () => {
  return (
    <>
      <a
        href={wmsPic}
        data-lightbox="gallery-dz"
        style={{ display: "none" }}
      >
        jsx-a11y/anchor-has-content warning
      </a>
      <a
        href={gdpPic}
        data-lightbox="gallery-dz"
        style={{ display: "none" }}
      >
        jsx-a11y/anchor-has-content warning
      </a>
      <a
        href={gdqPic}
        data-lightbox="gallery-dz"
        style={{ display: "none" }}
      >
        jsx-a11y/anchor-has-content warning
      </a>
      <a
        href={potentielPic}
        data-lightbox="gallery-dz"
        style={{ display: "none" }}
      >
        jsx-a11y/anchor-has-content warning
      </a>
      <a
        href={tstPic}
        data-lightbox="gallery-dz"
        style={{ display: "none" }}
      >
        jsx-a11y/anchor-has-content warning
      </a>
    </>
  )
}

const Item = ({title, image, tags, link, alt, secondaryPic, carousel }) => {
  return (
    <>
      <div className="col-md-4">
        <div className="work-box">
          {link ? 
            <a href={link} target="_blank" rel="noreferrer">
              <div className="work-img">
                <img src={image} alt={alt} className="img-fluid" />
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">{title}</h2>
                    <div className="w-more">
                      <span className="w-ctegory">
                        {tags}
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          :
            <a href={secondaryPic ? secondaryPic : image} data-lightbox={`gallery-${alt}`}>
              <div className="work-img">
                <img src={image} alt={alt} className="img-fluid" />
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">{title}</h2>
                    <div className="w-more">
                      <span className="w-ctegory">
                        {tags}
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          }
          {carousel ? carousel() : <></>}
        </div>
      </div>
    </>
  )
}

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Below you will find various projects carried out in a professional or personal context
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <Item
              key={"ternoa-launchpad"}
              title={"Ternoa lauchpad / launchpad API"}
              tags={"React Node Next Express MongoDB Ethers Wallet connect Etherscan Ethplorer Covalent"}
              image={launchpadPic}
              alt={"ternoa-launchpad"}
              link={"https://launchpad.ternoa.com/"}
            />
            <Item
              key={"ternoa-indexer"}
              title={"Ternoa blockchain indexer / dictionary"}
              tags={"Subquery Postgres Graphql Substrate Node"}
              image={indexerPic}
              alt={"ternoa-indexer"}
              link={"https://indexer.testnet.ternoa.com/"}
            />
            <Item
              key={"ternoa-secretnft"}
              title={"Ternoa marketplace"}
              tags={"React Node Express MongoDB Polkadot.js"}
              image={secretNftPic}
              alt={"ternoa-secretnft"}
              link={"https://www.secret-nft.com/"}
            />
            <Item
              key={"ternoa-bridge"}
              title={"Ternoa bridge"}
              tags={"React Next Metamask Ethers.js WalletConnect"}
              image={bridgePic}
              alt={"ternoa-bridge"}
              link={"https://bridge.ternoa.com/"}
            />
            <Item
              key={"ternoa-api"}
              title={"Ternoa-api (Users, Faucet, NFT Giveaway, Signature verification, ..."}
              tags={"Node Express MongoDB Polkadot.js Ethers Cron"}
              image={apiPic}
              alt={"ternoa-api"}
            />
            <Item
              key={"zoe"}
              title={"Recruitment outsourcing application"}
              tags={"React Node Express MongoDB"}
              image={zoePic}
              alt={"zoe"}
              link={"http://zoe.aliansact.com"}
            />
            <Item
              key={"aliansact"}
              title={"Aliansact company website"}
              tags={"PHP wordpress HTML5 CSS3"}
              image={aliansactPic}
              alt={"aliansact"}
              link={"https://aliansact.com"}
            />
            <Item
              key={"dz"}
              title={"Projects carried out in IT services firm"}
              tags={"Vb.Net C# Javascript WPF"}
              image={companyPic}
              secondaryPic={pdmPic}
              alt={"dz"}
              carousel={carousel0}
            />
            <Item
              key={"sciencespo"}
              title={"Management of additional hours for professors at Sciences Po Toulouse"}
              tags={"PHP Symfony Javascript HTML5 CSS3 Bootstrap"}
              image={sciencespoPic}
              alt={"sciencespo"}
            />
            <Item
              key={"sogeflex"}
              title={"Industrial company showcase site"}
              tags={"PHP Javascript HTML5 CSS3"}
              image={sogeflexPic}
              alt={"sogeflex"}
              link={"http://sogeflex.com"}
            />
            <Item
              key={"sogeracks"}
              title={"E-Catalogue of storage products"}
              tags={"PHP Javascript HTML5 CSS3"}
              image={sogeracksPic}
              alt={"sogeracks"}
              link={"http://sogeracks.com"}
            />
            <Item
              key={"cys project"}
              title={"Contribution to language learning application"}
              tags={"PHP Javascript HTML5 CSS3"}
              image={cysPic}
              alt={"cys project"}
              link={"https://www.checkyoursmile.fr/app.php/fr/contributeurs"}
            />
            <Item
              key={"math project"}
              title={"Simulation of a Markov process"}
              tags={"Javascript HTML5 CSS3 Bootstrap"}
              image={mathPic}
              alt={"math project"}
              link={"http://math.aliansact.com"}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
