import { FlexBox, Markdown, Notes, Slide, Text } from "spectacle";
// @ts-ignore
import syllabus from './syllabus.md?raw'
import React from "react";

export const Syllabus = () => {

  return (
    <Slide>
      <FlexBox margin={'auto'} width={'100%'} justifyContent={'flex-start'}>
        <Markdown>
          {syllabus}
        </Markdown>
        <Notes>
          <Text>
            我准备了三个例子，这三个例子都不太完美，有些内容涉及高中的对数，有些甚至涉及到大学的微积分。

            但我觉得这不太影响我表达自己的观点，首先我碰到这些应用的时候，因为没什么数学基础，我几乎也是从右往左学的。
            在看到信息熵的时候我还看不太懂对数，
            看到新闻分类和最大边缘相关（maximal marginal relevance，MMR）的时候我还不懂点积和矩阵乘法

            而且分享的重点也不在于理解右边这些应用，在于左边这些20年前我觉得没用，不想学的数学知识点，
            在20年后又以各种进阶形式出现在了我面前。
          </Text>
        </Notes>
      </FlexBox>
    </Slide>
  )
}
