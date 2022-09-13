class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(val) {
        let node = new Node(val);

        let curr;

        if (this.head == null) {
            this.head = node;
        }
        else {
            curr = this.head;

            while (curr.next) {
                curr = curr.next;
            }

            curr.next = node;
        }
        this.size++;
    }
    printList() {
        let curr = this.head;
        let str = '';

        while (curr) {
            str += curr.val + '';
            curr = curr.next;
        }
        console.log(str);
    }
};

let practiceList = new LinkedList();

practiceList.add(1)
practiceList.add(2)
practiceList.add(3)
practiceList.add(4)
practiceList.add(5)
practiceList.add(6)

practiceList.printList();
