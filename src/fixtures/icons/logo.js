/** The offset from the edge of the canvas to start the outer circle. */
const pointOffset = 6.335;

/** The offset from the edge of the canvas to start outer circle curve handle. */
const outerHandleOffset = 70.835;

/** The offset from the edge of the canvas to start inner circle curve handle. */
const innerHandleOffset = 583.566;

/**
 * A function to get the point value of a circle curve handle.
 * @param {number} n - The circle radius.
 * @return {number} The point value of the curve handle.
 */
const getCircleBezier = n => n * 0.552284749831;

/**
 * A function to get the point value of the outer circle curve handle.
 * @param {number} n - The circle radius.
 * @return {number} The point value of the curve handle.
 */
const getOuterCurveBezier = n => n * 0.60546875;

/**
 * A function to get the point value of the inner circle curve handle.
 * @param {number} n - The circle radius.
 * @return {number} The point value of the curve handle.
 */
const getInnerCurveBezier = n => n * 0.63931719;

export default [
  `M 1280,0
    C ${(1280 + getCircleBezier(1280))},0 ${(2560 - outerHandleOffset)},${(1280 - getOuterCurveBezier(1280))} ${(2560 - pointOffset)},1152
    C ${(2560 - pointOffset)},1152 ${((2560 - pointOffset) - 512)},1152 ${((2560 - pointOffset) - 512)},1152
    C ${(2560 - innerHandleOffset)},${(1280 - getInnerCurveBezier(768))} ${(1280 + getCircleBezier(768))},512 1280,512
    C ${(1280 - getCircleBezier(768))},512 ${innerHandleOffset},${(1280 - getInnerCurveBezier(768))} ${(pointOffset + 512)},1152
    C ${(pointOffset + 512)},1152 ${pointOffset},1152 ${pointOffset},1152
    C ${outerHandleOffset},${(1280 - getOuterCurveBezier(1280))} ${(1280 - getCircleBezier(1280))},0 1280,0`,
  `M 1280,768
    C 1280,768 1280,768 1280,768
    C ${(1280 + getCircleBezier(512))},768 1792,${(1280 - getCircleBezier(512))} 1792,1280
    C 1792,${(1280 + getCircleBezier(512))} ${(1280 + getCircleBezier(512))},1792 1280,1792
    C 1280,1792 1280,1792 1280,1792
    C 1280,1792 1280,1792 1280,1792
    C ${(1280 - getCircleBezier(512))},1792 768,${(1280 + getCircleBezier(512))} 768,1280
    C 768,${(1280 - getCircleBezier(512))} ${(1280 - getCircleBezier(512))},768 1280,768
    C 1280,768 1280,768 1280,768`,
  `M 1280,2048
    C ${(1280 + getCircleBezier(768))},2048 ${(2560 - innerHandleOffset)},${(1280 + getInnerCurveBezier(768))} ${((2560 - pointOffset) - 512)},1408
    C ${((2560 - pointOffset) - 512)},1408 ${(2560 - pointOffset)},1408 ${(2560 - pointOffset)},1408
    C ${(2560 - outerHandleOffset)},${(1280 + getOuterCurveBezier(1280))} ${(1280 + getCircleBezier(1280))},2560 1280,2560
    C ${(1280 - getCircleBezier(1280))},2560 ${outerHandleOffset},${(1280 + getOuterCurveBezier(1280))} ${pointOffset},1408
    C ${pointOffset},1408 ${(pointOffset + 512)},1408 ${(pointOffset + 512)},1408
    C ${innerHandleOffset},${(1280 + getInnerCurveBezier(768))} ${(1280 - getCircleBezier(768))},2048 1280,2048`,
];
