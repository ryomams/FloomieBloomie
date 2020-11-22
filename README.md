# FloomieBloomie
Display your day in a rose. Made for UCSC's CMPM 35.

## Our Intentions & Goals

For FloomieBloomie, we have chosen to use an original data visualization rather than a premade D3 example. FloomieBloomie takes a set of activities performed in a day and displays them in a radial flower chart (as pictured below).<br><br>
Each petal represents an activity, which each have `significance-lvl`, `mood`, and `notes` attached.<br>
- `significance-lvl` is a rating, 0-6, of how significant a user thinks that activity was. (6 is momentous, 3 is medium, and 0 is neat.) This is represented in each petal's size.
- `mood` is a rating, 0-4, of how a user felt about that activity. (4 is elated, 2 is neutral, and 0 is awful.) This is represented in each petal's color.
- `notes` are the user's notes on that activity. This is displayed in a small box to the side of the flower.<br><br>
>Typically, mood tracking apps use traditional charts (ie. bar graphs, line graphs) to visualize how one's mood might fluctuate over time. Unfortunately, the use of number-oriented graphs inherently imply a new high or low score to be reached with one's mood.
>By using our radial flower chart, users can see their entire logged day without the obligation of comparison. Your daily flower is unique to that day-- and there is no obligation to make it look any particular way.
<br>
As a stretch goal, we hope to turn FloomieBloomie into a full-fledged app where users can log their daily activities, but this project will serve only as a prototype for our flower visualization.
<br>
<br>

![FloomieBloomie Draft 1](https://github.com/ryomams/FloomieBloomie/blob/main/Draft2.PNG?raw=true)

>_Our first nonfunctioning draft._
