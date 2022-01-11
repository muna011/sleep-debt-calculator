const getSleepHours = day => {
    switch (day) {
      case "monday":
        return 8; 
        break;
      case "tuesday":
        return 7;
        break;
      case "wednesday":
       return 9;
       break;
      case "thursday":
        return 7;
        break;
      case "friday":
        return 8;
        break;
      case "saturday":
        return 9;
        break;
      case "sunday":
        return 5;
        break;
      default:
        return "Error!";
        break;
    }
  };
  
  const getActualSleepHours = () => getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");
  
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log(`You got the perfect amount of sleep! ${idealSleepHours} hours, Congrats!`);
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got more sleep than needed. You overslept ${actualSleepHours - idealSleepHours} hours this week.`);
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`This week, you slept ${idealSleepHours - actualSleepHours} hours below the weekly goal. You should get some more rest :(`);
    } else {
      console.log("Error...try again!");
    }
  };
  
  calculateSleepDebt();
  
  