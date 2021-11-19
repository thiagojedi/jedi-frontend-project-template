import { NextPage } from 'next';
import { MainLayout } from '../modules/application/main-layout';

const HomePage: NextPage = () => (
  <MainLayout>
    <p>This should be the content of the page</p>
  </MainLayout>
);

export default HomePage;
