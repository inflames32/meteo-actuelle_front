import React from "react";
import { connect } from "react-redux";
import Header from "../Header";
import SearchBar from "../SearchBar";
import Weather from "../Weather";
import Footer from "../Footer";
//import "../../styles/homepage.scss";
import breakpoint from "../../Commons/breakpoint";
import styled from "styled-components";

const HomepageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: auto;
  font-family: "Calibri", sans-serif;
  font-size: 1.2em;
`;
const HomepageBody = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    padding-top: 6vh;
    width: 100%;
    margin: auto;
    min-height: 85vh;
    background-color: white;
    display: flex;
    flex-direction: column;
  }

  @media only screen and ${breakpoint.device.lg} {
    display: flex;
  }
  /* width: 100%;
  background-color: #122229;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 9vh;
  line-height: 9vh;
  align-items: center; */
`;

const Homepage = () => (
  <HomepageContainer>
    <Header />
    <HomepageBody>
      <SearchBar />
      <Weather />
    </HomepageBody>
    <Footer />
  </HomepageContainer>
);
const mapState = (state) => ({
  APISuccessUseEffect: state.user.APISuccessUseEffect,
  APISuccessUseEffectLoading: state.user.APISuccessUseEffectLoading,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Homepage);
