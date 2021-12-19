import styled from "styled-components";
import colors from "../../../../configurations/colors.config";

const StyledNavigationHeader = styled.nav`
  background: ${colors.onSurface};
  color: #fff;
  display: flex;
  align-items center;
  row-gap: 10px;
  .nav-link {
    // padding: 16px;
    outline: 1px solid white;
  }
  .middle-nav {
    display: flex;
    align-items: center;
  }

  .right-nav {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;
export default StyledNavigationHeader;
