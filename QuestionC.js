// GET:
// if key is present: 1) GET the value of the key 2)UPDATE this key-value pair to the front of list
// if key is not present: return -1

// PUT:
// if key is present: UPDATE the key-value pair, put it in the front of list
// if key is not present:
//     if current cache size = cache capacity: REMOVE the LRU key-value pair(the last node) and ADD current pair to the front of list
//     else ADD current pair to the front of list
//

// combine Double Linked List with Maps

class Node {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.next = null;
		this.pre = null;
	}
}

class LRUCache {
	constructor(capacity) {
		this.capacity = capacity;
		this.map = new Map();
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	get(key) {
		//key is not in map
		if (!this.map.has(key)) {
			return -1;
		}
		//key is already in map: 1)remove key from list 2)insert at front of list 3)return the value
		this.remove(key);
		this.addFirst(key);
		return this.map.get(key);
	}

	put(key, value) {
		//create a new Node with key-value pair
		var newNode = new Node(key, value);
		//key-value pair already in list: update both in map and list, remove the node then add to the front
		if (this.map.has(key)) {
			this.map.set(key, value);
			this.remove(map.get(key));
			this.addFirst(newNode);
		} else {
			//key-value pair not in list:
			//list already full: delete last node in list and also delete it in map
			if (this.length == this.capacity) {
				this.removeLast();
			}
			//list not full: add to the front and also add in map
			this.map.set(key, value);
			this.addFirst(newNode);
		}
	}

	//insert the node at the head of the list
	addFirst(newNode) {
		//head not exist
		if (this.head == null) {
			this.head = this.tail = newNode;
		} else {
			//head already exist
			newNode.next = this.head;
			newNode.pre = null;
			this.head.pre = newNode;
			this.head = newNode;
		}
		this.length++;
	}

	//remove a node from list
	remove(n) {
		if (this.head == n && this.tail == n) {
			this.head = null;
			this.tail = null;
		} else if (this.tail == n) {
			n.pre.next = null;
			this.tail = n.pre;
		} else if (this.head == n) {
			n.next.pre = null;
			this.head = n.next;
		} else {
			n.pre.next = n.next;
			n.next.pre = n.pre;
		}
		this.map.delete(n.key);
		this.length--;
	}
	//remove last node in the list and return the deleted last node
	removeLast() {
		this.remove(this.tail);
	}
}
