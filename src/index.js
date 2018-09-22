module.exports = function solveEquation(equation) {
  const reg = /^(-?[0-9]*)\s\*\sx\^2\s([+-]+\s[0-9]*)\s\*\sx\s([+-]+\s[0-9]*)$/;
  const arrMatch = equation.match(reg);
  const a = +arrMatch[1];
  const b = +(arrMatch[2].replace(/\s/g, ''));
  const c = +(arrMatch[3].replace(/\s/g, ''));
  const D = b*b - 4*a*c;

  const x1 = Math.round((-b - Math.sqrt(D))/(2*a));
  const x2 = Math.round((-b + Math.sqrt(D))/(2*a));

  return x1 < x2 ? [x1, x2] : [x2, x1];
}
