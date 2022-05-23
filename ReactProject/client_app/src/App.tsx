import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import * as Page from './pages';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
      <div>
          <Provider store={store}>
              <Routes>
                  <Route path="/" element={<Page.Home />} />
                  <Route path="/ReduxTest" element={<Page.ReduxTest />} />
                  <Route path="/TeamWork/List" element={<Page.TeamWorkList />} />
                  <Route path="/TeamWork/Detail/:id" element={<Page.TeamWorkDetail />} />
                  <Route path="/Chart/SimpleLineChart" element={<Page.SimpleLineChart />} />
                  <Route path="/Chart/SimpleAreaChart" element={<Page.SimpleAreaChart />} />
                  <Route path="/Chart/SimpleBarChart" element={<Page.SimpleBarChart />} />
                  <Route path="/Chart/LineBarAreaComposedChart" element={<Page.LineBarAreaComposedChart />} />
                  <Route path="/Chart/SimpleScatterChart" element={<Page.SimpleScatterChart />} />
                  <Route path="/Chart/PieChartWithCustomizedLabel" element={<Page.PieChartWithCustomizedLabel />} />
                  <Route path="/Chart/SimpleRadarChart" element={<Page.SimpleRadarChart />} />
                  <Route path="/MUI/AutocompletePage" element={<Page.AutocompletePage />} />
                  <Route path="/MUI/ButtonPage" element={<Page.ButtonPage />} />
                  <Route path="/MUI/CheckboxPage" element={<Page.CheckboxPage />} />
                  <Route path="/MUI/RadioPage" element={<Page.RadioPage />} />
                  <Route path="/MUI/RatingPage" element={<Page.RatingPage />} />
                  <Route path="/MUI/SelectPage" element={<Page.SelectPage />} />
                  <Route path="/MUI/SliderPage" element={<Page.SliderPage />} />
                  <Route path="/MUI/SwitchPage" element={<Page.SwitchPage />} />
                  <Route path="/MUI/TextFieldPage" element={<Page.TextFieldPage />} />
                  <Route path="/MUI/TransferListPage" element={<Page.TransferListPage />} />
                  <Route path="/MUI/ToggleButtonPage" element={<Page.ToggleButtonPage />} />
                  <Route path="/MUI/AvatarPage" element={<Page.AvatarPage />} />
                  <Route path="/MUI/BadgePage" element={<Page.BadgePage />} />
                  <Route path="/MUI/ChipPage" element={<Page.ChipPage />} />
                  <Route path="/MUI/DividerPage" element={<Page.DividerPage />} />
                  <Route path="/MUI/ListPage" element={<Page.ListPage />} />
                  <Route path="/MUI/TablePage" element={<Page.TablePage />} />
                  <Route path="/MUI/TooltipPage" element={<Page.TooltipPage />} />
                  <Route path="/MUI/AlertPage" element={<Page.AlertPage />} />
                  <Route path="/MUI/BackdropPage" element={<Page.BackdropPage />} />
                  <Route path="/MUI/DialogPage" element={<Page.DialogPage />} />
                  <Route path="/MUI/ProgressPage" element={<Page.ProgressPage />} />
                  <Route path="/MUI/SkeletonPage" element={<Page.SkeletonPage />} />
                  <Route path="/MUI/SnackbarPage" element={<Page.SnackbarPage />} />
                  <Route path="/MUI/AccordionPage" element={<Page.AccordionPage />} />
                  <Route path="/MUI/AppbarPage" element={<Page.AppbarPage />} />
                  <Route path="/MUI/CardPage" element={<Page.CardPage />} />
                  <Route path="/MUI/PaperPage" element={<Page.PaperPage />} />
                  <Route path="/MUI/ButtonNavigationPage" element={<Page.ButtonNavigationPage />} />
                  <Route path="/MUI/BreadcrumbsPage" element={<Page.BreadcrumbsPage />} />
              </Routes>
          </Provider>
    </div>
  );
}

export default App;
