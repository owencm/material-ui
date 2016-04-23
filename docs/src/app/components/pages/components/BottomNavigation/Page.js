import React from 'react';
import Title from 'react-title-component';

import CodeExample from '../../../CodeExample';
import PropTypeDescription from '../../../PropTypeDescription';
import MarkdownElement from '../../../MarkdownElement';

import bottomNavigationReadmeText from './README';
import BottomNavigationExampleSimple from './ExampleSimple';
import bottomNavigationExampleSimpleCode from '!raw!./ExampleSimple';
import bottomNavigationCode from '!raw!material-ui/lib/BottomNavigation/BottomNavigation';

const descriptions = {
  simple: `A simple example of \`BottomNavigation\` with three labels and icons
    provided and the first item selected by default.`,
  iconButton: '...',
  iconMenu: '...',
};

const BottomNavigationPage = () => (
  <div>
    <Title render={(previousTitle) => `Bottom Navigation - ${previousTitle}`} />
    <MarkdownElement text={bottomNavigationReadmeText} />
    <CodeExample
      code={bottomNavigationExampleSimpleCode}
      title="Simple example"
      description={descriptions.simple}
    >
      <BottomNavigationExampleSimple />
    </CodeExample>
    <PropTypeDescription code={bottomNavigationCode} />
  </div>
);

export default BottomNavigationPage;
