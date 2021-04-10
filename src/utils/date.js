/*
*  date new Date() data new Date(时间戳)
*  hms true 显示时分秒
*/
export const formatTime = (date, hms) => {
    if (!date) {
        date = new Date();
    }
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    return [year, month, day].map(formatNumber).join('-') + ( hms ? ' ' + [hour, minute, second].map(formatNumber).join(':') : '') 
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
