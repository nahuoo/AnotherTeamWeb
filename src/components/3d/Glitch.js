/**
 * @author alteredq / http://alteredqualia.com/
 */

import {
  DataTexture,
  FloatType,
  MathUtils,
  RGBFormat,
  ShaderMaterial,
  UniformsUtils
} from 'three/build/three.module.js'
import { Pass } from 'three/examples/jsm/postprocessing/Pass.js'
import { DigitalGlitch } from 'three/examples/jsm/shaders/DigitalGlitch.js'
import * as THREE from 'three'

const GlitchPass = function (dt_size) {
  Pass.call(this)

  if (DigitalGlitch === undefined) console.error('GlitchPass relies on DigitalGlitch')

  const shader = DigitalGlitch
  this.uniforms = UniformsUtils.clone(shader.uniforms)

  if (dt_size === undefined) dt_size = 64

  this.uniforms.tDisp.value = this.generateHeightmap(dt_size)

  this.material = new ShaderMaterial({
    uniforms: this.uniforms,
    vertexShader: shader.vertexShader,
    fragmentShader: shader.fragmentShader
  })

  this.fsQuad = new Pass.FullScreenQuad(this.material)

  this.goWild = false
  this.curF = 0
  this.generateTrigger()
}

GlitchPass.prototype = Object.assign(Object.create(Pass.prototype), {

  constructor: GlitchPass,

  render: function (renderer, writeBuffer, readBuffer /*, deltaTime, maskActive */) {
    this.uniforms.tDiffuse.value = readBuffer.texture
    this.uniforms.seed.value = Math.random()// default seeding
    this.uniforms.byp.value = 0

    if (this.curF % this.randX === 0 || this.goWild === true) {
      this.uniforms.amount.value = Math.random() / 30
      this.uniforms.angle.value = THREE.Math.randFloat(-Math.PI, Math.PI)
      this.uniforms.seed_x.value = THREE.Math.randFloat(-1, 1)
      this.uniforms.seed_y.value = THREE.Math.randFloat(-1, 1)
      this.uniforms.distortion_x.value = THREE.Math.randFloat(0, 1)
      this.uniforms.distortion_y.value = THREE.Math.randFloat(0, 1)
      this.curF = 0
      this.generateTrigger()
      this.curF++
    } else if (this.curF % this.randX < this.randX / 5) {
      this.uniforms.amount.value = Math.random() / 90
      this.uniforms.angle.value = THREE.Math.randFloat(-Math.PI, Math.PI)
      this.uniforms.distortion_x.value = THREE.Math.randFloat(0, 1)
      this.uniforms.distortion_y.value = THREE.Math.randFloat(0, 1)
      this.uniforms.seed_x.value = THREE.Math.randFloat(-0.3, 0.3)
      this.uniforms.seed_y.value = THREE.Math.randFloat(-0.3, 0.3)
      this.curF++
    } else if (this.goWild === false) {
      this.uniforms.byp.value = 1
      this.curF += 0.1
    }

    if (this.renderToScreen) {
      renderer.setRenderTarget(null)
      this.fsQuad.render(renderer)
    } else {
      renderer.setRenderTarget(writeBuffer)
      if (this.clear) renderer.clear()
      this.fsQuad.render(renderer)
    }
  },

  generateTrigger: function () {
    this.randX = MathUtils.randInt(120, 240)
  },

  generateHeightmap: function (dt_size) {
    const data_arr = new Float32Array(dt_size * dt_size * 3)
    const length = dt_size * dt_size

    for (let i = 0; i < length; i++) {
      const val = MathUtils.randFloat(0, 1)
      data_arr[i * 3 + 0] = val
      data_arr[i * 3 + 1] = val
      data_arr[i * 3 + 2] = val
    }

    return new DataTexture(data_arr, dt_size, dt_size, RGBFormat, FloatType)
  }

})

export { GlitchPass }
