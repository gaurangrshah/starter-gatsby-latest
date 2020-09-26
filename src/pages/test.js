import React from "react"

import {
  BaseContainer,
  Block,
  component,
  Content,
  SmartRow,
  Row,
  test,
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
            background="blue"
            {...test(true, 6)}
            {...component.flex?.col2Flex}
          >
            {/* <Row fluid responsive>
              <Block background="blue" {...test(true, 6)} {...component.flex?.col2Flex} />
              <Block background="blue" {...test(true, 6)} {...component.flex?.col2Flex} />
            </Row> */}
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
          <Block {...component.flex?.col2Flex} {...test(true, 6)} />
          <Row fluid w={"50%"}>
            <Block fluid w="100%" {...test(true, 6)} />
            <Block fluid w="100%" {...test(true, 6)} />
          </Row>
        </Row>
      </Content>
    </BaseContainer>
  </DefaultLayout>
)

export default TestPage
