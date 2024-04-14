---
layout: post
title: Reckless romanticism meets an unchecked corpus
description: Checking in on my generative poetry bot and some missteps I've taken, five months in.
---

*Note: this post contains a discussion of moderating sensitive language used in generative text. Some general topics are mentioned but not discussed in detail.*

<div class="section"><hr></div>

## A brief history

[ode to smallness](https://botsin.space/@smallness) is a generative poetry bot that pairs everyday words with phrase templates to produce a sustained symphony of attention and appreciation.

The bot is built with [Tracery](http://tracery.io/), run by [Cheap Bots, Toot Sweet!](https://cheapbotstootsweet.com/), and hosted on [botsin.space](https://botsin.space/). It made its first post on November 1, 2023.

This is the second iteration of the project. The predecessor was [Nouns as Art](https://twitter.com/NounsAsArt), which made its first post on May 17, 2021, and its last post on April 6, 2023, when [Cheap Bots, Done Quick!](https://cheapbotsdonequick.com/) closed down due to the end of Twitter's large-scale API usage.

## Building the bot

I loved the idea of "Nouns as Art", but I think the idea of it got a little tired, two years into that project. The idea of looking at everything in the world as art still felt like a wellspring of inspiration, but I wanted the bot to be a little more proactive in putting out different variations on the theme.

To start, I figured out some starter phrase templates I wanted to use, and played with them by slotting in a few different words that I had in mind.

Knowing some pitfalls that I know now, the strategy I took to put together a corpus might not have been the wisest or the most well-targeted. But it did help get me started quickly without worrying too much about getting it perfect. With a little research, I found a couple of sources on the internet that gave me a starting point to put together a words.txt file and a gerunds.txt file. I wanted to leave room for surprise and serendipity, so I didn't curate the lists too much, early on.

The bot began by posting a broad range of utterances. Some were exactly the right kind of lovely serendipity that I was hoping for, like these recent posts:

> collecting as a form of love [(April 5, 2024)](https://botsin.space/@smallness/112221893764639814)

*(from the template* "#gerund# as a form of love"*)*

> the abundance of translating [(March 31, 2024)](https://botsin.space/@smallness/112192635888458872)

*(from the template* "the abundance of #gerund#"*)*

> so it goes, the waiting [(March 29, 2024)](https://botsin.space/@smallness/112181784576913735)

*(from the template* "so it goes, the #gerund#"*)*

> take, for example, the pilgrimage [(March 26, 2024)](https://botsin.space/@smallness/112165030503037541)

*(from the template* "take, for example, the #noun#"*)*

Still, some other posts were grammatically awkward, and some were pretty boring. What has been more surprising and concerning to me is that some utterances have been unpleasant, unsettling, or even violent. This has been a growing priority for me in the process of editing the corpus.

## Discovering thorns

It turns out that this corpus had contained words that pertained to violence, including self-harm and harm to others. Those words became increasingly concerning when combined with the phrase templates I had provided. A lot of these phrase templates are designed to draw your attention to some little thing——a flower, the act of running. The phrases are guiding, wide-eyed, and thoughtful. When combined with sensitive words like these, then, an unpleasant juxtaposition occurs.

I don't want my attention to be drawn to acts of violence. At least, not when the bot seems to promise a safe space, then pulls the rug sickeningly from under my feet. I especially don't want my bot to inadvertently be a bad place for anyone who might have particular trigger words or who is sensitive to particular topics. I don't want to risk anyone who follows or finds the bot happening upon a post that causes a shock or sours their day, just because I had opened a floodgate of words that represented a full range of human experiences.

I play around with new phrase templates, from time to time. One that I was playing around with was "remember the #gerund#, how it felt", where, in the Tracery grammar, the "#gerund#" part represents a slot where a word can be inserted with each generated utterance, randomly chosen from a set of words defined elsewhere in the "gerund" category. Naïvely, I had imagined this phrase template, when combined with different action verbs, to conjure up, in the reader, some physical sense memory of a hazy and lovely sensation, perhaps of "belonging" or "bursting" or "brushing", and so on. I had conveniently forgotten that human experiences can also swing very negative.

An unpleasant surprise awaited me when I logged on one day and saw, from the bot's account, a post that contained that particular phrase template combined with a word that describes an act of self-harm. Shocked, and ashamed, and hoping that not too many people had seen it, I immediately deleted the post from the bot's account.

In the process of figuring out what to do next, I had a private discussion with someone on Mastodon who had some related experience, both personally and from a moderation perspective. It was difficult to talk about, but I'm very grateful to them for lending their ear and expertise, and helping me figure out how to understand and move through the problem.

In addition to deleting the post, I decided to remove the word from the bot's source, so that it wouldn't be used in any context again, even if it might pass as innocuous in the context of other phrase templates. I also discarded that phrase template. In the way that I read it ("remember", "how it felt"), I think it invites the reader to retreat into their body. Some unknown sensation awaits them there, in that cave of sense memories, but whether that creature is a friend or a foe is too risky to leave up to chance.

## De-thorning

I love this bot. It's a lovely part of my day when I see one of these utterances in the wild, composed delightfully so, with that quaint element of chance peppering a phrase that represents the best of my intentions. I know at least a few other people enjoy it, too, and I'm so grateful for that.

There is a worldview contained in the creation and operation of the bot: that there is beauty and poetry and art in the world wherever we look——so what if we looked?

It's a romantic notion from a romantic person. I still stand by it; I think it can be an act of rebellion in a hard world. But the world isn't romantic everywhere, and if I'm going to paint a deliberately rosy picture in my corner of the world, I would ask myself to do so responsibly.

One thought that gave me hesitation was whether there was space here for metaphor, for melancholy, perhaps even for darkness. I want this bot to be a source of inspiration——for life, and literal interpretation, yes, but also for poetry and language. The vocabulary around violence and weaponry can be somber and dangerous in contexts where they would be understood literally, but they can also be used powerfully and strikingly as metaphors. But I think what is important to me about this is that I am not able to provide the right context here. With these short and random utterances, there exists no further elaboration for the word as a metaphor, and the literal reading is going to happen much more quickly and carry much more weight than a lurking metaphorical reading. Safety is going to have to come first, in this case.

Since encountering that first major misstep, I've been trying to take time to curate the corpus more thoroughly to avoid running into more unpleasant surprises. I hope no one has come across any bad combinations of phrases and words, but if you do, please let me know and I will fix it as soon as possible.

*Mastodon link to this post, here (to come)*