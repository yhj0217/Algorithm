function solution(common) {
    var answer = 0;
    if(common[1] - common[0] == common[common.length - 1] - common[common.length - 2])
        {
            return common[0] + ((common[1] - common[0]) * common.length);
        }
    else       
        return common[0] * (common[1] / common[0]) ** common.length;
}