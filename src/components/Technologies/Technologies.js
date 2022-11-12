import React from 'react';
import { DiFirebase, DiHtml5, DiJavascript, DiReact, DiZend } from 'react-icons/di';
import {IoLogoJavascript} from 'react-icons/io'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've learned a lot of technologies in the frontend development world, 
    </SectionText>

    <List>
      <ListItem>
        <DiHtml5 size={'3rem'}/>
        <ListContainer>
            <ListTitle>Frontend</ListTitle>
            <ListParagraph>
              Html, Css, Bootstrap
            </ListParagraph>
        </ListContainer>
      </ListItem>
      

      <ListItem>
        <IoLogoJavascript size={'3rem'}/>
        <ListContainer>
            <ListTitle>Frontend</ListTitle>
            <ListParagraph>
              JavaScript, Es6
            </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size={'3rem'}/>
        <ListContainer>
            <ListTitle>Frontend</ListTitle>
            <ListParagraph>
              React.js & Redux Toolkit
            </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
