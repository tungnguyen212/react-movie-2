import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image}), var(--darkGrey);
  background-size: 100% cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHeroImage 1s;

  @keyframe animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }
`;
export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  marign: 0 auto;
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  bottom: 40px;
  position: absolute;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);
  h1 {
    font-size: var(--fontsuperBig);
    @media screen and(max-width:720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    font-size: var(--fontMed);
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }
  @media screen and (max-width: 720px) {
    max-width: 100%;
  } ;
`;
