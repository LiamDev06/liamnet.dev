import { Fragment } from "react";

import { AssistantMessage } from "./_components/AssistantMessage";
import { BottomInputBar } from "./_components/BottomInputBar";
import { ContactCard } from "./_components/ContactCard";
import { EducationEntry } from "./_components/EducationEntry";
import { ExperienceEntry } from "./_components/ExperienceEntry";
import { HumanMessage } from "./_components/HumanMessage";
import { SkillGroup } from "./_components/SkillGroup";
import { ToolBlock } from "./_components/ToolBlock";
import { TopBar } from "./_components/TopBar";
import {
  educationEntries,
  experienceEntries,
  skillGroups,
} from "./resumeDummyData";

import classes from "./style.module.css";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <main className={classes.page}>
        <HumanMessage>Tell me about Liam Hillefors</HumanMessage>
        <AssistantMessage>
          <p>Liam Hillefors is a 19-year-old...</p>
        </AssistantMessage>
        <ToolBlock label="Read" argument="contact.json">
          <ContactCard />
        </ToolBlock>
        <HumanMessage>What is his experience</HumanMessage>
        <ToolBlock
          label="Grep"
          argument={'"role|company" experience/'}
          status={`${experienceEntries.length} results`}
        >
          {experienceEntries.map((entry, index) => (
            <Fragment key={entry.role}>
              {index > 0 ? <hr className={classes.page__separator} /> : null}
              <ExperienceEntry entry={entry} />
            </Fragment>
          ))}
        </ToolBlock>
        <HumanMessage>What technologies does he use</HumanMessage>
        <ToolBlock label="Glob" argument="skills/**/*">
          {skillGroups.map((group) => (
            <SkillGroup
              key={group.title}
              title={group.title}
              tags={group.tags}
            />
          ))}
        </ToolBlock>
        <HumanMessage>Now education</HumanMessage>
        <ToolBlock label="Read" argument="education.md">
          {educationEntries.map((entry) => (
            <EducationEntry
              key={entry.name}
              name={entry.name}
              sub={entry.sub}
              note={entry.note}
            />
          ))}
        </ToolBlock>
        <HumanMessage>What are some stuff he is looking for next</HumanMessage>
        <AssistantMessage>I want to...</AssistantMessage>
      </main>
      <BottomInputBar />
    </>
  );
}
