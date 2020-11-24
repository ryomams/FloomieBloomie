// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

function init() {

  // inititalization of new class 'Vector2', which stores an x and y
  class Vector2 {
    constructor(in_x, in_y) {
      this.x = in_x;
      this.y = in_y;
    }
  }

  // inititalization of value (helps with scaling idek)
  const cs = new Vector2(600,600); // cs = canvas_size

  // inititalization of svg object (which ryoma tells me is kinda like an array)
  const svg = d3.select("body").append("svg")
    .attr("width", cs.x)
    .attr("height", cs.y)
    .style("background-color", "#000000")
  ;

  // blue-grey background
  const bg = svg.append("rect")
    .attr("x", cs.x/64)
    .attr("y", cs.y/64)
    .attr("width", cs.x - cs.x/32)
    .attr("height", cs.y - cs.y/32)
    .attr("fill", "#efefff")
  ;

  // vertical dividing line
  const ln_vt = svg.append("rect")
    .attr("x", cs.x/2 - cs.x/128)
    .attr("y", 0)
    .attr("width", cs.x/64)
    .attr("height", cs.y)
    .attr("fill", "#000000")
  ;

  // horizontal dividing line
  const ln_hz = svg.append("rect")
    .attr("x", 0)
    .attr("y", cs.y/2 - cs.y/128)
    .attr("width", cs.x)
    .attr("height", cs.y/64)
    .attr("fill", "#000000")
  ;

  // quadrant 1 floor
  const rect_floor_q1 = svg.append("rect")
    .attr("x", cs.x/64)
    .attr("y", cs.y/2 - cs.y/16)
    .attr("width", cs.x/2 - 3 * cs.x/128)
    .attr("height", cs.y/16 - cs.y/128)
    .attr("fill", "#9e9e9e")
  ;

  // quadrant 1 body
  let q1bp = new Vector2(cs.x/4 - cs.x/16, cs.y/4 + cs.y/16); // body position
  const q1_body_pack = svg.append("ellipse")
    .attr("cx", q1bp.x - cs.x/16)
    .attr("cy", q1bp.y - cs.y/64)
    .attr("rx", cs.x/16)
    .attr("ry", cs.y/16 + cs.y/32)
    .attr("fill", "#e88025")
  ;
  const q1_body = svg.append("ellipse")
    .attr("cx", q1bp.x)
    .attr("cy", q1bp.y)
    .attr("rx", cs.x/16 + cs.x/32)
    .attr("ry", cs.y/8 + cs.y/32)
    .attr("fill", "#ff8921")
  ;
  const q1_body_goggles = svg.append("ellipse")
    .attr("cx", q1bp.x + cs.x/32)
    .attr("cy", q1bp.y - cs.y/16)
    .attr("rx", cs.x/16 + cs.x/64)
    .attr("ry", cs.y/16)
    .attr("fill", "#4e4e4e")
  ;
  const q1_body_glint = svg.append("ellipse")
    .attr("cx", q1bp.x + cs.x/16)
    .attr("cy", q1bp.y - cs.y/16 - cs.y/32)
    .attr("rx", cs.x/64 + cs.x/128)
    .attr("ry", cs.y/64)
    .attr("fill", "#ffffff")
  ;

  // quadrant 2 floor
  const rect_floor_q2 = svg.append("rect")
    .attr("x", cs.x/2 + cs.x/128)
    .attr("y", cs.y/2 - cs.y/8)
    .attr("width", cs.x/2 - 3 * cs.x/128)
    .attr("height", cs.y/8 - cs.y/64 + cs.y/128)
    .attr("fill", "#9e9e9e")
  ;

  // quadrant 2 body a
  let q2bpa = new Vector2(cs.x/2 + cs.x/16 + cs.x/32, cs.y/4 + cs.y/16); // body position
  const q2a_body_pack = svg.append("ellipse")
    .attr("cx", q2bpa.x - cs.x/32)
    .attr("cy", q2bpa.y - cs.y/128)
    .attr("rx", cs.x/32)
    .attr("ry", cs.y/32 + cs.y/64)
    .attr("fill", "#e88025")
  ;
  const q2a_body = svg.append("ellipse")
    .attr("cx", q2bpa.x)
    .attr("cy", q2bpa.y)
    .attr("rx", cs.x/32 + cs.x/64)
    .attr("ry", cs.y/16 + cs.y/64)
    .attr("fill", "#ff8921")
  ;
  const q2a_body_goggles = svg.append("ellipse")
    .attr("cx", q2bpa.x + cs.x/64)
    .attr("cy", q2bpa.y - cs.y/32)
    .attr("rx", cs.x/32 + cs.x/128)
    .attr("ry", cs.y/32)
    .attr("fill", "#4e4e4e")
  ;
  const q2a_body_glint = svg.append("ellipse")
    .attr("cx", q2bpa.x + cs.x/32)
    .attr("cy", q2bpa.y - cs.y/32 - cs.y/64)
    .attr("rx", cs.x/128 + cs.x/256)
    .attr("ry", cs.y/128)
    .attr("fill", "#ffffff")
  ;

  // quadrant 2 body b
  let q2bpb = new Vector2(cs.x - cs.x/8, cs.y/4 + cs.y/8); // body position
  const q2b_body_goggles = svg.append("ellipse")
    .attr("cx", q2bpb.x - cs.x/64)
    .attr("cy", q2bpb.y - cs.y/32)
    .attr("rx", cs.x/32 + cs.x/128)
    .attr("ry", cs.y/32)
    .attr("fill", "#4e4e4e")
  ;
  const q2b_body = svg.append("ellipse")
    .attr("cx", q2bpb.x)
    .attr("cy", q2bpb.y)
    .attr("rx", cs.x/32 + cs.x/64)
    .attr("ry", cs.y/16 + cs.y/64)
    .attr("fill", "#25e2e8")
  ;
  const q2b_body_pack = svg.append("ellipse")
    .attr("cx", q2bpb.x + cs.x/32)
    .attr("cy", q2bpb.y - cs.y/128)
    .attr("rx", cs.x/32)
    .attr("ry", cs.y/32 + cs.y/64)
    .attr("fill", "#26c4c9")
  ;
  /*
  const q2b_body_glint = svg.append("ellipse")
    .attr("cx", q2bpb.x - cs.x/32)
    .attr("cy", q2bpb.y - cs.y/32 - cs.y/64)
    .attr("rx", cs.x/128 + cs.x/256)
    .attr("ry", cs.y/128)
    .attr("fill", "#ffffff")
  ; */

  // quadrant 3 floor
  const rect_floor_q3 = svg.append("rect")
    .attr("x", cs.x/64)
    .attr("y", cs.y - cs.y/8)
    .attr("width", cs.x/2 - 3 * cs.x/128)
    .attr("height", cs.y/8 - cs.y/64)
    .attr("fill", "#9e9e9e")
  ;

  // quadrant 3 body a
  let q3bpa = new Vector2(cs.x/8, cs.y - cs.y/8 - cs.y/16); // body position
  const q3a_body_pack = svg.append("ellipse")
    .attr("cx", q3bpa.x - cs.x/32)
    .attr("cy", q3bpa.y - cs.y/128)
    .attr("rx", cs.x/32)
    .attr("ry", cs.y/32 + cs.y/64)
    .attr("fill", "#e88025")
  ;
  const q3a_body = svg.append("ellipse")
    .attr("cx", q3bpa.x)
    .attr("cy", q3bpa.y)
    .attr("rx", cs.x/32 + cs.x/64)
    .attr("ry", cs.y/16 + cs.y/64)
    .attr("fill", "#ff8921")
  ;
  const q3a_body_goggles = svg.append("ellipse")
    .attr("cx", q3bpa.x + cs.x/64)
    .attr("cy", q3bpa.y - cs.y/32)
    .attr("rx", cs.x/32 + cs.x/128)
    .attr("ry", cs.y/32)
    .attr("fill", "#4e4e4e")
  ;
  const q3a_body_glint = svg.append("ellipse")
    .attr("cx", q3bpa.x + cs.x/32)
    .attr("cy", q3bpa.y - cs.y/32 - cs.y/64)
    .attr("rx", cs.x/128 + cs.x/256)
    .attr("ry", cs.y/128)
    .attr("fill", "#ffffff")
  ;

  // quadrant 3 body b
  let q3bpb = new Vector2(cs.x/4 + cs.x/8, cs.y - cs.y/8 - cs.y/16); // body position
  const q3b_body_pack = svg.append("ellipse")
    .attr("cx", q3bpb.x + cs.x/32)
    .attr("cy", q3bpb.y - cs.y/128)
    .attr("rx", cs.x/32)
    .attr("ry", cs.y/32 + cs.y/64)
    .attr("fill", "#34c25d")
  ;
  const q3b_body = svg.append("ellipse")
    .attr("cx", q3bpb.x)
    .attr("cy", q3bpb.y)
    .attr("rx", cs.x/32 + cs.x/64)
    .attr("ry", cs.y/16 + cs.y/64)
    .attr("fill", "#38f26d")
  ;
  const q3b_body_goggles = svg.append("ellipse")
    .attr("cx", q3bpb.x - cs.x/64)
    .attr("cy", q3bpb.y - cs.y/32)
    .attr("rx", cs.x/32 + cs.x/128)
    .attr("ry", cs.y/32)
    .attr("fill", "#4e4e4e")
  ;
  const q3b_body_glint = svg.append("ellipse")
    .attr("cx", q3bpb.x)
    .attr("cy", q3bpb.y - cs.y/32 - cs.y/64)
    .attr("rx", cs.x/128 + cs.x/256)
    .attr("ry", cs.y/128)
    .attr("fill", "#ffffff")
  ;

  // quadrant 4 floor
  const rect_floor_q4 = svg.append("rect")
    .attr("x", cs.x/2 + cs.x/128)
    .attr("y", cs.y - cs.y/4 + cs.y/16)
    .attr("width", cs.x/2 - 3 * cs.x/128)
    .attr("height", cs.y/4 - cs.y/16 - cs.y/64)
    .attr("fill", "#9e9e9e")
  ;

  // quadrant 4 body a
  let q4bpa = new Vector2(cs.x - cs.x/4 - cs.x/16, cs.y - cs.y/8 - cs.y/16); // body position
  const q4a_body_pack = svg.append("ellipse")
    .attr("cx", q4bpa.x - cs.x/32)
    .attr("cy", q4bpa.y - cs.y/128)
    .attr("rx", cs.x/32)
    .attr("ry", cs.y/32 + cs.y/64)
    .attr("fill", "#e88025")
  ;
  const q4a_body = svg.append("ellipse")
    .attr("cx", q4bpa.x)
    .attr("cy", q4bpa.y)
    .attr("rx", cs.x/32 + cs.x/64)
    .attr("ry", cs.y/16 + cs.y/64)
    .attr("fill", "#ff8921")
  ;
  const q4a_body_goggles = svg.append("ellipse")
    .attr("cx", q4bpa.x + cs.x/64)
    .attr("cy", q4bpa.y - cs.y/32)
    .attr("rx", cs.x/32 + cs.x/128)
    .attr("ry", cs.y/32)
    .attr("fill", "#4e4e4e")
  ;
  const q4a_body_glint = svg.append("ellipse")
    .attr("cx", q4bpa.x + cs.x/32)
    .attr("cy", q4bpa.y - cs.y/32 - cs.y/64)
    .attr("rx", cs.x/128 + cs.x/256)
    .attr("ry", cs.y/128)
    .attr("fill", "#ffffff")
  ;

  // quadrant 4 body b
  let q4bpb = new Vector2(cs.x - cs.x/4 + cs.x/16, cs.y - cs.y/8); // body position
  const q4b_body = svg.append("ellipse")
    .attr("cx", q4bpb.x)
    .attr("cy", q4bpb.y)
    .attr("rx", cs.x/32 + cs.x/64 + cs.x/128)
    .attr("ry", cs.y/32 + cs.y/64)
    .attr("fill", "#fc42d7")
  ;
  const q4b_innards = svg.append("ellipse")
    .attr("cx", q4bpb.x)
    .attr("cy", q4bpb.y + cs.y/256)
    .attr("rx", cs.x/32 + cs.x/128)
    .attr("ry", cs.y/32)
    .attr("fill", "#ba329f")
  ;
  const q4b_bone_shaft = svg.append("rect")
    .attr("x", q4bpb.x - cs.x/64)
    .attr("y", q4bpb.y + cs.y/256)
    .attr("width", cs.x/32)
    .attr("height", cs.y/32)
    .attr("fill", "#eeeeee")
  ;
  const q4b_bone_joint_a = svg.append("ellipse")
    .attr("cx", q4bpb.x - cs.x/64 + cs.x/256)
    .attr("cy", q4bpb.y + cs.y/32)
    .attr("rx", cs.x/64)
    .attr("ry", cs.y/64)
    .attr("fill", "#eeeeee")
  ;
  const q4b_bone_joint_b = svg.append("ellipse")
    .attr("cx", q4bpb.x + cs.x/64 - cs.x/256)
    .attr("cy", q4bpb.y + cs.y/32)
    .attr("rx", cs.x/64)
    .attr("ry", cs.y/64)
    .attr("fill", "#eeeeee")
  ;
}
