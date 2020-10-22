var isPalindrome = function (head) {
  const listArray = [];

  let index = 0;
  let currentNode = head;

  while (currentNode != null) {
    listArray[index++] = currentNode.val;
    currentNode = currentNode.next;
  }

  return listArray.every((a, i) => {
    return a === listArray[listArray.length - i - 1];
  });
};
