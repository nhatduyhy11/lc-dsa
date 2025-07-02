const { Heap } = require("./src/heap");
const { MinHeap } = require("./src/minHeap");
const { MaxHeap } = require("./src/maxHeap");
const { MinPriorityQueue } = require("./src/minPriorityQueue");
const { MaxPriorityQueue } = require("./src/maxPriorityQueue");
const { PriorityQueue } = require("./src/priorityQueue");

// exports.Heap = Heap;
// exports.MinHeap = MinHeap;
// exports.MaxHeap = MaxHeap;

module.exports = {
    MinPriorityQueue,
    MaxPriorityQueue,
    PriorityQueue,
    Heap,
    MinHeap,
    MaxHeap,
};
