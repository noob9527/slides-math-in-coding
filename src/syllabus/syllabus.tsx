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
        </Notes>
      </FlexBox>
    </Slide>
  )
}
