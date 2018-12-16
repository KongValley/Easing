# 使用说明

## 前言

基于JQuery的`jquery.easing.1.3.js`改造，主要是方便自己使用



## 分类

总共分为以下运动方式:

1. Linear（线性匀速）
2. Quad（二次方的缓动）
3. Cubic（三次方的缓动）
4. Quart（四次方的缓动）
5. Quint（五次方的缓动）
6. Sine（正弦曲线的缓动）
7. Expo（指数曲线的缓动）
8. Circ（圆形曲线的缓动）
9. Elastic（指数衰减的正弦曲线缓动）
10. Back（超过范围的三次方缓动）
11. Bounce（指数衰减的反弹缓动）



## 引入&使用

除Linear外，其他每种缓动算法效果都可以分为三个缓动方式，分别是：

- easeIn：从0开始加速的缓动
- easeOut：减速到0的缓动
- easeInOut：前半段从0开始加速，后半段减速到0的缓动



```js
// 在easing.js里的实际代码
// 二次方的缓动，f(t) = t^2
export const Quad = {
  easeIn(t, b, c, d) {
    return c * (t /= d) * t + b
  },
  easeOut(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b
  },
  easeInOut(t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t + b
    return (-c / 2) * (--t * (t - 2) - 1) + b
  }
}

// 引入
import { Quad } from './easing.js'
// 使用
Quad.easeIn(t,b,c,d)
```

