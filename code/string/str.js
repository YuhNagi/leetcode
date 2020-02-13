import { stringTypeAnnotation } from "@babel/types";

// 反转字符串中的单词
/* 
给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例 1:

输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc" 
注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
*/

// 方法一：使用数组自带的反转api, reverse()
// export function reverseWords(str){
//     return str.split(' ').map(item=>{
//     return str.split(/\s/g).map(item=>{ // 同样思路，用正则匹配
//     return str.match(/[\w']+/g).map(item=>{ // 同样思路，用正则匹配
//         return item.split('').reverse().join('');
//     }).join(' ');    
// };

// 方法二： 思路同上，不同的是分割和反转方法自己写

export function reverseWords(str){
    let splitArr = split(str);
    let tempStr = '';
    for(let i = 0; i< splitArr.length; i++){
        tempStr += reverse(splitArr[i]);
    }
    return tempStr;
}
function reverse(str){
    var tempStr = '';
    for(let i = str.length-1; i>=0; i--){
        tempStr += str[i];
    }
    return tempStr;
}

function split(str){
	let tempStr= '';
	let arr = [];
	for(let i = 0;i<str.length;i++){
		if(str[i] === ' '){
            if(tempStr!== ''){ arr.push(tempStr)}; // 排除第一位为空的情况
            arr.push(' ');
			tempStr= '';
		}else{
			tempStr+= str[i]
        }
        if(i === str.length-1){
            arr.push(tempStr);
        }

	}	
	return arr;
}


/* 
示例 1 :
    输入: "00110011"
    输出: 6
    解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
*/

// 多种解法参照: https://zhuanlan.zhihu.com/p/100312293
