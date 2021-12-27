import * as React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

import { Stack } from "@mui/material";
import Spot from "./Spots";

const TabsListData = [
  {
    lists: "Spot",
  },
  {
    lists: "Inverse Perpetual",
  },
  {
    lists: "USDT Perpetual",
  },
];

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: var(--onSurface);
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  background-color: transparent;
  width: max-content;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #e9ebfd;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #237ef;
    outline: none;
    background-color: #e9ebfd;
  }

  &.${tabUnstyledClasses.selected} {
    background: #e9ebfd;
    color: #237bef;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 1rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function MarketTrends() {
  return (
    <>
      <div class="mt-10">

      <TabsUnstyled defaultValue={0}>
        <div class="flex flex-wrap justify-between items-center ">
          <p className="onsurface text-xl font-bold">Market Trends</p>
          <TabsList>
            {TabsListData.map((item, idx) => {
              return (
                <Tab class="table_row_style" key={idx}>
                  {item.lists}
                </Tab>
              );
            })}
          </TabsList>
        </div>

        <TabPanel value={0}>
          <Spot />
        </TabPanel>
        <TabPanel value={1}>Second content</TabPanel>
        <TabPanel value={2}>Third content</TabPanel>
      </TabsUnstyled>
      </div>

    </>
  );
}
