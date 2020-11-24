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

  // inititalization of value (helps with scaling idek)
  const cs = new Vector2(600, 600, 'rect'); // cs = canvas_size

  // inititalization of svg object 
  const svg = d3.select("body").append("svg")
    .attr("width", cs.x)
    .attr("height", cs.y)
    .style("background-color", "#626262")
  ;

  // petal things
  const CTR = new Vector2(cs.x/2, cs.y/2, 'rect');
  const ENDPT = new Vector2(200, PI, 'polar'); // change this
  const COLOR = '#42f5c8'; 
  const UNDERMIDPT1 = new Vector2(ENDPT.r / 3, ENDPT.theta - PI/6, 'polar'); 
  const UNDERMIDPT2 = new Vector2(ENDPT.r * 2/3, ENDPT.theta - PI/6, 'polar'); 
  const OVERMIDPT1 = new Vector2(ENDPT.r / 3, ENDPT.theta + PI/6, 'polar');
  const OVERMIDPT2 = new Vector2(ENDPT.r * 2/3, ENDPT.theta + PI/6, 'polar');
  const petal = svg.append('path')
    .attr("d", p("M", CTR.x, CTR.y) + s + p("C", UNDERMIDPT1.cx, UNDERMIDPT1.cy, UNDERMIDPT2.cx, UNDERMIDPT2.cy, ENDPT.cx, ENDPT.cy) + s +  p("C", OVERMIDPT2.cx, OVERMIDPT2.cy, OVERMIDPT1.cx, OVERMIDPT1.cy, CTR.x, CTR.y))
    .attr("stroke", COLOR)
    .attr("stroke_width", "2")
    .attr("fill", COLOR)
    .attr("on")
  ;
}
