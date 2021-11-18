#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define a

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st,float pct){
  return smoothstep(pct-.02,pct,st.y)-
  smoothstep(pct,pct+.01,st.y);
}

void main(){
  vec2 st=gl_FragCoord.xy/u_resolution * 1.0;
  //I'm remapping the coordinates on screen by multiplying them by (-0.5, -0.5).
  //This makes the bottom left corner have coordinates (-0.5, -0.5).
  //And by extension, (0,0) is now in the center of the screen, where before it was (0.5, 0.5).
  st-=vec2(0.5,0.5);
  
  float y=(2.0)*pow(st.x,2.0)+(0.)*st.x+(0.);
  
  vec3 color=vec3(y);
  
  float pct=plot(st,y);
  color=(1.-pct)*color+pct*vec3(0.5725, 0.1451, 0.1451);
  
  gl_FragColor=vec4(color,1.);
}