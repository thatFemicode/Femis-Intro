import styled from "styled-components";

export const ContactStyled = styled.main`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 3rem;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.max}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 2rem;
  }
  .contact {
    &-header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      position: absolute;
      top: 0;
      z-index: 10;
      svg {
        width: 20px;
        height: 20px;
        @media (max-width: ${({ theme }) => theme.desktop}) {
          width: 15px;
          height: 15px;
        }
      }
      h1 {
        text-transform: uppercase;
        /* mix-blend-mode: difference; */
        /* color: #fff; */
        font-size: 2rem;
        clip-path: inset(0 0 0 0);
        z-index: 20;
        letter-spacing: 0.8rem;
        -webkit-text-stroke: 2px rgba(0, 0, 0, 0.5);
        transition: all 0.2s;
        line-height: 1.6;
        color: transparent;
        @media (max-width: ${({ theme }) => theme.service}) {
          font-size: 1.5rem;
          -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 1.2rem;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          font-size: 0.9rem;
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
          letter-spacing: 0.4rem;
        }
        @media (max-width: ${({ theme }) => theme.foot}) {
          font-size: 0.9rem;
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
          letter-spacing: 0.2rem;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          font-size: 0.8rem;
          letter-spacing: 0.1rem;
        }
      }
    }
    &-content {
      position: relative;
      padding-top: 4rem;
      width: 100%;
      height: 100%;
      text-align: center;
      @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
        padding-top: 5rem;
      }
      @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
        padding-top: 12rem;
      }
      @media (max-width: ${({ theme }) => theme.desktop}) {
        padding-top: 3rem;
      }
      @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
        padding-top: 12rem;
      }

      p {
        display: block;
      }
      h1 {
        position: relative;
        width: 100%;
        font-size: 3.4rem;
        letter-spacing: 0.4rem;
        text-transform: uppercase;
        clip-path: inset(0 0 0 0);
        z-index: 20;
        /* letter-spacing: 0.1rem; */
        -webkit-text-stroke: 2px rgba(0, 0, 0, 0.5);
        transition: all 0.2s;
        line-height: 1.6;
        color: transparent;

        @media (max-width: ${({ theme }) => theme.kobe}) {
          font-size: 3rem;
        }
        @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
          font-size: 2.5rem;
        }
        @media (max-width: ${({ theme }) => theme.service}) {
          font-size: 2.7rem;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          font-size: 4rem;
          line-height: 1.6;
        }
        @media screen and (min-height: 1000px) and (max-height: 1180px) and (max-width: 820px) {
          font-size: 3.5rem;
          line-height: 1.6;
        }
        @media (max-width: ${({ theme }) => theme.text}) {
          font-size: 2.5rem;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 2.5rem;
        }
        @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
          font-size: 3rem;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          font-size: 2.3rem;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 2.1rem;
          -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          font-size: 1.65rem;
          -webkit-text-stroke: 1.2px rgba(0, 0, 0, 0.7);
        }
        @media screen and (min-height: 780px) and (max-height: 914px) and (max-width: 414px) {
          font-size: 1.9rem;
        }
        @media screen and (min-height: 780px) and (max-height: 852px) and (max-width: 393px) {
          font-size: 2rem;
        }
        @media (max-width: ${({ theme }) => theme.foot}) {
          font-size: 1.4rem;
          -webkit-text-stroke: 0.8px rgba(0, 0, 0, 0.7);
          /* max-width: 500px; */
        }
        @media screen and (min-height: 780px) and (max-height: 812px) and (max-width: 375px) {
          font-size: 1.7rem;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          font-size: 1.3rem;
          letter-spacing: 0.1rem;
        }
        @media screen and (min-height: 500px) and (max-height: 568px) and (max-width: 325px) {
          font-size: 1.2rem;
        }
        @media (max-width: ${({ theme }) => theme.vSmall}) {
          font-size: 1.2rem;
          letter-spacing: 0.1rem;
        }
        > div {
          display: block;
        }
      }
      .email {
        position: relative;
        width: 100%;
        font-size: 3.4rem;
        margin-top: 3rem;
        letter-spacing: 0.4rem;
        text-transform: uppercase;
        clip-path: inset(0 0 0 0);
        z-index: 20;
        /* letter-spacing: 0.1rem; */
        -webkit-text-stroke: 2px rgba(0, 0, 0, 0.5);
        transition: all 0.2s;
        line-height: 1.6;
        color: transparent;

        @media (max-width: ${({ theme }) => theme.kobe}) {
          font-size: 3rem;
        }
        @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
          font-size: 2.5rem;
        }
        @media (max-width: ${({ theme }) => theme.service}) {
          font-size: 2.7rem;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          font-size: 4rem;
          line-height: 1.6;
        }
        @media screen and (min-height: 1000px) and (max-height: 1180px) and (max-width: 820px) {
          font-size: 3.5rem;
          line-height: 1.6;
        }
        @media (max-width: ${({ theme }) => theme.text}) {
          font-size: 2.5rem;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 2.5rem;
        }
        @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
          font-size: 2.5rem;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          font-size: 2rem;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 1.5rem;
          -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          font-size: 1.15rem;
          letter-spacing: 0.3rem;
          -webkit-text-stroke: 1.2px rgba(0, 0, 0, 0.7);
        }
        @media (max-width: ${({ theme }) => theme.foot}) {
          font-size: 1rem;
          -webkit-text-stroke: 0.8px rgba(0, 0, 0, 0.7);
          /* max-width: 500px; */
        }

        @media (max-width: ${({ theme }) => theme.se}) {
          font-size: 1.3rem;
          letter-spacing: 0rem;
        }
        @media screen and (min-height: 500px) and (max-height: 568px) and (max-width: 325px) {
          font-size: 1rem;
        }
        @media (max-width: ${({ theme }) => theme.vSmall}) {
          font-size: 1.2rem;
          letter-spacing: 0.1rem;
        }
      }
      .time {
        position: relative;
        margin-top: 4rem;
        width: 100%;
        font-size: 2.9rem;
        letter-spacing: 0.3rem;
        text-transform: uppercase;
        clip-path: inset(0 0 0 0);
        z-index: 20;
        /* letter-spacing: 0.1rem; */
        -webkit-text-stroke: 2px rgba(0, 0, 0, 0.5);
        transition: all 0.2s;
        line-height: 1.6;
        color: transparent;

        @media (max-width: ${({ theme }) => theme.kobe}) {
          font-size: 2.6rem;
        }
        @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
          font-size: 2.2rem;
        }
        @media (max-width: ${({ theme }) => theme.service}) {
          font-size: 2.1rem;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          font-size: 3.5rem;
          line-height: 1.6;
        }
        @media screen and (min-height: 1000px) and (max-height: 1180px) and (max-width: 820px) {
          font-size: 3.2rem;
          line-height: 1.6;
        }
        @media (max-width: ${({ theme }) => theme.text}) {
          font-size: 2.1rem;
          margin-top: 4rem;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 2.1rem;
        }
        @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
          font-size: 2.6rem;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          font-size: 2rem;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 1.9rem;
          -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          font-size: 1.3rem;
          -webkit-text-stroke: 1.2px rgba(0, 0, 0, 0.7);
        }
        @media screen and (min-height: 780px) and (max-height: 914px) and (max-width: 414px) {
          font-size: 1.6rem;
        }
        @media screen and (min-height: 780px) and (max-height: 852px) and (max-width: 393px) {
          font-size: 1.8rem;
        }
        @media (max-width: ${({ theme }) => theme.foot}) {
          font-size: 1.1rem;
          -webkit-text-stroke: 0.8px rgba(0, 0, 0, 0.7);
          /* max-width: 500px; */
        }
        @media screen and (min-height: 780px) and (max-height: 812px) and (max-width: 375px) {
          font-size: 1.3rem;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          font-size: 1rem;
          letter-spacing: 0.1rem;
        }
        @media screen and (min-height: 500px) and (max-height: 568px) and (max-width: 325px) {
          font-size: 0.9rem;
        }
        @media (max-width: ${({ theme }) => theme.vSmall}) {
          font-size: 0.9rem;
          letter-spacing: 0.1rem;
        }
      }
      .confused {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        position: relative;
        bottom: -150px;
        @media (max-width: ${({ theme }) => theme.dont}) {
          flex-direction: column;
        }
        @media screen and (min-height: 500px) and (max-height: 800px) and (max-width: 1280px) {
          bottom: -50px;
        }

        p {
          font-size: 2rem;
          text-transform: uppercase;
          clip-path: inset(0 0 0 0);
          z-index: 20;
          /* letter-spacing: 0.1rem; */
          -webkit-text-stroke: 2px rgba(0, 0, 0, 0.5);
          transition: all 0.2s;
          line-height: 1.6;
          color: transparent;
          @media (max-width: ${({ theme }) => theme.kobe}) {
            font-size: 1.6rem;
          }
          @media (max-width: ${({ theme }) => theme.dont}) {
            font-size: 1.3rem;
            -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.7);
          }
          @media (max-width: ${({ theme }) => theme.make}) {
            font-size: 1rem;
            -webkit-text-stroke: 0.8px rgba(0, 0, 0, 0.7);
            margin-bottom: 2rem;
            /* max-width: 500px; */
          }
        }
      }
    }
  }
`;
