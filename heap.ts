
export class Heap{

    heap: Array<number>;

    constructor(){
        this.heap = [];
    }

    insert(value: number){
        this.heap.push(value)
        let last_ind: number = this.heap.length > 0 ? this.heap.length-1 : 0
        this.swim(last_ind)
    }

    pop(): number | undefined{
        const val = this.heap.shift()
        let last_ind: number = this.heap.length > 0 ? this.heap.length-1 : 0
        this.heap.unshift(this.heap[last_ind])
        this.sink(0)
        return val
    }

    top(): number{
        return this.heap[0]
    }
    
    swim(index: number){
        const val: number | undefined = this.heap[index]
        
        if(val == undefined){
            return
        }

        const parent_index= index > 0 ? Math.floor((index-1)/2) : 0

        if (val <= this.heap[parent_index]){
            return
        }
        this.swap(index, parent_index)
        this.swim(parent_index)
    }

    sink(index: number){
        const val: number | undefined = this.heap[index]
        
        if(val == undefined){
            return
        }

        let l = index*2 + 1
        let r = index*2 + 2

        const swap_index: number = this.heap[l] > this.heap[r] ? l : r 

        if (val < this.heap[swap_index]){
            this.swap(index, swap_index)
            this.sink(swap_index)
            return
        }
    }

    swap(ind_a: number, ind_b: number){
        let hold: number = this.heap[ind_a];
        this.heap[ind_a] = this.heap[ind_b];
        this.heap[ind_b] = hold;
    }
}