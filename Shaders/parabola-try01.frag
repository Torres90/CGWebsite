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
  vec2 st=gl_FragCoord.xy/u_resolution;
  
  float y=pow(st.x,1.296);
  y=(.864)*pow(st.x,2.)+(0.)*st.x+(0.);
  
  vec3 color=vec3(y);
  
  float pct=plot(st,y);
  color=(1.-pct)*color+pct*vec3(0.,1.,0.);
  
  gl_FragColor=vec4(color,1.);
}