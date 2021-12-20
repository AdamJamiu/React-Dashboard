import styled from "styled-components";
import { colors } from "../../../../configurations/colors.config";

const StyledNavigationHeader = styled.nav`
  background: ${colors.onSurface};
  color: #fff;
  display: flex;
  align-items center;
  gap: 15px;
  a{
    padding: 10px 20px;
  }
  .nav-link {
    // padding: 16px
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
