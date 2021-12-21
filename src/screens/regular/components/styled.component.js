import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import styled from "styled-components";
import { colors } from "../../../configurations/colors.config";

export const Tabs = styled(TabsUnstyled)``;

export const Tab = styled(TabUnstyled)`
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  padding: 8px 24px;
  border: none;
  border-radius: 8px;
  display: flex;
  color: ${colors.secondary2?.main};
  &.${tabUnstyledClasses.selected} {
    background-color: ${colors.primary?.main}1a;
    color: ${colors.primary?.main};
  }
`;

export const TabsList = styled(TabsListUnstyled)`
  border-radius: 8px;
  margin-bottom: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  align-content: space-between;
  width: 100%;
  padding: 0;
`;

export const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 0.875rem;
`;

export const StyledCard = styled.div`
  background: #ffffff;
  padding: 24px;
  /* Drop small */
  box-shadow: 0px 2px 5px rgba(28, 36, 51, 0.1);

  .card-icon {
    width: 48px;
    height: 48px;
  }
  .card-headline {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: ${colors.onSurface.main};
    text-transform: capitalize;
    margin: 16px auto 8px;
  }
  .card-description {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: ${colors.secondary.main};
    text-align: center;
  }
`;
