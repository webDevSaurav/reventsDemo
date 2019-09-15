import React from "react";
import { Grid } from "semantic-ui-react";
import SettingNav from "./SettingNav";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AccountPage from "./AccountPage";
import { Route, Redirect, Switch } from "react-router-dom";

const SettingDashboard = () => {
  return (
    <div>
      <Grid>
        <Grid.Column width={12}>
          <Switch>
            <Redirect exact from='/settings' to='/settings/basic' />
            <Route path='/settings/basic' component={BasicPage} />
            <Route path='/settings/about' component={AboutPage} />
            <Route path='/settings/photos' component={PhotosPage} />
            <Route path='/settings/account' component={AccountPage} />
          </Switch>
        </Grid.Column>
        <Grid.Column width={4}>
          <SettingNav />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default SettingDashboard;
