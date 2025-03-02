import React from 'react';
import styled from 'styled-components';

const GetStarted = () => {
    return (
        <Container>
            <Box>
                <TitleHolder>
                    <Title>
                        Get Started with KoinX for FREE
                    </Title>
                    <Desc>
                        With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
                    </Desc>
                </TitleHolder>
                <Logo>
                    <img src="/logos/getStarted.svg" alt="Get Started" />
                </Logo>
                <Button>
                    <ButtonText>
                        <TextHolder>
                            Get Started for FREE
                        </TextHolder>
                        <img src="/logos/rightArrow.svg" alt="Right Arrow" />
                    </ButtonText>
                </Button>
            </Box>
        </Container>
    );
};

export default GetStarted;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 30px;
    width: 100%;
    max-width: 426px;
    height: auto;
    border-radius: 16px;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 31px 16px;
    gap: 19px;
    width: 100%;
    height: 100%;
    background: #0052FE;
    border-radius: 8px;
`;

const TitleHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 14px;
    width: 100%;
`;

const Title = styled.div`
    width: 100%;
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: #FFFFFF;

    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 32px;
    }
`;

const Desc = styled.div`
    width: 100%;
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #F2F2F2;

    @media (max-width: 768px) {
        font-size: 12px;
        line-height: 20px;
    }
`;

const Logo = styled.div`
    width: 178.66px;
    height: 166.22px;

    @media (max-width: 768px) {
        width: 150px;
        height: 140px;
    }
`;

const Button = styled.div`
    width: 100%;
    max-width: 237px;
    height: 48px;
`;

const ButtonText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 8px;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border-radius: 8px;
`;

const TextHolder = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 6px;
    width: auto;
    height: 28px;
    color: #0F1629;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 17px;
    }
`;