#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st){
  return smoothstep(.02,0.,abs(st.y-st.x));
}

void main(){
  vec2 st=gl_FragCoord.xy/u_resolution;
  
  float y=st.y;
  
  vec3 color=vec3(y);
  
  float motion=-.5;//moving the line left or right
  float phase=0.;//distance between the peaks. Or how often it repeats. Bigger = closer together.
  float displacement=.5;//movement up or down.
  float amplitude=.25;//height of the wave.
  
  vec2 line=vec2(st.y,sign(st.x+motion)*amplitude+displacement);
  
  // Plot a line
  float pct=plot(line);
  color=(1.-pct)*color+pct*vec3(.3333,.1804,.2549);
  
  gl_FragColor=vec4(color,1.);
}