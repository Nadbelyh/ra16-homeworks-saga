import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SearchInput from "./components/search/searchInput";
import SearchItems from "./components/search/searchList";
import DetailsList from "./components/details/detailsList";
import Detail from "./components/details/detail";

import { getServicesRequest } from "./app/slices/detailsSlice";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServicesRequest());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="column">
        <div className="lable">Поиск</div>
        <div>
          <SearchInput></SearchInput>
          <SearchItems></SearchItems>
        </div>
      </div>
      <div className="column">
        <div className="lable">Список и детали</div>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <DetailsList />
                  <Outlet />
                </div>
              }
            >
              <Route path="/:id/details" element={<Detail />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
