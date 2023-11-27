import styled from "styled-components";

const Wrapper = styled.nav`
  // background: #1d000d;
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }
  .nav-center img {
    // font-size: clamp(1.5rem, 3vw, 3rem);
    // color: var(--primary-500);
    // font-weight: 700;
    // letter-spacing: 2px;
    max-width: 25%;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 2px;
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      justify-content: space-between;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;

export default Wrapper;
