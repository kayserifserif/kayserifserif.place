---
title: violence in code
layout: post
---

(Originally posted on [Twitter](https://twitter.com/kayserifserif/status/1519222256022392832).)

describing computer processes through the loaded language of child labour, industrial revolution, immigrant farm workers. feels shockingly visceral. hoof

[https://www.npmjs.com/package/worker-farm](https://www.npmjs.com/package/worker-farm)

![An important feature of Worker Farm is call durability. If a child process dies for any reason during the execution of call(s), those calls will be re-queued and taken care of by other child processes. In this way, when you ask for something to be done, unless there is something seriously wrong with what you're doing, you should get a result on your callback function.](https://pbs.twimg.com/media/FRVclupVIAYsyvz?format=png&name=900x900)

![Child processes stay alive waiting for jobs indefinitely and your farm manager will stay alive managing its workers, so if you need it to stop then you have to do so explicitly. If you send your farm API to workerFarm.end() then it'll cleanly end your worker processes. Note though that it's a soft ending so it'll wait for child processes to finish what they are working on before asking them to die.](https://pbs.twimg.com/media/FRVcluzVEAA6CNs?format=png&name=900x900)

brings to mind github's "master"/"main" terminology change, which felt like a relatively small change (though the company's contract with ICE is a massive thing to put into context)

but the whole metaphor of a "worker farm" !! it's so fleshed out. jobs, workers, processes, children, labour… like you kind of have to employ the mental image of a real worker farm to be able to productively engage in the computational metaphor.

you have to be thinking, ok, i'm the master/manager of this supply of workers/machines (conflated). there's an entity that'll do my bidding, whose lifespan i control. if that entity fails, there's another one that can take its place. and etc until i have no further need for them

and i think it's interesting to look at because like, the language we use for computational systems aren't causing direct harm to people/animals/environments. but it's a reflection on how we view the systems in our physical world. what's normal, what's convenient, what's obvious

and so i think maybe those discussions can help us reckon with technological systems, acknowledge the extraction, exploitation, indifference

oh right!! i completely forgot that the model is actually quite! literal in things like microwork and amazon mechanical turk!