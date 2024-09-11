import React from "react";
import {
  Appear, Box, FlexBox,
  Heading, Image,
  ListItem,
  Notes,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text
} from "spectacle";
import { MathJax } from "better-react-mathjax";

// @ts-ignore
import distanceMetrics2 from './distance_metrics2.png'
// @ts-ignore
import wordEmbedding1 from './word-embedding.png'
// @ts-ignore
import wordEmbedding2 from './word_embedding2.jpeg'

export const Topic2 = () => {
  return (
    <>
      <Slide>
        <FlexBox
          margin={'auto'}
          width={'100%'}
          alignItems={'flex-start'}
          justifyContent={'center'}>
          <FlexBox flexDirection={'column'}>
            <Heading fontSize={'54px'}>三角函数</Heading>
            <Text fontSize={'32px'}>（初中三年级）</Text>
            <MathJax style={{ fontSize: '32px' }}>$$y=cos(x)$$</MathJax>
            <MathJax style={{ fontSize: '32px' }}>$$cos(90^\circ) = 0$$</MathJax>
          </FlexBox>
          <Appear inactiveStyle={{
            width: '33%',
            opacity: '0',
          }} activeStyle={{
            width: '33%',
            opacity: '1',
          }}>
            <FlexBox flexDirection={'column'}>
              <Heading fontSize={'54px'}>余弦定理</Heading>
              <Text fontSize={'32px'}>（高中二年级）</Text>
              <MathJax style={{ fontSize: '32px' }}>
                {`
          $$c^2 = a^2 + b^2 - 2ab\\cos\\theta$$
          `}
              </MathJax>
              <Appear>
                <MathJax style={{ fontSize: '32px' }}>
                  {`
          $$c^2 = a^2 + b^2$$
          `}
                </MathJax>
              </Appear>
              <Notes>
                <MathJax style={{ fontSize: '32px' }}>$\theta = 90^\circ$ 勾股定理 $c^2 = a^2 + b^2$</MathJax>
              </Notes>
            </FlexBox>
          </Appear>
          <Appear inactiveStyle={{
            width: '33%',
            opacity: '0',
          }} activeStyle={{
            width: '33%',
            opacity: '1',
          }}>
            <FlexBox flexDirection={'column'}>
              <Heading fontSize={'54px'}>文本相似性</Heading>
              <Text fontSize={'32px'}>（自然语言处理）</Text>
              <MathJax style={{ fontSize: '32px' }}>
                {`
          $$\\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|a| |b|}$$
          `}
              </MathJax>
            </FlexBox>
          </Appear>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          height={'100%'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image
            src={wordEmbedding1}
            height={'100%'}
          />
        </FlexBox>
        <Notes>
          <MathJax>将文本与矢量一一对应，再根据矢量之间的夹角大小($cos\theta$)来计算文本相似性</MathJax>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox
          height={'100%'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image
            src={wordEmbedding2}
            height={'100%'}
          />
        </FlexBox>
        <Notes>
          <Text>n 维数据空间的词向量</Text>
          <Text>存储在矢量数据库</Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox
          height={'100%'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image
            src={distanceMetrics2}
            height={'100%'}
            // style={{
            //   objectFit: 'contain'
            // }}
            // objectFit={'contain'}
          />
        </FlexBox>
      </Slide>
    </>
  )
}
