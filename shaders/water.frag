#version 330

// input uniforms 
uniform vec3 light;
uniform vec3 motion;

// in variables 
in vec3  normalView;
in vec3  eyeView;
//textures
in vec2 uvcoord;
in float h;

// out buffers 
layout(location = 0) out vec4 bufferColor;


void main() {
// blue color => tools http://www.cs.toronto.edu/~jacobson/phong-demo/ 
    const vec3 ambient  = vec3(0.3,0.3,0.2);
    const vec3 diffuse  = vec3(0,0,1); 
    const vec3 specular = vec3(0.8,0.2,0.2);
    const float et = 50.0;
    vec3 n = normalize(normalView);
    vec3 e = normalize(eyeView);
    vec3 l = normalize(light);
    float diff = dot(l,n);
    float spec = pow(max(dot(reflect(l,n),e),0.0),et);
    vec3 color = ambient + diff*diffuse + spec*specular;
    bufferColor = vec4(color,1.0);
}