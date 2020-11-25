# FloomieBloomie
Log your days in a garden of flowers. Made for UCSC's CMPM 35.<br>
By Ryoma Marta-Sugawara and Nishant Suria.<br>
View it live at https://ryoma.ms/FloomieBloomie 

## Our Intentions & Goals

FloomieBloomie takes a set of activities performed in a day and displays them in a radial flower chart using D3 (as pictured below).<br><br>
Each `flower`, which represent a day, is made up of `petals`, which each represent user-provided activities. Each `petal`, or activity, has a `significance-lvl`, a `mood`, and some `notes` attached.<br>
- `significance-lvl` is a rating, 0-6, of how significant a user thinks that activity was. (6 is momentous, 3 is medium, and 0 is neat.) This is represented in each petal's size.
- `mood` is a rating, 0-4, of how a user felt about that activity. (4 is elated, 2 is neutral, and 0 is awful.) This is represented in each petal's color.
- `notes` are the user's notes on that activity. This is displayed in a small box to the side of the flower.<br><br>
>Typically, mood tracking apps use traditional charts (ie. bar graphs, line graphs) to visualize how one's mood might fluctuate over time. Unfortunately, the use of number-oriented graphs inherently imply a new high or low score to be reached with one's mood. For FloomieBloomie, we have chosen to use an original data visualization rather than a premade D3 example (as suggested in the CMPM 35 assignment). 
>By using our radial flower chart, users can see their entire logged day without the obligation of comparison. Additionally, we emphasize _activities_, rather than _moods_, because we believe it is more important to celebrate every accomplishment than to focus on the feeling that accomplishment gives you. Your daily flower is unique to that day-- and there is no need to make it look any particular way.
<br>
As a stretch goal, we hope to turn FloomieBloomie into a full-fledged app where users can log their daily activities, but this project will serve only as a prototype for our flower visualization.
<br>
<br>

![FloomieBloomie Draft 1](https://github.com/ryomams/FloomieBloomie/blob/main/Draft2.PNG?raw=true)

_Our first nonfunctioning draft._
<br>
## D3 Examples We're Fond Of
- https://observablehq.com/@d3/smooth-zooming  (Smooth Zooming)
- http://bl.ocks.org/WilliamQLiu/76ae20060e19bf42d774  (Mouse Events)
