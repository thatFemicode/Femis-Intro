import styled from "styled-components";

export const AboutStyled = styled.main`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 3rem;
  /* padding-left: 5rem;
  padding-right: 5rem; */
  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.max}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 2rem;
  }
  .about {
    &-header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      position: absolute;
      top: 0;
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
        @media (max-width: ${({ theme }) => theme.se}) {
          font-size: 0.8rem;
          letter-spacing: 0.1rem;
        }
      }
      img {
        @media (max-width: ${({ theme }) => theme.desktop}) {
          width: 40px;
        }
      }
    }
    &-content {
      position: relative;
      padding-top: 4rem;
      width: 100%;
      height: 100%;
      @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
        padding-top: 5rem;
      }
      @media (max-width: ${({ theme }) => theme.desktop}) {
        padding-top: 3rem;
      }

      .top-text {
        display: block;
        margin: 0 auto;
        position: relative;
        width: 100%;
        font-size: 3.5rem;
        /* letter-spacing: 0.4rem;
        text-transform: uppercase; */
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
          font-size: 2.8rem;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          font-size: 4.6rem;
          line-height: 1.6;
        }
        @media screen and (min-height: 1000px) and (max-height: 1180px) and (max-width: 820px) {
          font-size: 3.5rem;
          line-height: 1.6;
        }
        @media (max-width: ${({ theme }) => theme.text}) {
          font-size: 2.7rem;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 2.5rem;
        }
        @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
          font-size: 3.2rem;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          font-size: 2.3rem;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 2.1rem;
          -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          font-size: 1.8rem;
          -webkit-text-stroke: 1.2px rgba(0, 0, 0, 0.7);
        }
        @media screen and (min-height: 780px) and (max-height: 914px) and (max-width: 414px) {
          font-size: 2.3rem;
        }
        @media screen and (min-height: 780px) and (max-height: 852px) and (max-width: 393px) {
          font-size: 2rem;
        }
        @media (max-width: ${({ theme }) => theme.foot}) {
          font-size: 1.5rem;
          -webkit-text-stroke: 0.8px rgba(0, 0, 0, 0.7);
          /* max-width: 500px; */
        }
        @media screen and (min-height: 780px) and (max-height: 812px) and (max-width: 375px) {
          font-size: 1.9rem;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          font-size: 1.3rem;
          letter-spacing: 0.1rem;
        }
        @media screen and (min-height: 500px) and (max-height: 568px) and (max-width: 325px) {
          font-size: 1.2rem;
        }
        > div {
          display: block;
        }
      }

      .mid-text {
        position: absolute;
        display: block;
        margin: 0 auto;
        width: 100%;
        bottom: 10%;
        left: 25%;
        max-width: 600px;
        font-size: 2.3rem;
        clip-path: inset(0 0 0 0);
        z-index: 20;
        /* letter-spacing: 0.1rem; */
        -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
        transition: all 0.2s;
        line-height: 1.6;
        color: transparent;
        @media (max-width: ${({ theme }) => theme.kobe}) {
          font-size: 1.9rem;
          max-width: 500px;
        }
        @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
          font-size: 1.7rem;
          max-width: 450px;
          left: 30%;
          bottom: 0%;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          font-size: 2.4rem;
          line-height: 1.6;
          max-width: 650px;
          bottom: 15%;
          left: 25%;
        }

        @media (max-width: ${({ theme }) => theme.service}) {
          font-size: 1.6rem;
          max-width: 450px;
          bottom: 5%;
          left: 20%;
        }
        @media screen and (min-height: 1000px) and (max-height: 1180px) and (max-width: 820px) {
          font-size: 2rem;
          max-width: 550px;
          bottom: 20%;
          left: 25%;
        }
        @media (max-width: ${({ theme }) => theme.text}) {
          font-size: 1.6rem;
          left: 15%;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 1.5rem;
          left: 10%;
          max-width: 400px;
          bottom: 10%;
        }
        @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
          font-size: 1.9rem;
          max-width: 500px;
          bottom: 15%;
          left: 20%;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          font-size: 1.3rem;
          bottom: 12%;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 1.1rem;
          bottom: 20%;
          left: 25%;
          max-width: 300px;
          /* max-width: 300px; */
          -webkit-text-stroke: 0.8px rgba(0, 0, 0, 0.9);
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          font-size: 1.1rem;
          -webkit-text-stroke: 0.9px rgba(0, 0, 0, 0.7);
          max-width: 300px;
          bottom: 25%;
          left: 5%;
        }
        @media screen and (min-height: 780px) and (max-height: 914px) and (max-width: 414px) {
          bottom: 15%;
        }
        @media screen and (min-height: 780px) and (max-height: 812px) and (max-width: 375px) {
          bottom: 15%;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          font-size: 1rem;
          bottom: 17%;
        }
        @media screen and (min-height: 500px) and (max-height: 568px) and (max-width: 325px) {
          font-size: 0.9rem;
          bottom: 15%;
        }
      }
    }
    &-links {
      height: 100%;
      display: flex;
      justify-content: space-between;
      width: 200px;
      @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
        width: 300px;
      }
      @media screen and (min-height: 500px) and (max-height: 568px) and (max-width: 325px) {
        width: 150px;
      }
    }
  }
`;
