function timeAgoFunc(timestamp) {
  const currentTime = new Date().getTime();
  const timeDifference = currentTime - timestamp;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (seconds < 60) {
    return `${seconds} সেকেন্ড আগে`;
  } else if (minutes < 60) {
    return `${minutes} মিনিট আগে`;
  } else if (hours < 24) {
    return `${hours} ঘণ্টা আগে`;
  } else {
    // You can add additional formatting for longer time differences if needed
    const days = Math.floor(hours / 24);
    return `${days} দিন আগে`;
  }
}
export default timeAgoFunc;
