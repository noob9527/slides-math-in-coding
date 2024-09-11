import React, { useEffect } from "react";
import {
  Appear,
  Heading,
  ListItem,
  Slide,
  SlideLayout,
  Table,
  Image,
  TableBody,
  TableCell,
  TableHeader,
  TableRow, FlexBox, Stepper, Markdown, Text, Box, Notes, Quote, UnorderedList
} from "spectacle";
import { MathJax } from "better-react-mathjax";

// @ts-ignore
import scale1 from './scale-step1.png';
// @ts-ignore
import scale2 from './scale-step2.png';
// @ts-ignore
import scale3 from './scale-step3.png';

// @ts-ignore
import mousePoisonPuzzle from './mouse-poison-puzzle.png';
// @ts-ignore
import mousePoisonPuzzleAnswer1 from './mouse-poison-puzzle-answer1.png';
// @ts-ignore
import mousePoisonPuzzleAnswer2 from './mouse-poison-puzzle-answer2.png';
// @ts-ignore
import mousePoisonPuzzleAnswer3 from './mouse-poison-puzzle-answer3.png';

// @ts-ignore
import jobSubject0 from './job-subject-0.png';
// @ts-ignore
import jobSubject1 from './job-subject-1.png';
// @ts-ignore
import jobSubject2 from './job-subject-2.png';
// @ts-ignore
import jobSubject3 from './job-subject-3.png';

// @ts-ignore
import resume from './resume.png';
// @ts-ignore
import shannon from './shannon.jpg';

function getRandomIntInclusive(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

export const Topic3 = () => {
  const max = 32
  let randomNumber = 25
  // getRandomIntInclusive(1, max)

  useEffect(() => {
    randomNumber = getRandomIntInclusive(1, max)
  }, [])

  return (
    <>
      <SlideLayout.Center>
        <Heading>对数与信息量化</Heading>
      </SlideLayout.Center>
      <Slide>
        <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Image src={scale1} width={'80%'} height={'auto'}></Image>
        </FlexBox>
        <Notes>
          有一个天平和九个小球，其中一个比其他重，最少需要用天平称几次才能找到这个较重的小球？
        </Notes>
      </Slide>
      <Slide>
        <FlexBox height={'100%'}
                 width={'100%'}
                 alignItems={'center'}
                 justifyContent={'center'}>
          <Image src={scale2} width={'50%'}></Image>
          <Appear inactiveStyle={{
            width: '50%',
            opacity: '0',
          }} activeStyle={{
            width: '50%',
            opacity: '1',
          }}>
            <Image src={scale3} width={'100%'}></Image>
          </Appear>
        </FlexBox>
        <Notes>
          <Text>猜一个 1 ~ {max} 之间的数字</Text>
          <Text>
            我只能回答是与否，怎样猜最合理？
          </Text>
          <Text>
            二分查找
          </Text>
          <Text>
            数字是 {randomNumber}
          </Text>
        </Notes>
      </Slide>
      {/*<Slide>*/}
      {/*  <Heading>*/}
      {/*    猜一个 1 ~ {max} 之间的数字*/}
      {/*  </Heading>*/}
      {/*  /!*<Text textAlign={'center'}>*!/*/}
      {/*  /!*</Text>*!/*/}
      {/*  <Appear>*/}
      {/*    <Heading color={'primary'}>*/}
      {/*      {randomNumber}*/}
      {/*    </Heading>*/}
      {/*  </Appear>*/}
      {/*  <Notes>*/}
      {/*    <Text>*/}
      {/*      我只能回答是与否，怎样猜最合理？*/}
      {/*    </Text>*/}
      {/*    <Text>*/}
      {/*      二分查找*/}
      {/*    </Text>*/}
      {/*    <Text>*/}
      {/*      数字是 {randomNumber}*/}
      {/*    </Text>*/}
      {/*  </Notes>*/}
      {/*</Slide>*/}
      <Slide>
        <FlexBox
          margin={'auto'}
          width={'100%'}
          alignItems={'flex-start'}
          // height={'100%'}
          // alignItems={'center'}
          justifyContent={'center'}>
          <FlexBox flexDirection={'column'}>
            <Heading fontSize={'54px'}>指数</Heading>
            <Text fontSize={'32px'}>（初中二年级）</Text>
            <MathJax style={{ fontSize: '32px' }}>$$y=2^x$$</MathJax>
          </FlexBox>
          <Appear inactiveStyle={{
            width: '33%',
            opacity: '0',
          }} activeStyle={{
            width: '33%',
            opacity: '1',
          }}>
            <FlexBox flexDirection={'column'}>
              <Heading fontSize={'54px'}>对数</Heading>
              <Text fontSize={'32px'}>（高中一年级）</Text>
              <MathJax style={{ fontSize: '32px' }}>{'$$x=log_2(y)$$'}</MathJax>
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
              <Heading fontSize={'54px'}>信息熵</Heading>
              <Text fontSize={'32px'}>（信息论）</Text>
              <MathJax style={{ fontSize: '32px' }}>{'$$H=-\\sum P_i\\log P_i$$'}</MathJax>
            </FlexBox>
          </Appear>
        </FlexBox>
      </Slide>
      <Slide>
        <UnorderedList style={{listStyle: 'none'}}>
          <ListItem>
            <FlexBox
              width={'100%'}
              flexDirection={'row'}
              justifyContent={'space-between'}
            >
              <Quote color='secondary'>“太阳从东方升起”</Quote>
              <MathJax style={{ fontSize: '28px' }}>{`
          $H = - \\log (100\\%) = 0$ (bit)
          `}</MathJax>
            </FlexBox>
          </ListItem>
          <Appear>
            <ListItem>
              <FlexBox
                width={'100%'}
                flexDirection={'row'}
                justifyContent={'space-between'}
              >
                <Quote color='secondary'>“下期双色球中奖号码是……”</Quote>
                <MathJax style={{ fontSize: '28px' }}>{`
            $H = -\\log (\\frac{1}{17721088}) \\approx 24$ (bits)
            `}</MathJax>
              </FlexBox>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <FlexBox
                width={'100%'}
                flexDirection={'row'}
                justifyContent={'space-between'}
              >
                <Quote color='secondary'>“好好学习，未来就能过得更好”</Quote>
                <MathJax style={{ fontSize: '28px' }}>{`
            互信息(Mutual Information) $I = 0$ (bit)
            `}</MathJax>
              </FlexBox>
            </ListItem>
            <Notes>
              假设从未来一个月穿越到现在……
            </Notes>
          </Appear>
        </UnorderedList>
      </Slide>
      {/*<Slide>*/}
      {/*  <FlexBox flexDirection={'column'} justifyContent={'space-around'} height={'100%'}>*/}
      {/*    <FlexBox justifyContent={'space-around'} width={'100%'}>*/}
      {/*      <FlexBox flexDirection={'column'}>*/}
      {/*        <Heading fontSize={'54px'}>H(1~32)</Heading>*/}
      {/*        <MathJax style={{ fontSize: '32px' }}>*/}
      {/*          {`$$*/}
      {/*                          \\begin{aligned}*/}
      {/*                          H_x &= - \\log_2 \\frac{1}{32} \\\\*/}
      {/*                              &= \\log_2 32 \\quad \\text{(对数的幂性质)}  \\\\*/}
      {/*                              &= 5  \\quad \\text{(bits)}*/}
      {/*                          \\end{aligned}*/}
      {/*                          $$`}*/}
      {/*          /!*{'$H_x = - \\log_2 \\frac{1}{9}$ (比特 bits)'}*!/*/}
      {/*        </MathJax>*/}
      {/*      </FlexBox>*/}
      {/*      <FlexBox flexDirection={'column'}>*/}
      {/*        <Heading fontSize={'54px'}>H(是或否)</Heading>*/}
      {/*        <MathJax style={{ fontSize: '32px' }}>*/}
      {/*          {`$$*/}
      {/*                          \\begin{aligned}*/}
      {/*                          H_x &= - \\log_2 \\frac{1}{2}  \\\\*/}
      {/*                              &= \\log_2 2\\\\*/}
      {/*                              &= 1  \\quad \\text{(bit)}*/}
      {/*                          \\end{aligned}*/}
      {/*                          $$`}*/}
      {/*          /!*{'$H_y = - \\log_2 \\frac{1}{3}$ (比特 bits)'}*!/*/}
      {/*        </MathJax>*/}
      {/*      </FlexBox>*/}
      {/*    </FlexBox>*/}
      {/*    <Box>*/}
      {/*      <Appear>*/}
      {/*        <MathJax style={{ fontSize: '32px' }}>每问一次，不确定性最多能减少 1 bit</MathJax>*/}
      {/*        <MathJax style={{ fontSize: '32px' }}>*/}
      {/*          {`理论上需要问 = $\\frac{H_x}{H_y} = \\frac{5}{1} = 5$ 次`}*/}
      {/*        </MathJax>*/}
      {/*      </Appear>*/}
      {/*    </Box>*/}
      {/*  </FlexBox>*/}
      {/*</Slide>*/}
      <Slide>
        <FlexBox flexDirection={'column'} justifyContent={'space-around'} height={'100%'}>
          <FlexBox justifyContent={'space-around'} width={'100%'}>
            <FlexBox flexDirection={'column'}>
              <Heading fontSize={'54px'}>H(哪个小球较重)</Heading>
              <MathJax style={{ fontSize: '32px' }}>
                {`$$
                                \\begin{aligned}
                                H_x &= - \\log_2 \\frac{1}{9}  \\\\
                                    &= \\log_2 9
                                \\end{aligned}
                                $$`}
                {/*{'$H_x = - \\log_2 \\frac{1}{9}$ (比特 bits)'}*/}
              </MathJax>
            </FlexBox>
            <FlexBox flexDirection={'column'}>
              <Heading fontSize={'54px'}>H(天平称量一次)</Heading>
              <MathJax style={{ fontSize: '32px' }}>
                {`$$
                                \\begin{aligned}
                                H_x &= - \\log_2 \\frac{1}{3}  \\\\
                                    &= \\log_2 3
                                \\end{aligned}
                                $$`}
                {/*{'$H_y = - \\log_2 \\frac{1}{3}$ (比特 bits)'}*/}
              </MathJax>
            </FlexBox>
          </FlexBox>
          <Box>
            <Appear>
              <MathJax style={{ fontSize: '32px' }}>每称重一次，不确定性最多能减少 $log_2 3$ (bits)</MathJax>
              <MathJax style={{ fontSize: '32px' }}>
                {`理论最少称重次数 = $\\frac{H_x}{H_y} = \\frac{\\log_2 9}{\\log_2 3} = \\log_3 9 = 2$ 次`}
              </MathJax>
            </Appear>
          </Box>
        </FlexBox>
        <Notes>
          <MathJax>$\log_3 9 = 2$</MathJax>
          <MathJax>$3^2 = 9$</MathJax>
          <MathJax>
            {`
对数幂性质：$- log_2(y) = log_2(y^{-1}) = log_2(\\frac{1}{y})$
                        `}
          </MathJax>
          <MathJax>
            {`
对数基底转换：$log_b x = \\frac{log_k x}{log_k b}$
                        `}
          </MathJax>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Image src={shannon} height={'80%'}></Image>
          <Box>
            <Heading fontSize={'48px'}>《通信的数学原理》</Heading>
            <Text fontSize={'32px'} textAlign={'right'}>—— 克劳德 香农</Text>
          </Box>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Image src={mousePoisonPuzzle} width={'auto'} height={'80%'}></Image>
        </FlexBox>
        <Notes>
          <Text>
            有 1000 个一模一样的瓶子，其中有 999 瓶是普通的水，有一瓶是毒药。你有一些小白鼠用来找出毒药，喝下毒药的老鼠会在第二天死亡，最少需要多少只小白鼠才能保证在第二天找出哪一瓶是毒药？
          </Text>
          <Text>
            每只小白鼠可以喝任意瓶饮料
          </Text>
        </Notes>
        {/*<Text textAlign={'center'}>*/}
        {/*</Text>*/}
      </Slide>
      <Slide>
        <FlexBox flexDirection={'column'} justifyContent={'space-around'} height={'100%'}>
          <FlexBox justifyContent={'space-around'} width={'100%'}>
            <FlexBox flexDirection={'column'}>
              <Heading fontSize={'54px'}>H(哪一瓶是毒药)</Heading>
              <MathJax style={{ fontSize: '32px' }}>
                {`$$
                                \\begin{aligned}
                                H_x &= - \\log_2 \\frac{1}{1000} \\\\
                                    &= \\log_2 1000 \\lt \\log_2 1024  \\\\
                                    &\\approx 10 \\quad (bits)
                                \\end{aligned}
                                $$`}
              </MathJax>
            </FlexBox>
            <FlexBox flexDirection={'column'}>
              <Heading fontSize={'54px'}>H(生或死)</Heading>
              <MathJax style={{ fontSize: '32px' }}>
                {`$$
                                \\begin{aligned}
                                H_x &= - \\log_2 \\frac{1}{2}  \\\\
                                    &= \\log_2 2  \\\\
                                    &= 1 (bit)
                                \\end{aligned}
                                $$`}
              </MathJax>
            </FlexBox>
          </FlexBox>
          <Box>
            <Appear>
              <MathJax style={{ fontSize: '32px' }}>每加一支老鼠，毒药位置的“不确定性”最多能减少 1 bit</MathJax>
              <MathJax style={{ fontSize: '32px' }}>
                {`理论上至少需要 = $\\frac{H_x}{H_y} \\approx \\frac{10}{1} = 10$ 支老鼠`}
              </MathJax>
            </Appear>
          </Box>
        </FlexBox>
        <Notes>
          <Text>
            实际应用中，还需要理解条件熵(Conditional Entropy)和互信息(Mutual Information)的概念
          </Text>
          <MathJax>{`$H(X|Y)=-\\sum_{x \\in \\mathcal X, y\\in\\mathcal Y}p(x,y)\\log\\,p(x|y)$`}</MathJax>
          <MathJax>$I(X;Y)=H(X)-H(X|Y)=H(Y)-H(Y|X)$</MathJax>
          <Text>
            找到理论最少需要10支小白鼠并没有解决问题，还需要找到具体的方法
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Image src={mousePoisonPuzzleAnswer1} width={'auto'} height={'80%'}></Image>
        </FlexBox>
        <Notes>
          <Text>
            最终，根据10支小白鼠的存活状态，得到一个 10 位二进制数，就是毒药的编号
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Image src={mousePoisonPuzzleAnswer2} width={'auto'} height={'80%'}></Image>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Image src={mousePoisonPuzzleAnswer3} width={'auto'} height={'80%'}></Image>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Image src={jobSubject0} width={'auto'} height={'80%'}></Image>
        </FlexBox>
        <Notes>
          <Text>猜一个陌生人的职业</Text>
          <Text>需要一些依据来降低不确定性</Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Image src={jobSubject1} width={'auto'} height={'80%'}></Image>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Image src={jobSubject2} width={'auto'} height={'80%'}></Image>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Image src={jobSubject3} width={'auto'} height={'80%'}></Image>
        </FlexBox>
        <Notes>
          <Text>目前，程序员依然高度依赖英语阅读能力</Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Image src={resume} width={'auto'} height={'80%'}></Image>
        </FlexBox>
      </Slide>
    </>
  )
}
