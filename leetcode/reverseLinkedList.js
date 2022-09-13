function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

function reverseList(head) {
    let prev = null;

    while (head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
let test = LinkedListNode([1,2,3,4]);
console.log(reverseList(test))