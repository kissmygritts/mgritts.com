---
title: 'Movement Ecology'
path: '/movement-ecology'
date: '2018-09-11'
---

Or, what keeps me awake at night.

My inroduction to movement ecology began about 3 years ago with a dataset of about 200,000 GPS telemetry fixes. I was working on creating summary reports of all the big game captures we conducted. One aspect of this was showing the telemetry points on a map. Pretty simple. One of the biologists I work with asked if I can provide a method to filter the telemetry data by a date range. Again, pretty simple. However, this request lead me down the movement ecology rabbit hole. 

Since then, our telemetry data has grown to 3,275,620 GPS locations. Every year we are collecting about 450,000 thousand more points. Currently this total is only for big game species. We haven't included any data for raptors, corvids, reptiles, or small mammals. I have a personal goal to reach 6 million points as soon as possilbe. I think it is safe to say that we are entery big data territory.

## A Brief History of Movement Ecology

> Movement ecology is the glue that ties ecological processes together. - Francesca Cagnacci

The field of movement ecology emerged for two main reasons. First, the advance of GPS logging devices that can easily be attached to animals. Second, Increased interest in unsertanding the the spatial context of animal movement in regards to ecological processes. 

Questions about the movement of animals have always been around. However, the technology to to collect the data, then analyze the data didn't exist. Initial attempts to understand how an organism might use the resources around them were carried out by closely watching, or capturing individuals. In 1943 William Henry Burt introduced what has become the textbook definiton of the home range.

> Even then I would restrict the home range to that area traversed by the individuals in its normal activities of food gathering, mating, and caring for young. Occasional sallies outside the area, perhaps exploratory in nature, should not be considered as in part of the home range. - William Henry Burt

Small and incremental progress in understanding home rangess, and methods to calculate them lead to even more questions. (such as...). In the 70's and 80's more advanced methods of computing utilization distributions became common. Models of animal movement were theorized as well. These methods relied on more frequent animal tracking data. The first telemetry devices were deployed on seals in the 1960s. In 1973 the U.S Department of Defense launched the first GPS satelittes for military use. Initial civilian use of GPS was degraded. In 2000 civilians were given the same accuracy as the military. Russia began Launching it's GLONASS system. The advances in GPS technology lead to GPS telemetry devices that could be attached to animals for more continous, remote tracking. They were expensive, but like all technology, the prices have decreased. 

As more GPS telemetry devices were deployed datasets grew, which led to computational issues for analysis and data management. In turn, these have been solved. There are many R packages, and data repositories such as MoveBank. 

In 2008 the PNAS published a special issue focusing on movement ecology. Nathan et al. published an article suggesting [A movement ecology paradigm for unifying organismal movement research](http://www.pnas.org/content/105/49/19052) that integrates conceptual, theoretical, methodological, and empirical frameworks for studying the movement of all organisms. 

## Why am I Writing This

Well, to be honest, I've been attempting to do movement ecology research without fully understanding, from first principles, what movement ecology encompasses. Over the span of several articles I plan on brain-dumping my understanding of the articles I'm reading, and methods I'm attempting to use. I am the type of person that really likes to look into the black box and attempt to understand the nuances of many of the methods I use. To that end, I'll be working through many of the functions and methods I use daily to better understand how they work, and the assumptions they make. 

I'll start off with a few articles about home ranges. If I'm starting at the beginning, this has to be it! Much of the foundation of movement ecology depends on understanding and estimating home ranges. Then I'll get into simulating movement data, path segmentation, resource selection functions. You name it, I'll try to cover it.
