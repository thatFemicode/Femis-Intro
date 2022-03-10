import styled from "styled-components";

export const HomeStyled = styled.main`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 3rem;
  @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
    overflow: auto;
  }
  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.max}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .home {
    &-header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      position: absolute;
      top: 0;
      p {
        text-transform: uppercase;
        /* mix-blend-mode: difference; */
        /* color: #fff; */
        clip-path: inset(0 0 0 0);
        z-index: 20;
        letter-spacing: 0.8rem;
        -webkit-text-stroke: 1px rgba(0, 0, 0, 5);
        transition: all 0.2s;
        line-height: 1.6;
        @media (max-width: ${({ theme }) => theme.dont}) {
          font-size: 0.9rem;
          letter-spacing: 0.4rem;
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 0.8rem;
          letter-spacing: 0.4rem;
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          font-size: 0.7rem;
          letter-spacing: 0.8rem;
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          font-size: 0.7rem;
          letter-spacing: 0.6rem;
        }
        @media (max-width: ${({ theme }) => theme.foot}) {
          font-size: 0.7rem;
          letter-spacing: 0.4rem;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          font-size: 0.6rem;
          letter-spacing: 0.4rem;
        }
      }
    }
    &-content {
      height: 100%;
      padding-top: 5rem;
      @media (max-width: ${({ theme }) => theme.images}) {
        padding-top: 3rem;
      }
      @media (max-width: ${({ theme }) => theme.max}) {
        padding-top: 5rem;
      }
      h1 {
        clip-path: inset(0 0 0 0);
        z-index: 20;
        color: #000;
        font-size: 4rem;
        font-weight: 900;
        -webkit-text-stroke: 3px rgba(0, 0, 0, 0.6);
        transition: all 0.2s;
        color: transparent;
        letter-spacing: 0.4rem;
        @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
          font-size: 3.4rem;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 3.5rem;
          letter-spacing: 0.4rem;
          -webkit-text-stroke: 2.5px rgba(0, 0, 0, 0.5);
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 3rem;
          font-weight: 1100;
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          font-size: 2rem;
          letter-spacing: 0.6rem;
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.8);
        }
        @media (max-width: ${({ theme }) => theme.foot}) {
          font-size: 1.8rem;
          letter-spacing: 0.4rem;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          font-size: 1.6rem;
          letter-spacing: 0.1rem;
        }
      }
      p {
        font-size: 7.5rem;
        clip-path: inset(0 0 0 0);
        font-weight: 900;
        -webkit-text-stroke: 3px rgba(0, 0, 0, 0.7);
        color: transparent;
        transition: all 0.2s;
        text-transform: uppercase;
        @media (max-width: ${({ theme }) => theme.mins}) {
          font-size: 7rem;
        }
        @media (max-width: ${({ theme }) => theme.dont}) {
          font-size: 5.5rem;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          font-size: 9rem;
          line-height: 1.6;
        }
        @media screen and (min-height: 1000px) and (max-height: 1180px) and (max-width: 820px) {
          font-size: 7rem;
        }
        @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
          font-size: 5.5rem;
        }

        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 4.5rem;
          letter-spacing: 0.4rem;
          -webkit-text-stroke: 3px rgba(0, 0, 0, 0.6);
        }
        @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
          font-size: 6.5rem;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          font-size: 4rem;
          font-weight: 1100;
          line-height: 1.6;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 4rem;
          font-weight: 1100;
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          font-size: 3.4rem;
          letter-spacing: 0.1rem;
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.8);
          line-height: 1.6;
        }
        @media (max-width: ${({ theme }) => theme.foot}) {
          font-size: 3rem;
          letter-spacing: 0.1rem;
          line-height: 2.1;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          font-size: 2.6rem;
          letter-spacing: 0.1rem;
        }
      }
    }
  }
`;
