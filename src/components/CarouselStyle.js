import styled from "styled-components";

const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Fwrap = styled.div`
  padding: 2em 1em;
  background: papayawhip;
`;

export { breakpoints, Fwrap };
