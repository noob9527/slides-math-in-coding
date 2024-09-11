import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate } from 'spectacle'
import { Topic1 } from "./src/topic1/topic1";
import { Syllabus } from "./src/syllabus/syllabus";
import { MathJaxContext } from "better-react-mathjax";
import { Topic3 } from "./src/topic3/topic3";
import { Topic2 } from "./src/topic2/topic2";

const Presentation = () => (
  <Deck template={() => <DefaultTemplate/>}>
    <MathJaxContext config={{
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
      }
    }}>
      <Syllabus/>
      <Topic1/>
      <Topic2/>
      <Topic3/>
    </MathJaxContext>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation/>);
