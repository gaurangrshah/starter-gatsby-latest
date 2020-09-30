import React from "react"
import {
  Accordion,
  Tabs as CHTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/core"

export const Tabs = ({ list = [], panels }) => {
  console.log("⭕️panels: Tabs", panels)

  return (
    <CHTabs>
      <TabList>
        {list?.map((item, i) => (
          <Tab key={i} children={item} />
        ))}
      </TabList>

      <TabPanels>
        {panels?.map((panel, i) => (
          <TabPanel key={i} children={panel} />
        ))}
      </TabPanels>
    </CHTabs>
  )
}
