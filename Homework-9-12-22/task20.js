for (let i = 0; i <= 9; i++) {
    // принтираме първото число
    let row = "" + i;
  
    // взимаме следващите числа
    for (let j = i + 1; j <= i + 9; j++) {
      let num = j % 10;
      row += " " + num;
    }
  
    // принтираме таблицата
    console.log(row);
  }