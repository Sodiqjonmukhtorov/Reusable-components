import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { MainLayout } from "./layout/main-layout";
import { About } from "./pages/about/about";
// nested routing
import { Blog } from "./pages/about/components/blog";
import { Info } from "./pages/about/components/info";
import { Users } from "./pages/about/components/users";
import React from "react";
import { Button } from "./components/ui/button/button";
import { Icon } from "./assets/icon";
import { Input } from "./components/ui/input/input";

function App() {
  return (
    <>
      <Button startIcon={<Icon />} variant="primary" type="submit">
        Click
      </Button>
      <Button endIcon={<Icon />} variant="secondary">
        Click
      </Button>
      <Button startIcon={<Icon />} endIcon={<Icon />} variant="danger">
        Click
      </Button>

      <Input variant="secondary" type="email" />
      <Input type="password" variant="primary" />
      <Input variant="danger" type="text" />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route index element={<Users />} />
            <Route path="blog" element={<Blog />} />
            <Route path="info" element={<Info />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
