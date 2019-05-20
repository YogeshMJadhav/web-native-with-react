import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Distributor from './pages/distributor';
import RootInfo from './pages/rootInfo';
import { Layout } from 'antd';
import 'antd/dist/antd.css'; 
import CSVUpload from './pages/csvupload';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Header>
         Header
      </Header>
        <Content>
          <Route exact path ="/" component={ Home } />
          <Route exact path ="/login" component={ Login } />
          <Route exact path ="/distributor" component={ Distributor } />
          <Route exact path ="/rootnumber" component={ RootInfo } />
          <Route exact path ="/csv" component={ CSVUpload } />


        </Content> 
      <Footer>Footer</Footer>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
