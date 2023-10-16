import type { Meta, StoryObj } from "@storybook/react";

import Blockquote from "./BlockQuote";
import BulletList from "./BulletList";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import Lead from "./Lead";
import Muted from "./Muted";
import P from "./P";

const meta: Meta = {
  title: "COMPONENTS/ui/typography",
};

export default meta;

type BlockquoteStory = StoryObj<typeof Blockquote>;
type BulletListStory = StoryObj<typeof BulletList>;
type H1Story = StoryObj<typeof H1>;
type H2Story = StoryObj<typeof H2>;
type H3Story = StoryObj<typeof H3>;
type H4Story = StoryObj<typeof H4>;
type LeadStory = StoryObj<typeof Lead>;
type MutedStory = StoryObj<typeof Muted>;
type PStory = StoryObj<typeof P>;

export const Typo_Blockquote: BlockquoteStory = {
  render: () => (
    <Blockquote>
      "After all," he said, "everyone enjoys a good joke, so it's only fair that
      they should pay for the privilege."
    </Blockquote>
  ),
};

export const Typo_BulletList: BulletListStory = {
  render: () => (
    <BulletList>
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </BulletList>
  ),
};

export const Typo_H1: H1Story = {
  render: () => <H1>Taxing Laughter: The Joke Tax Chronicles</H1>,
};

export const Typo_H2: H2Story = {
  render: () => <H2>The People of the Kingdom</H2>,
};

export const Typo_H3: H3Story = {
  render: () => <H3>The Joke Tax</H3>,
};

export const Typo_H4: H4Story = {
  render: () => <H4>People stopped telling jokes</H4>,
};

export const Typo_Lead: LeadStory = {
  render: () => (
    <Lead>
      A modal dialog that interrupts the user with important content and expects
      a response.
    </Lead>
  ),
};

export const Typo_Muted: MutedStory = {
  render: () => <Muted>Enter your email address.</Muted>,
};

export const Typo_P: PStory = {
  render: () => (
    <P className="w-1/2 ">
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </P>
  ),
};
