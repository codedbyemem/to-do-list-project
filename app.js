let input = prompt("Please enter a command");
let list = [
  "Wash dishes", // 0
  "Feed fish", // 1
  "Wash car",
  "Sweep floor",
  "Buy groceries", // 4
];

while (input !== "QUIT") {
  if (input === "NEW") {
    let listItem = prompt("Add an item to your to-do list");
    list.push(listItem);
    console.log(`You have added ${listItem} to the list`);
  } else if (input === "VIEW") {
    console.log(list);
    for (let i = 0; i < list.length; i++) {
      // 0
      let item = list[i];
      console.log(`${i}  ${item}`);
    }
  } else if (input === "DELETE") {
    console.log(list);
    let index = prompt(
      "Please enter the index of the item you want to delete from your list"
    );
    let item = list[index];
    list.splice(index, 1);
    {
      console.log(`You have deleted ${item} from your list`);
    }
  }

  input = prompt("Please enter a command");
}
console.log("You have quit");
