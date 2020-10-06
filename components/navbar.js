import styled from "@emotion/styled";

export const Navbar = styled("div")`
  & > * {
    margin-left: 1em;
    color: white;
  }
  background: black;
  padding: 1em;
  padding-bottom: 1em;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PageBody = styled("div")`
  width: 100%;
  height: 100%;
  padding: 2em;
`;
