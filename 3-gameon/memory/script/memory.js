"use strict";

function MemoryBoard(memoryID, rows, cols)
{
    randomArray = [];
    
    this.init = function()
    {
        this.randomArray = RandomGenerator.getPictureArray(rows, cols);
    };
    
}
window.onload = function()
{
    
    new MemoryBoard("Board1", 4, 4).init();
    
}