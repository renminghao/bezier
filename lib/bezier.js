
export const middlePoint = (start,end) => [end[0],start[1]];

// http://www.html-js.com/article/1628
export const getBezierControlPoint = (start,end,addValue = 1) => {
  //算出中间节点
  let mp = middlePoint(start,end);

  let result = []
  //从开始节点一直找到中间节点
  for(let s = start[0]; s <= mp[0]; s+=addValue) {
    //水平长度
    let lengthH = mp[0] - start[0];
    let rate = (s - start[0]) / lengthH;
    //算出用于查找控制点水平坐标每次的增量
    let incrementalH = lengthH * rate;
    //垂直长度
    let lengthV = end[1] - mp[1];
    //算出用于查找控制点垂直坐标每次的增量
    let incrementalV = lengthV * rate;
    //控制点1的坐标
    let controlPoint1 = [start[0] + incrementalH,mp[1]];
    //控制点2的坐标
    let controlPoint2 = [end[0],mp[1] + incrementalV];
    //算出两条控制点连线上面的中间节点的坐标
    let middleControlPoint = [
      controlPoint1[0] + ( controlPoint2[0] - controlPoint1[0] ) * rate,
      controlPoint1[1] + ( controlPoint2[1] - controlPoint1[1] ) * rate
    ]
    result.push(middleControlPoint)
  }
  return result;
};
