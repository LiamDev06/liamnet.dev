import { Fragment } from "react";

import { AssistantMessage } from "./_components/AssistantMessage";
import { BottomInputBar } from "./_components/BottomInputBar";
import { ContactCard } from "./_components/ContactCard";
import { ExperienceEntry } from "./_components/ExperienceEntry";
import { FeaturedIn } from "./_components/FeaturedIn";
import { HumanMessage } from "./_components/HumanMessage";
import { SkillGroup } from "./_components/SkillGroup";
import { ToolBlock } from "./_components/ToolBlock";
import { TopBar } from "./_components/TopBar";
import { experienceEntries, pressEntries, skillGroups } from "./data";

import classes from "./style.module.css";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <main className={classes.page}>
        <HumanMessage>Tell me about Liam Hillefors</HumanMessage>
        <AssistantMessage>
          <p>
            Liam Hillefors is a software engineer and product manager based in
            Stockholm, and the sole engineer behind{" "}
            <a
              href="https://www.meitner.se/en-gb/ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meitner AI
            </a>
            , an AI-powered learning platform used daily by teachers and
            students across Swedish schools.
          </p>
          <p>
            He built it from scratch as a high-school project under Junior
            Achievement Sweden and won JA national championship with it in 2025
            (1st place out of 43,000+ students across 11,000+ companies). With
            only a month left until the JA program year was about to end, the
            product was acquired by Meitner, Sweden's fastest-growing school
            management platform, making the company the only JA Sweden entry
            ever in the program's history to be acquired during its program
            year. He joined Meitner straight out of high school to continue
            running the product end-to-end, becoming the first engineer hired
            specifically to build AI products.
          </p>
          <p>
            He started coding at 13, beginning with Java plugins for Minecraft
            servers and eventually spanning the full product stack, from the AI
            application layer through the frontend, backend, and infrastructure.
            Off-keyboard, he plays piano and drums.
          </p>
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
        <HumanMessage>Where has he been featured?</HumanMessage>
        <AssistantMessage>
          <p>
            Liam has been featured across Swedish national media and events,
            from national television and public radio to the country{"'"}s
            leading tech press. Here are some examples:
          </p>
        </AssistantMessage>
        <ToolBlock label="Glob" argument="featured-in/**">
          <FeaturedIn entries={pressEntries} />
        </ToolBlock>
      </main>
      <BottomInputBar />
    </>
  );
}
