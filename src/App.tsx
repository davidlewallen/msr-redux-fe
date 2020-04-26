import React, { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { Routes } from "./components/routes";
import { AppHeader } from "./components/app-header";
import { MobileNavigation } from "./components/mobile-navigation";

const { Footer } = Layout;

const App = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <BrowserRouter>
      <Layout className="app-layout">
        <AppHeader
          isMobileNavOpen={isMobileNavOpen}
          setIsMobileNavOpen={setIsMobileNavOpen}
        />
        <MobileNavigation
          isMobileNavOpen={isMobileNavOpen}
          setIsMobileNavOpen={setIsMobileNavOpen}
        />
        <Routes />
        <Footer className="app-layout-footer">Testing</Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
