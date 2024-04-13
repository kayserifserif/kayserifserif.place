---
layout: post
title: A poetry bot fabricated from reckless romanticism and an unchecked corpus
description: A reflection on my generative poetry bot, 5 months in.
---

Note: this post contains a discussion of moderating sensitive keywords in the context of generative text. Some general topics are mentioned but not discussed in detail.

<div class="section"><hr></div>

## A brief history

[ode to smallness](https://botsin.space/@smallness) is a generative poetry bot that pairs everyday words with phrase templates to produce a sustained symphony of attention and appreciation.

The bot is built with [Tracery](http://tracery.io/), run by [Cheap Bots, Toot Sweet!](https://cheapbotstootsweet.com/), and hosted on [botsin.space](https://botsin.space/). It made its first post on November 1, 2023.

This is the second iteration of the project. The predecessor was [Nouns as Art](https://twitter.com/NounsAsArt), which made its first post on May 17, 2021 and its last post on April 6, 2023, when [Cheap Bots, Done Quick!](https://cheapbotsdonequick.com/) closed down due to the end of Twitter's large-scale API usage.

## Building the bot

I loved the idea of Nouns as Art, but I think the idea of it got a little tired, two years into that project. The idea of looking at everything in the world as art still felt like a wellspring of inspiration, but I wanted the bot to be a little more proactive in putting out different variations on the theme.

To start, I figured out some starter phrase templates I wanted to use, and played with them by slotting in a couple different words that I had in mind.

Knowing some pitfalls that I know now, the strategy I took to put together a corpus might not have been the wiset or the most well-targeted. But it did help get me started quickly without worrying too much about getting it perfect. With a little research, I found a couple different sources on the internet that gave me a starting point to put together a words.txt file and a gerunds.txt file. I wanted to leave room for surprise and serendipity, so I didn't curate the lists too much, early on.

The bot started out by posting a broad range of utterances——some were exactly the right kind of delightful serendipity that I was hoping for, but some were grammatically awkward, and some were pretty boring.

What has been more surprising and concerning to me is that some utterances have been unpleasant, unsettling, even violent. This has been a growing priority for me in the process of editing the corpus.

## Trying not to make this a bad place

It turns out that this corpus had contained words that pertained to violence, including self-harm and harm to others. Those words became increasingly concerning when combined with the phrase templates I had provided. A lot of these phrase templates are designed to draw your attention to some little thing——a flower, the act of running. The phrases are guiding, wide-eyed, thoughtful. When combined with sensitive words like these, though, an unpleasant juxtaposition occurs.

I don't want my attention to be drawn to acts of violence. At least, not when the bot seems to promise a safe space, then pulls the rug sickeningly from under my feet. I really, especially, don't want my bot to inadvertently be a bad place for anyone who might have particular trigger words or who is sensitive to particular topics. I don't want to risk anyone who follows or finds the bot happening upon a post that causes a shock or sours their day, just because I let in a floodgate of words representing a full range of human experiences.

I play around with new phrase templates occasionally. One that I was playing around with was "remember the #gerund#, how it felt", where, in the Tracery grammar, the "#gerund#" part represents a slot where a word can be inserted with each generated utterance, randomly chosen from a set of words defined elsewhere in the "gerund" category. Naïvely, I had imagined this phrase template, when combined with different action verbs, to conjure up in the reader some physical sense memory of a hazy and lovely "belonging" or "bursting" or "brushing" sensation. I had conveniently forgotten that human experiences can also swing very negative.

An unpleasant surprise awaited me when I logged on one day and saw, from the bot's account, a post that contained that particular phrase template combined with a word that described an act of self-harm. Shocked, and ashamed, and hoping that not too many people had seen it, I immediately deleted the post from the bot's account, and deleted the word from the bot's source, so that it wouldn't be used in any context again, even if it would be less triggering when combined with other phrase templates.

In the process of figuring out what to do, I had a private discussion with someone on Mastodon who had related experience, both personally and from a moderation perspective. It was difficult to talk about, but I'm very grateful to them for lending their ear and expertise, and helping me figure out how to understand and move through the problem.

In addition to deleting the post, I decided to discard that phrase template entirely. In the way that I read it, I think it invites the reader to retreat into their body. Some unknown sensation awaits them there, in that cave of sense memories, but whether that creature is a friend or a foe is too risky to leave up to chance.

I've been laying a footpath lined with flowers but letting the monster truck of an unfettered corpus run amok.

<div class="section"><hr></div>

There is a worldview contained in the creation and operation of this bot: that there is beauty and poetry and art in the world wherever we look, so what if we looked?

It's a romantic notion from a romantic person. I still stand by it; I think it is an act of rebellion in a hard world. But the world isn't romantic everywhere, and if I'm going to paint a deliberately rosy picture, I expect myself to do so responsibly.

I'm trying to take time to curate the corpus more thoroughly to avoid running into more unpleasant surprises. I hope no one has seen any unpleasant combinations of phrases and words, but if you do, please let me know and I will fix it as soon as possible.

I still love the bot. It's a lovely part of my day when I see an utterance in the wild, composed delightfully so, with that quaint element of chance peppering the best of my intentions. I know at least a few other people enjoy it, too, and I'm so grateful for that.

*Mastodon link to this post, here (to come)*