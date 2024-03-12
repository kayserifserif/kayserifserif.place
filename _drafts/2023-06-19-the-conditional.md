---
title: The Conditional
layout: post
---

(Originally posted on [Twitter](https://twitter.com/kayserifserif/status/1670915277846978560).)

An interpretation/parsing of another poem, in my half-broken but beloved poetic programming language.

I'll go ahead and jot some notes down here since it's been a while, and my documentation is a little holey, and maybe i'm starting to have a better idea of what to say.

The premise of the language is to define variables and functions and writing the poem in a way such that, in that magical moment of interfacing with the compiler, you create a dialogue in the spaces where you've asked for a response, or an echo.

In the poem, the imagined images are presented as hypotheticals. As I interpret each image into statements, I'm wrapping them up in an unused (hypothetical) function that represents the scenario that the speaker wants to conjure.

("Breaking function, well defined. Never called." #sixwordstory)

Definition statements are pretty freeform. Variables can use RegEx and the value on the right is ultimately interpreted as a string, regardless of whether the quotation marks are there or not.

The command `say`, followed by a string inside em dashes, asks the compiler to echo back that string in a comment at the end of the line, denoted by a dagger (†). The same applies when a variable is printed on its own, as on the last line.

The last important bit is the `#as palimpsest` directive at the top. Normally a variable holds the last value you give to it, but using this directive allows variables to contain multitudes.

The gently unfolding elaboration of what `this` is gives the poem (performance?) the ability to maintain the rhythm of those lovely last lingering beats of the poem: "us alive, / right here, feeling lucky."

/ end annotation

End notes: I didn't know what to do with this language at the beginning, but the couple of these reinterpretations I've done have been so gratifying. The process of doing them give me tons of ideas, too! Lots to dig into, though there's still so much to figure out about compilers…