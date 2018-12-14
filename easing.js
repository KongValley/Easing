/*
 * @Author: Chara 
 * @Date: 2018-12-14 14:54:01 
 * @Last Modified by: Chara
 * @Last Modified time: 2018-12-15 01:06:54
 */

/**
 * @description jquery各种缓动函数
 * @author Chara
 * @export object
 * @param {time} t 当前已经运动的时间
 * @param {begin} b 距离的初始值
 * @param {change} c 目标值与初始值的差值，即需要变化的量
 * @param {duration} d 运动时长，可以理解为动画总时间
 * @returns
 */

/** 
 * 每种缓动算法效果都可以分为三个缓动方式，分别是：
 * easeIn：从0开始加速的缓动
 * easeOut：减速到0的缓动
 * easeInOut：前半段从0开始加速，后半段减速到0的缓动
 */

// 线性缓动
export const Linear = (t,b,c,d)  => c*t/d + b

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

// 三次方的缓动，f(t) = t^3
export const Cubic = {
  easeIn(t, b, c, d) {
    return c * (t /= d) * t * t + b
  },
  easeOut(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b
  },
  easeInOut(t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b
    return (c / 2) * ((t -= 2) * t * t + 2) + b
  }
}

// 四次方的缓动，f(t) = t^4
export const Quart = {
  easeIn(t, b, c, d) {
    return c * (t /= d) * t * t * t + b
  },
  easeOut(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b
  },
  easeInOut(t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b
    return (-c / 2) * ((t -= 2) * t * t * t - 2) + b
  }
}

// 五次方的缓动，f(t) = t^5
export const Quint = {
  easeIn(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b
  },
  easeOut(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b
  },
  easeInOut(t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b
    return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b
  }
}

// 正弦曲线的缓动，f(t) = sin(t)
export const Sine = {
  easeIn(t, b, c, d) {
    return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b
  },
  easeOut(t, b, c, d) {
    return c * Math.sin((t / d) * (Math.PI / 2)) + b
  },
  easeInOut(t, b, c, d) {
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b
  }
}

// 指数曲线的缓动，f(t) = 2^t；
export const Expo = {
  easeIn(t, b, c, d) {
    return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
  },
  easeOut(t, b, c, d) {
    return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b
  },
  easeInOut(t, b, c, d) {
    if (t === 0) return b
    if (t === d) return b + c
    if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b
    return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b
  }
}

// 圆形曲线的缓动，f(t) = sqrt(1 – t^2)；
export const Circ = {
  easeIn(t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
  },
  easeOut(t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
  },
  easeInOut(t, b, c, d) {
    if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b
    return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
  }
}

// 指数衰减的正弦曲线缓动
export const Elastic = {
  easeIn(t, b, c, d) {
    let s = 1.70158
    let p = 0
    let a = c
    if (t === 0) return b
    if ((t /= d) === 1) return b + c
    if (!p) p = d * 0.3
    if (a < Math.abs(c)) {
      a = c
      s = p / 4
    } else s = (p / (2 * Math.PI)) * Math.asin(c / a)
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b
  },
  easeOut(t, b, c, d) {
    let s = 1.70158
    let p = 0
    let a = c
    if (t === 0) return b
    if ((t /= d) === 1) return b + c
    if (!p) p = d * 0.3
    if (a < Math.abs(c)) {
      a = c
      s = p / 4
    } else s = (p / (2 * Math.PI)) * Math.asin(c / a)
    return a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b
  },
  easeInOut(t, b, c, d) {
    let s = 1.70158
    let p = 0
    let a = c
    if (t === 0) return b
    if ((t /= d / 2) === 2) return b + c
    if (!p) p = d * (0.3 * 1.5)
    if (a < Math.abs(c)) {
      a = c
      s = p / 4
    } else s = (p / (2 * Math.PI)) * Math.asin(c / a)
    if (t < 1)
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) * 0.5 + c + b
  }
}

// 超过范围的三次方缓动，f(t) = (s + 1) t^3 – 3 t^2；
export const Back = {
  easeIn(t, b, c, d, s= 1.70158) {
    return c * (t /= d) * t * ((s + 1) * t - s) + b
  },
  easeOut(t, b, c, d, s = 1.70158) {
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
  },
  easeInOut(t, b, c, d, s = 1.70158) {
    if ((t /= d / 2) < 1) return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b
    return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
  }
}

// 指数衰减的反弹缓动；
export const Bounce = {
  easeIn(t, b, c, d) {
    return c - this.easeOut(d - t, 0, c, d) + b
  },
  easeOut(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
    }
  },
  easeInOut(t, b, c, d) {
    if (t < d / 2) return this.easeIn(t * 2, 0, c, d) * 0.5 + b
    return this.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
  }
}
