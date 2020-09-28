if (!Object.is) {
  Object.is = function (v1, v2) {
    if (v1 === 0 && v2 === 0) {
      // 作为分母
      return 1 / v1 === 1 / v2;
    }

    // 检测 NaN, NaN 不等于 NaN
    if (v1 !== v1) {
      return v2 !== v2;
    }

    return v1 === v2;
  };
}
