import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import WithLayout from 'WithLayout';

// Available layouts
import { BrickMmo as BrickMmoLayout } from './layouts';

import {
  Home as HomeView,
  Education as EducationView,
  Research as ResearchView,
  Contact as ContactView,
  Portfolio as PortfolioView,
  PortfolioCdmo as PortfolioCdmoView,
  PortfolioLogos as PortfolioLogosView,
  PortfolioSmartCity as PortfolioSmartCityView,

  // Systems as SystemsView,
  // SystemPanel as SystemPanelView,
  // SystemsColours as SystemsColoursView,
  // GetStarted as GetStartedView,
} from './views/pages';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        exact
        path="/"
        element={((matchProps) => (
          <WithLayout
            title="Home"
            {...matchProps}
            component={HomeView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/education"
        element={((matchProps) => (
          <WithLayout
            title="Education"
            {...matchProps}
            component={EducationView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/research"
        element={((matchProps) => (
          <WithLayout
            title="Research"
            {...matchProps}
            component={ResearchView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/contact"
        element={((matchProps) => (
          <WithLayout
            title="Contact"
            {...matchProps}
            component={ContactView}
            layout={BrickMmoLayout}
          />
        ))()}
      />

      <Route
        exact
        path="/portfolio"
        element={((matchProps) => (
          <WithLayout
            title="Portfolio"
            {...matchProps}
            component={PortfolioView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/portfolio-smart-city"
        element={((matchProps) => (
          <WithLayout
            title="Smart City"
            {...matchProps}
            component={PortfolioSmartCityView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/portfolio-bio-2024"
        element={((matchProps) => (
          <WithLayout
            title="Bio 2024"
            {...matchProps}
            component={PortfolioCdmoView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/portfolio-logos"
        element={((matchProps) => (
          <WithLayout
            title="Logos"
            {...matchProps}
            component={PortfolioLogosView}
            layout={BrickMmoLayout}
          />
        ))()}
      />

      {/* <Route
        exact
        path="/systems"
        element={((matchProps) => (
          <WithLayout
            title="Systems"
            {...matchProps}
            component={SystemsView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/get-started"
        element={((matchProps) => (
          <WithLayout
            title="Get Started"
            {...matchProps}
            component={GetStartedView}
            layout={BrickMmoLayout}
          />
        ))()}
      /> */}
    </ReactRoutes>
  );
};

export default Routes;
