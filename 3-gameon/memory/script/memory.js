"use strict";

function MemoryBoard(memoryID)
{
    this.init = function()
    {
        
    };
}
window.onload = function()
{
    new MemoryBoard("Board1").init();
    new MemoryBoard("Board2").init();
}