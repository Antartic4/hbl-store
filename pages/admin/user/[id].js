import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import Layout from '../../../components/Layout';

export default function UserEditScreen({ children }) {
  return (
    <div>
      <Head>
        <title>MF Store</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>MF - Store</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
}
