import React from "react"

import {
  test,
  component,
  BaseContainer,
  Block,
  Content,
  Row,
  StarsStripes,
  SmartRow,
} from "../components"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

const TestPage = () => (
  <DefaultLayout>
    <BaseContainer fluid {...test("green", 4)} mt={1}>
      <Content {...test("blue")}>
        <SmartRow fluid responsive columns={3} {...test("yellow")}>
          <Block background="blue" {...test(true, 6)} />
          <Block background="blue" {...test(true, 6)} />
          <Block background="blue" {...test(true, 6)} />
          <Block background="blue" {...test(true, 6)} />
          <Block background="blue" {...test(true, 6)} />
          <Block background="blue" {...test(true, 6)} />
          <Block background="blue" {...test(true, 6)} />
          <Block background="blue" {...test(true, 6)} />
          <Block background="blue" {...test(true, 6)} />
        </SmartRow>
      </Content>
    </BaseContainer>
    <BaseContainer fluid {...test("green", 4)}>
      <Content {...test("blue")}>
        <Row fluid reponsive>
          <Block
            // background="blue"
            {...test(true, 6)}
            {...component.flex?.col2Flex}
          >
            {/* <Row fluid responsive>
              <Block background="blue" {...test(true, 6)} {...component.flex?.col2Flex} />
              <Block background="blue" {...test(true, 6)} {...component.flex?.col2Flex} />
            </Row> */}
            <StarsStripes />
          </Block>
          <Block
            background="blue"
            {...test(true, 6)}
            {...component.flex?.col2Flex}
            p={0}
            m={0}
          >
            <Row fluid responsive>
              <Block
                background="blue"
                {...test(true, 6)}
                {...component.flex?.col2Flex}
              />
              <Block
                background="blue"
                {...test(true, 6)}
                {...component.flex?.col2Flex}
              />
            </Row>
          </Block>
        </Row>
      </Content>
    </BaseContainer>
    <BaseContainer fluid {...test("green", 4)}>
      <Content {...test("blue")}>
        <Row fluid responsive>
          <Block fluid {...component.flex?.col2Flex} {...test(true, 6)} />
          <Row fluid {...component.flex?.col2Flex}>
            <Block fluid {...test(true, 6)} />
            <Block fluid {...test(true, 6)} />
          </Row>
        </Row>
      </Content>
    </BaseContainer>
  </DefaultLayout>
)

export default TestPage
