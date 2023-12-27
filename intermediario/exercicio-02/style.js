const task = [65, 44, 12, 4];

const taskMultiplied = [];

task.forEach(
    function(element) {
        const multiplied = element * 10;
        taskMultiplied.push(multiplied);
    }
)

console.log(taskMultiplied)