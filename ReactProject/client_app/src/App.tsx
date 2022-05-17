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
                  <Route path="/MUI/InputPage" element={<Page.InputPage />} />
                  </Routes>
          </Provider>
    </div>
  );
}

export default App;
