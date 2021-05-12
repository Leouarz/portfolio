import React from "react";

//import stock
import mathPic from "../img/math.jpg";
import sogeracksPic from "../img/sogeracks.png";
import sogeflexPic from "../img/sogeflex.png";
import sciencespoPic from "../img/sciencespo.jpg";
import companyPic from "../img/company.png";
import pdmPic from "../img/info-plantdatamanager.jpg";
import wmsPic from "../img/info-warehousemanagementstation.jpg";
import gdpPic from "../img/info-gestiondupersonnel.jpg";
import gdqPic from "../img/info-gestiondesquais.jpg";
import potentielPic from "../img/info-potentiel.jpg";
import tstPic from "../img/info-trialsupplytool.jpg";
import aliansactPic from "../img/aliansact.png";
import zoePic from "../img/aliansact.png";

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
            <div className="col-md-4">
              <div className="work-box">
                <a href={"http://zoe.aliansact.com"} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={zoePic} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Prototype d'application d'externalisation des recrutements</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            React Node Express MongoDB
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
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={"https://aliansact.com"} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={aliansactPic} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Site d'entreprise Aliansact</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            PHP wordpress HTML5 CSS3
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
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={pdmPic} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={companyPic} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Projets effectués en ESN</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Vb.Net C# Javascript WPF
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
                <a
                  href={wmsPic}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={gdpPic}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={gdqPic}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={potentielPic}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={tstPic}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={sciencespoPic} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={sciencespoPic} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Gestion des heures complémentaires des professeurs de Sciences Po Toulouse</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            PHP Symfony Javascript HTML5 CSS3 Bootstrap
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
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={"http://sogeflex.com"} target="_blank" rel="noreferrer">
                  <div className="work-img">
                    <img src={sogeflexPic} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Site vitrine entreprise industrielle</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            PHP Javascript HTML5 CSS3
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
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={"http://sogeracks.com"} target="_blank" rel="noreferrer">
                  <div className="work-img">
                    <img src={sogeracksPic} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">E-Catalogue de produits de stockages</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            PHP Javascript HTML5 CSS3
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
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={"http://math.aliansact.com"} target="_blank" rel="noreferrer" >
                  <div className="work-img">
                    <img src={mathPic} alt="math project" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Simulation d'un processus Markovien</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Javascript HTML5 CSS3 Bootstrap
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
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
