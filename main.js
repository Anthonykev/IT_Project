function scissor_stone_paper()
 {
    const options = ["scissor", "stone", "paper"];
    let input1;
    let input2;
    let choice = prompt("Enter (1) for Player vs Enemy or enter (2) for Player vs CPU");
    
    
             input1 = prompt("Player please enter your choice: scissor, stone, paper");

             if(choice === '1')
             {
             input2 = prompt("Enemy please enter your choice: scissor, stone, paper");

             } else if(choice === '2')
             {
                input2 = options[Math.floor(Math.random() * 3)];
             } else {
                alert("Invalid input");
             }
             
        
            if(input1 === input2) {
                alert("Oh no, you both made the same choice, it’s a draw.");
            } else if (input1 === "scissor") {
                if (input2 === "paper") {
                    alert("Player won!!!!!!!");
                } else {
                    alert("Enemy won!!!!!!!");
                }
            } else if (input1 === "stone") {
                if (input2 === "scissor") {
                    alert("Player won!!!!!!!");
                } else {
                    alert("Enemy won!!!!!!!");
                }
            } else if (input1 === "paper") {
                if (input2 === "stone") {
                    alert("Player won!!!!!!!");
                } else {
                    alert("Enemy won!!!!!!!");
                }
            }
        
}       
    // -----------------------------------------------------------------------
