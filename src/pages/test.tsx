import * as React from 'react';
import { Header, Icon, Grid } from 'semantic-ui-react';

export default () => (
  <Grid centered verticalAlign="middle">
    <Grid.Column>
      <Grid.Row>
        <Icon name="configure" size="huge" />
        <Header as="h1">Test page</Header>
        <Header as="h2">Under construction</Header>
      </Grid.Row>
    </Grid.Column>
  </Grid>
);
