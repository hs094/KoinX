import logo from './logo.svg';
import './App.css';
import Header from './layouts/Header';
import MainPath from './components/Blocks/MainPath';
import GetStarted from './components/Blocks/GetStarted';
import InfoBox from './components/Cards/InfoBox/InfoBox';
import MainBody from './layouts/MainBody'; 

import styled from 'styled-components';
function App() {
  return (
    <div>
      <Header />
      <MainPath />
      <Body>
        <Main>
          <MainBody />
        </Main>
        <SideBar>
          <GetStarted />
          <InfoBox />
        </SideBar>
      </Body>
    </div>
  );
}

const Body = styled.div`
  /* div */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 20px;

position: absolute;
width: 1328px;
height: 4399px;
left: 56px;
top: 132px;
`;


const Main = styled.div`

/* Frame 1000004802 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 20px;

width: 881px;
height: 2287px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
`;

const SideBar = styled.div`
/* div */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 820.516px;
gap: 20px;

width: 427px;
height: 1923px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

`;

export default App;
