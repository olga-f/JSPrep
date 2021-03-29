import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { addApolloState, initializeApollo } from '../lib/graphql/apolloClient';

import { UNIT_LIST } from '../lib/graphql/queries';
import {HomeUnitList} from '../sections/Home/components';


const HomePage = (): JSX.Element => (
  <div title="Users List | Next.js + TypeScript Example">
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
    <HomeUnitList/>
  </div>
)


export default HomePage

