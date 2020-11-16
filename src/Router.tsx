import React, { FC } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import {
  GiftDetail,
  GiftEdit,
  GiftList,
  RotoryDetail,
  RotoryList,
  RotoryOn,
  TopPage,
  WinnerDetail,
  WinnerEdit,
  WinnerList,
} from './templates/index';
import { Header } from './components/Header';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* Top Page */}
        <Route exact path="(/)?" component={TopPage} />

        {/* Winner Page */}
        <Route exact path="/winner" component={WinnerList} />
        <Route path="/winner/edit(/:id)?" component={WinnerEdit} />
        <Route exact path="/winner/:id" component={WinnerDetail} />

        {/* Gift Page */}
        <Route exact path="/gift" component={GiftList} />
        <Route path="/gift/edit(/:id)?" component={GiftEdit} />
        <Route exact path="/gift/:id" component={GiftDetail} />

        {/* Rotory Page */}
        <Route exact path="/rotory-on" component={RotoryOn} />
        <Route exact path="/rotory" component={RotoryList} />
        <Route path="/rotory/:id" component={RotoryDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
