// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

function init() {

  // inititalization of new class 'Vector2', which stores an x and y
  class Vector2 {
    constructor(in_a, in_b, in_type = 'rect') {
      if (in_type == 'rect') {
        this.x = in_a;
        this.y = in_b;
        this.r = Math.sqrt(this.x ^ 2 + this.y ^ 2);
        this.theta = Math.atan(this.y / this.x);
      }
      else if (in_type == 'polar') {
        this.r = in_a;
        this.theta = in_b;
        this.x = this.r * Math.cos(in_b);
        this.y = this.r * Math.sin(this.theta);
        this.cx = this.x + CTR.x;
        this.cy = this.y + CTR.y;
      }
    }
  }
  
  class Petal {
    constructor(in_title, in_mood, in_significance, in_notes = "", in_color = "#ffffff") {
      this.title = in_title;
      this.mood = in_mood;
      this.significance = in_significance;
      this.notes = in_notes;
      this.color = in_color;
      this.path; // used to assign a svg path to each petal
    }
  }
  
  // fn that formats inputs into the form that path() uses
  function p(str1, str2, str3 = "", str4 = "", str5 = "", str6 = "", str7 = "", str8 = "") { 
    let output = "";
    output += str1; output += " "; output += str2;
    if (str3 != "") {
      output += " "; output += str3;
    }
    if (str4 != "") {
      output += " "; output += str4;
    }
    if (str5 != "") {
      output += " "; output += str5;
    }
    if (str6 != "") {
      output += " "; output += str6;
    }
    if (str7 != "") {
      output += " "; output += str7;
    }
    if (str8 != "") {
      output += " "; output += str8;
    }
    return output;
  }

  const s = " ";
  const PI = Math.PI;
  const PHI = (1 + Math.sqrt(5)) / 2;

  // inititalization of value (helps with scaling idek)
  const cs = new Vector2(600, 600, 'rect'); // cs = canvas_size

  // inititalization of svg object 
  const svg = d3.select("body").append("svg")
    .attr("width", cs.x)
    .attr("height", cs.y)
    .style("background-color", "#626262")
  ;

  // array of petals
  let petals = [];

  // csv parsing
  d3.csv("data_clean.csv").then(function(data) {
    for (let i = 0; i < data.length; i++) {
      const petal_data = new Petal(data[i].Activity, data[i].Mood, data[i].Significance, data[i].Notes, '#cf5af8');
      petals.push(petal_data);
    }
  }); 
  

  console.log(petals);
  
  // garbage data lmao
  const garbagedata1 = new Petal("Snuggled a cone of human skin", 6, 4, "It was cute lmao.", "#ff641c");
  petals.push(garbagedata1);
  const garbagedata2 = new Petal("Licked my table", 1, 2, "Tasted like dust.", "#325478");
  petals.push(garbagedata2);
  const garbagedata3 = new Petal("死にたかった。", 0, 4, "誰もいない。彼女をください。", "#cf5fa8");
  petals.push(garbagedata3);
  const garbagedata4 = new Petal("eoawgeoiaeogaw", 2, 4, "fowamefemwpgegpegw", "cf5af8");
  petals.push(garbagedata4); 
  
  // assigning path shapes to elements in petals[]
  const CTR = new Vector2(cs.x/2, cs.y/2, 'rect');
  for (let i = 0; i < petals.length; i++) {
    const ENDPT = new Vector2(200, (((2/PHI) * i) % 2) * PI, 'polar'); // change the first value of Vector2 for size.
    const UNDERMIDPT1 = new Vector2(ENDPT.r / 3, ENDPT.theta - PI/6, 'polar'); 
    const UNDERMIDPT2 = new Vector2(ENDPT.r * 2/3, ENDPT.theta - PI/6, 'polar'); 
    const OVERMIDPT1 = new Vector2(ENDPT.r / 3, ENDPT.theta + PI/6, 'polar');
    const OVERMIDPT2 = new Vector2(ENDPT.r * 2/3, ENDPT.theta + PI/6, 'polar');
    petals[i].path = svg.append('path')
      .attr("d", p("M", CTR.x, CTR.y) + s + p("C", UNDERMIDPT1.cx, UNDERMIDPT1.cy, UNDERMIDPT2.cx, UNDERMIDPT2.cy, ENDPT.cx, ENDPT.cy) + s +  p("C", OVERMIDPT2.cx, OVERMIDPT2.cy, OVERMIDPT1.cx, OVERMIDPT1.cy, CTR.x, CTR.y))
      .attr("stroke", petals[i].color)
      .attr("stroke_width", "2")
      .attr("fill", petals[i].color)
    ;
  }
}
