import { useEffect } from "react";
import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useCookies, CookiesProvider } from "react-cookie";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ConfigProvider } from "antd";
import Cookies from "js-cookie";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";

// Import components
import Header from "../../Components/Header";
import Side from "../../Components/Side";

// Import page
import LoginPage from "../Login";
import Dashboard from "../Dashboard";
import News from "../News";
import NewsAdd from "../News/Add";
import NewsEdit from "../News/Edit";
import NewsCategories from "../News/News_categories";
// Cost
import Cost from "../Cost";
import CostAdd from "../Cost/Add";
import CostEdit from "../Cost/Edit";
import CostType from "../Cost/CostType";
// Platform
import Platform from "../Platform";
import PlatformAdd from "../Platform/Add";
import PlatformEdit from "../Platform/Edit";
//Services
import Service from "../Service";
import ServiceAdd from "../Service/Add";
import ServiceEdit from "../Service/Edit";
// Ads
import Ads from "../Ads";
import AdsAdd from "../Ads/Add";
import AdsEdit from "../Ads/Edit";
//Partner
import Partner from "../Partner";
import PartnerAdd from "../Partner/Add";
import PartnerEdit from "../Partner/Edit";
//Faq
import Faq from "../Faq";
import FaqAdd from "../Faq/Add";
import FaqEdit from "../Faq/Edit";
//Gallery
import Gallery from "../Gallery";
import GalleryAdd from "../Gallery/Add";
import GalleryEdit from "../Gallery/Edit";
//User
import User from "../Users";
import UserAdd from "../Users/Add";
import UserEdit from "../Users/Edit";

// Websettings
import WebSettings from "../WebSettings";
import Socials from "../WebSettings/socials";
import Banner from "../WebSettings/banner";
import BannerAdd from "../WebSettings/banner/Add";
import BannerEdit from "../WebSettings/banner/Edit";
import Menus from "../Menus";
import Logout from "../Logout";
import FooterMenu from "../Menus/footer";
// Page
import PageAdd from "../Page/Add";
import PageEdit from "../Page/Edit";
import Page from "../Page";
// Actions
import { tokenCheck } from "../../redux/actions/tokenActions";

function App(props) {
  const validateMessages = {
    required: "Заавал бөглөнө үү!",
  };

  const [cookies] = useCookies(["zayatoken", "language"]);

  useEffect(() => {
    if (cookies.zayatoken) {
      const token = cookies.zayatoken;
      props.checkToken(token);
    }
  }, cookies);

  useEffect(() => {
    if (props.tokenError) {
      Cookies.remove("zayatoken");
      document.location.href = "/login";
    }
  }, props.tokenError);

  return (
    <>
      {cookies.zayatoken ? (
        <ConfigProvider form={{ validateMessages }}>
          <CookiesProvider>
            <Header />
            <Side />
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path={"/news/edit/:id"} component={NewsEdit} />
              <Route path="/news/add" component={NewsAdd} />
              <Route path="/news" exact component={News} />
              // Cost
              <Route path="/costs/edit/:id" component={CostEdit} />
              <Route path="/costs/add" component={CostAdd} />
              <Route path="/costs" exact component={Cost} />
              // Platform
              <Route path="/platforms/add" exact component={PlatformAdd} />
              <Route
                path="/platforms/edit/:id"
                exact
                component={PlatformEdit}
              />
              <Route path="/platforms" exact component={Platform} />
              // Services
              <Route path="/services/add" exact component={ServiceAdd} />
              <Route path="/services/edit/:id" exact component={ServiceEdit} />
              <Route path="/services" exact component={Service} />
              // Ads
              <Route path="/adsies/add" exact component={AdsAdd} />
              <Route path="/adsies/edit/:id" exact component={AdsEdit} />
              <Route path="/adsies" exact component={Ads} />
              // Partner
              <Route path="/partners/add" exact component={PartnerAdd} />
              <Route path="/partners/edit/:id" exact component={PartnerEdit} />
              <Route path="/partners" exact component={Partner} />
              // Faq
              <Route path="/faqs/add" exact component={FaqAdd} />
              <Route path="/faqs/edit/:id" exact component={FaqEdit} />
              <Route path="/faqs" exact component={Faq} />
              // Gallery
              <Route path="/gallery/add" exact component={GalleryAdd} />
              <Route path="/gallery/edit/:id" exact component={GalleryEdit} />
              <Route path="/gallery" exact component={Gallery} />
              //users
              <Route path="/users/add" exact component={UserAdd} />
              <Route path="/users/edit/:id" exact component={UserEdit} />
              <Route path="/users" exact component={User} />
              // Websettings
              <Route
                path="/web_settings/banners/add"
                exact
                component={BannerAdd}
              />
              <Route
                path="/web_settings/banners/edit/:id"
                exact
                component={BannerEdit}
              />
              <Route path="/web_settings/banners" exact component={Banner} />
              <Route path="/web_settings/socials" exact component={Socials} />
              <Route path="/web_settings" exact component={WebSettings} />
              //
              <Route path="/news/categories" exact component={NewsCategories} />
              <Route path="/costs/costtypes" exact component={CostType} />
              <Route path="/menus" exact component={Menus} />
              <Route path="/menus/footer" exact component={FooterMenu} />
              // Pages
              <Route path="/pages/add" exact component={PageAdd} />
              <Route path="/pages/edit/:id" exact component={PageEdit} />
              <Route path="/pages" exact component={Page} />
              <Redirect to="/" />
            </Switch>
          </CookiesProvider>
        </ConfigProvider>
      ) : (
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/login" component={LoginPage} />
          <Redirect to="/login" />
        </Switch>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tokenError: state.tokenReducer.error,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    checkToken: (token) => dispatch(tokenCheck(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(App);
