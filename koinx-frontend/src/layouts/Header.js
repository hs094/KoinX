import React from 'react';
import styled from 'styled-components';
const Header  = () => {
    return (
        <Bar>
            <Logo>
                <img src="/logos/koinx-logo.svg"/>
            </Logo>
            <Menu>
                <Nav>
                    <MenuItem>Crypto Taxes</MenuItem>
                    <MenuItem>Free Tools</MenuItem>
                    <MenuItem>Resource Center</MenuItem>
                </Nav>
                <ButtonDiv>
                    <Button>
                        <ButtonText>
                            Get Started
                        </ButtonText>
                    </Button>
                </ButtonDiv>
            </Menu>
        </Bar>
    );
};

const Bar = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 1440px;
    height: 80px;
    left: 0px;
    top: 0px;

    background: #FFFFFF;
    border-bottom: 1px solid #DEDFE2;
    /* box-shadow1 */
    box-shadow: 0px 0px 12px rgba(16, 38, 73, 0.06);
`;

const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 72px;

    position: absolute;
    width: 96px;
    height: 72px;
    left: 60px;
    top: 4px;
`;

const Menu = styled.div`
    /* Frame 26860 */
    position: absolute;
    width: 909px;
    height: 79px;
    left: 475px;
    top: 0.5px;
`;

const Nav = styled.nav`
    /* Frame 1000004775 */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 32px;

    position: absolute;
    width: 728px;
    height: 79px;
    left: 0.15px;
    top: -0.5px;
`;

const ButtonDiv = styled.div`
    /* Frame 26853 */

    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 6px;

    position: absolute;
    width: 136px;
    height: 70px;
    right: -0.15px;
    top: 4.5px;
`;

const Button = styled.button`
    /* Frame 26887 */

    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: 136px;
    height: 40px;

    /* Gradients/Primary */
    background: linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`;

const ButtonText = styled.p`
    /* Get Started */
    width: 89px;
    height: 19px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.01em;

    /* Gray/White */
    color: #FFFFFF;

    // border: 1px solid #000000;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`;

const MenuItem = styled.a`
    /* Frame 26850 */
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 6px;

    width: 102px;
    height: 79px;

    background: #FFFFFF;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

`;
export default Header;

