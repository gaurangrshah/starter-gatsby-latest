import React from "react"
import {
  Tabs as CHTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/core"

export const Tabs = ({ list = [], panels }) => {
  // console.log("⭕️panels: Tabs", panels)

  return (
    <CHTabs>
      <TabList
        position="fixed"
        top={"4em"}
        left={0}
        background="white"
        w={"100%"}
        py={"sm"}
        zIndex="docked"
      >
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
