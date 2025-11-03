const tasks = [
    "Read ",
    "Sport", 
    "Arkx",
    "Test ",
    "hobbies",
    "family chat",
    "friends meeting",
    "Update my laptop",
    "tv",
    "groceries"
];
const status = [
    true,   
    true,   
    false,  
    true,   
    false,  
    true,   
    true,   
    false,  
    true,   
    true   
];

function printTaskList() {
    for (let i = 0; i < tasks.length; i++) {
        if (status[i]) {
            console.log("✓ " + tasks[i]);
        }else {
            console.log("☓ " + tasks[i]);
        }    
    }
}

printTaskList()

function getCompletionStats() {
    let doneCount = 0;
    
    for (let i = 0; i < status.length; i++) {
        if (status[i]) {
            doneCount++;
        }
    }
    
    const percent = (doneCount / tasks.length) * 100;
    console.log(doneCount + "/10 tasks complete (" + percent + "%)");
    
    return doneCount;
}

getCompletionStats()

function getUnfinishedTasks() {
    const notDone = [];
    for(let i = 0; i < tasks.length; i++){
        if (!status[i]) {
            notDone.push(tasks[i]);
        }
    }
    console.log(notDone)
} 

getUnfinishedTasks()