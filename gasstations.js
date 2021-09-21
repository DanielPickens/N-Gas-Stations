//top down approache

var canCompleteCircuit = function(gas, cost) {
     var start = 0;
        var curTank = 0, tank = 0;
        for(let i = 0; i < gas.length; i++){
            let curGain = gas[i] - cost[i];
            tank += curGain;
            if(curTank + curGain < 0){
                start = i + 1;
                curTank = 0;
            }
            else
                curTank += curGain;
        }
        if(tank < 0)
            return -1;
        else
            return start;
    }





/*
Success
Details 
Runtime: 68 ms, faster than 94.84% of JavaScript online submissions for Gas Station.
Memory Usage: 39 MB, less than 67.66% of JavaScript online submissions for Gas Station.
*/
