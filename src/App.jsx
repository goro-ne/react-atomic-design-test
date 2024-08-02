import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { HeaderOnly } from './components/templates/HeaderOnly';
import { Header } from './components/atoms/layout/Header';
import { DefaultLayout } from './components/templates/DefaultLayout';

const user = {
  name: "山田裕一",
  image: "https://media.istockphoto.com/id/2153160662/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/young-man-portrait.jpg?s=1024x1024&w=is&k=20&c=Ncb2GPMMauHpHMXNTpqpiDPJJ-_gN8RarJrpTrbbhmc=",
  email: "yuichi-yamada@test.com",
  phone: "090-1111-1111",
  company: {
    name: "テスト株式会社",
    website: "https://google.com"

  }
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <DefaultLayout>
              <PrimaryButton>テスト</PrimaryButton>
              <SecondaryButton>検索</SecondaryButton>
              <br />
              <SearchInput />
              <UserCard user={user} />              
            </DefaultLayout>
          } />
          <Route path="/users" element={<Header />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
