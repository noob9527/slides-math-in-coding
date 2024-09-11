import React from "react";
import { Appear, FlexBox, Heading, Image, ListItem, Markdown, Notes, Slide, Text } from "spectacle";
import { MathJax } from "better-react-mathjax";


// @ts-ignore
import linearEqn from './linear-eqn.png';
// @ts-ignore
import linearRegression0 from './linear-regression0.png';
// @ts-ignore
import linearRegression1 from './linear-regression1.png';
// @ts-ignore
import gradientDescent from './gradient-descent.png';
// @ts-ignore
import gradientDescent2 from './gradient-descent2.png';

export const Topic1 = () => {

  return (
    <>
      <Slide>
        <FlexBox
          margin={'auto'}
          width={'100%'}
          alignItems={'flex-start'}
          justifyContent={'center'}>
          <FlexBox flexDirection={'column'}>
            <Heading fontSize={'54px'}>一元一次方程</Heading>
            <Text fontSize={'32px'}>（初中一年级）</Text>
            <MathJax style={{ fontSize: '32px' }}>{`$$y=ax+b$$`}</MathJax>
          </FlexBox>
          <Appear inactiveStyle={{
            width: '33%',
            opacity: '0',
          }} activeStyle={{
            width: '33%',
            opacity: '1',
          }}>
            <FlexBox flexDirection={'column'}>
              <Heading fontSize={'54px'}>线性回归</Heading>
              <Text fontSize={'32px'}>（高中三年级）</Text>
              <MathJax style={{
                fontSize: '32px',
              }}>{`$$D = \\sum_{i=1}^{n}[y_i-(ax_i+b)]^2$$`}</MathJax>
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
              <Heading fontSize={'54px'}>梯度下降</Heading>
              <Text fontSize={'32px'}>（机器学习）</Text>
              <MathJax style={{
                fontSize: '32px',
              }}>{`
$$a_{n+1} = a_n - \\alpha \\frac{\\partial D}{\\partial a}$$
              `}</MathJax>
            </FlexBox>
          </Appear>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          flexDirection={'column'}
          height={'100%'}
          // width={'50%'}
        >
          {/*<Heading fontSize={'32px'}>一元一次方程</Heading>*/}
          <Image src={linearEqn} height={'80%'}></Image>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          flexDirection={'column'}
          height={'100%'}
        >
          {/*<Heading fontSize={'32px'}>线性回归</Heading>*/}
          <Image src={linearRegression0} height={'80%'}></Image>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          flexDirection={'column'}
          height={'100%'}
        >
          {/*<Heading fontSize={'32px'}>线性回归</Heading>*/}
          <Image src={linearRegression1} height={'80%'}></Image>
        </FlexBox>
        <Notes>
          <MathJax>
            {`
- minimize  $D = \\sum_{i=1}^{n}[y_i-(ax_i+b)]^2$

- find the point such that $\\frac{\\partial D}{\\partial a} = \\frac{\\partial D}{\\partial b}=0$

$$\\frac{\\partial D}{\\partial a}=\\sum_{i=1}^{n}2(y_i-(ax_{i}+b))(-x_i)=\\sum_{i=1}^{n}(x_{i}^{2}a+x_ib-x_iy_i)=0$$

$$\\frac{\\partial D}{\\partial b}=\\sum_{i=1}^{n}2(y_{i}-(ax_{i}+b))(-1)=\\sum_{i=1}^{n}(x_ia+b-y_i)=0$$

Solve this 2x2 linear equations, we can get the best line or the worst line, we need a second derivative test to determine.
            `}
          </MathJax>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox flexDirection={'column'} height={'100%'}>
          {/*<Heading fontSize={'32px'}>梯度下降</Heading>*/}
          <Image src={gradientDescent} height={'80%'}></Image>
        </FlexBox>
        <Notes>
          <MathJax>
            {`
1. 先随机指定一个 $a_0$ 和 $b_0$，
2. 计算梯度：  
  $\\frac{\\partial D}{\\partial a} = -2\\sum_{i=1}^n x_i(y_i - (ax_i + b))$  
  $\\frac{\\partial D}{\\partial b} = -2\\sum_{i=1}^n (y_i - (ax_i + b))$
3. 更新参数：  
  $a_{new} = a - \\alpha \\frac{\\partial D}{\\partial a}$
  $b_{new} = b - \\alpha \\frac{\\partial D}{\\partial b}$
  其中 $\\alpha$ 是学习率（超参数），决定每次更新的步长。
4. 重复步骤 2 和 3，直到 $|\\frac{\\partial D}{\\partial a}|$ 和 $|\\frac{\\partial D}{\\partial b}|$ 都小于某个阈值，或达到预设的迭代次数。
            `}
          </MathJax>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox flexDirection={'column'} height={'100%'}>
          {/*<Heading fontSize={'32px'}>梯度下降</Heading>*/}
          <Image src={gradientDescent2} height={'80%'}></Image>
        </FlexBox>
      </Slide>
    </>
  )
}
