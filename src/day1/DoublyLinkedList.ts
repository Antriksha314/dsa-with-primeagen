type Node<T> ={
	value:T,
	prev?:Node<T>,
	next?:Node<T>,
}
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    

    constructor() {
	    this.length = 0;
	    this.head = undefined;
	    this.tail = undefined;
    }

    prepend(item: T): void {
	    const node = {value: item} as Node<T>;
	    this.length++;

	    if(!this.head){
		    this.head = this.tail = node;
		    return
	    }

        node.next = this.head;
	    this.head.prev = node;
	    this.head = node; 

	} 

    insertAt(item: T, idx: number): void {
	    if(idx > this.length){
		    throw new Error("Oh no");
	    } else if(idx === this.length ){
		    this.append(item);
		    return;
	    } else if(idx === 0){
		    this.prepend(item);
	    }
	    
	    this.length++;

		const curr = this.getAt(idx) as Node<T>;
		if(!curr){
			return
		}
	    const node = {value:item } as Node<T>;
	    node.next = curr;
	    curr.prev = node;

	    if(node?.prev){
		    node.prev.next = curr;
	    }
	}	
    append(item: T): void {
	    this.length++;
		const node = {value:item} as Node<T>;

	    if(!this.tail){
			this.head =this.tail = node;
			return
	    }
	    node.prev = this.tail;

	    this.tail.next = node;

	    this.tail = node;
	}	

    remove(item: T): T | undefined {

	    let curr = this.head;

	    for(let i = 0; curr && i < this.length; ++i){

		    if(curr.value === item){
			    break;
		    }

		    curr = curr.next;
	    };

	    if(!curr){
		    return undefined;
	    }

		const node = this.removeNode(curr) as T;

		return node
    }

    get(idx: number): T | undefined {
		const node = this.getAt(idx);
		return node?.value
    }

    removeAt(idx: number): T | undefined {
		const node = this.getAt(idx) as Node<T>;
		if(!node){
			return undefined
		}

		const item = this.removeNode(node)
		return item
    }

	private removeNode(node:Node<T>): T  | undefined{
		this.length--;

	    if(this.length === 0){
			const out = this.head?.value 
		    this.head = this.tail = undefined;
		    return out
	    }

	    if(node.prev){
		    node.prev.next = node.next;
	    }

	    if(node.next){
		    node.next.prev = node.prev;
	    }

		if(node === this.head){
		    this.head = node.next;
	    }


	    if(node === this.tail){
		    this.tail = node.prev;
	    }

	    node.prev = node.next = undefined;

		return node?.value;
	}

     
	private getAt(idx:number): Node<T> | undefined{
		if(this.length === 0){
		    return undefined;
	    }
	    let curr = this.head;

	    for(let i =0; curr && i < idx; ++i) {
		    curr = curr.next;
	    }

	    return curr
	 }
}
