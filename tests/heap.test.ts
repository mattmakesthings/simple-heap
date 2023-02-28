import { Heap } from '../heap';

describe('testing heap implementation', () => {
    test('simple insert', () =>{
        let heap = new Heap()
        let value = 1
        heap.insert(value)
        expect(heap.top()).toBe(value);
    });

    test('multi insert', () =>{
        let heap = new Heap()
        let top_value = 10
        heap.insert(1)
        heap.insert(7)
        heap.insert(top_value)
        heap.insert(3)
        expect(heap.top()).toBe(top_value);
    });

    test('simple pop', () =>{
        let heap = new Heap()
        let value = 1
        heap.insert(value)
        expect(heap.pop()).toBe(value);
    });

    test('multi pop', () =>{
        let heap = new Heap()
        heap.insert(1)
        heap.insert(7)
        heap.insert(3)
        heap.insert(4)
        expect(heap.pop()).toBe(7);
        expect(heap.pop()).toBe(4);
        expect(heap.pop()).toBe(3);
        expect(heap.pop()).toBe(1);
    });
});
