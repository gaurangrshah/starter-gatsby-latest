import React from "react"
import { Box, Flex, Tag } from "@chakra-ui/core"
import { component } from "../components"

import { BaseContainer } from "../layout"

const IndexBox = ({ title, zIndex, children }) => (
  <Box
    bg={"blue"}
    {...component.box.fixedWidth}
    zIndex={zIndex}
    flex={1}
    m={1}
    mx="auto"
    minH="100px"
    p={"2%"}
    color="rgba(0,0,0,0.4)"
    border="0.5px solid rgba(0,0,0,0.1)"
    textAlign="right"
    fontSize="sm"
  >
    {`${title}: ${zIndex}`}
    {children}
  </Box>
)

export const ZIndices = ({ zIndices }) => {
  console.log("zindices", zIndices)
  return (
    <BaseContainer fluid my={12} minH="20vh" mx="auto">
      <Flex flexWrap="wrap">
        {Object.entries(zIndices).map((zIndex, i) => (
          <Tag key={i} mt={2}>
            {zIndex}
          </Tag>
        ))}
      </Flex>
      <IndexBox title="hide" zIndex={-1}>
        <IndexBox title="auto" zIndex={"auto"}>
          <IndexBox title="base" zIndex={0}>
            <IndexBox title="docked" zIndex={10}>
              <IndexBox title="dropdown" zIndex={1000}>
                <IndexBox title="sticky" zIndex={1100}>
                  <IndexBox title="banner" zIndex={1200}>
                    <IndexBox title="overlay" zIndex={1300}>
                      <IndexBox title="modal" zIndex={1400}>
                        <IndexBox title="popover" zIndex={1500}>
                          <IndexBox title="skipLink" zIndex={1600}>
                            <IndexBox title="toast" zIndex={1700}>
                              <IndexBox
                                title="tooltip"
                                zIndex={1800}
                              ></IndexBox>
                            </IndexBox>
                          </IndexBox>
                        </IndexBox>
                      </IndexBox>
                    </IndexBox>
                  </IndexBox>
                </IndexBox>
              </IndexBox>
            </IndexBox>
          </IndexBox>
        </IndexBox>
      </IndexBox>
    </BaseContainer>
  )
}
