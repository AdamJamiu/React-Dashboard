import styled from "styled-components";
import { palette as colors } from "../../../../configurations/colors.config";

const StyledNavigationHeader = styled.nav`
  background: ${colors.onSurface?.main};
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 30px;

  .logo-container {
    padding: 10px 30px;
  }

  .nav--link {
    &.highlighted {
      background: ${colors?.warning?.main};
      color: ${colors.onSurface?.main};
      padding-left: 20px;
      padding-right: 20px;
    }
    a {
      font-size: 15px;
      padding: 15px 4px;
      display: inline-flex;
      gap: 4px;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 24px;
      text-transform: capitalize;
    }
  }
  .middle-nav {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .right-nav {
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 10px;
  }
`;
export default StyledNavigationHeader;
