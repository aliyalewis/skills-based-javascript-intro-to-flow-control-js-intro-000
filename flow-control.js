function basicTeenager(age){
  if(age<=19 && age>=13){
    return "You are a teenager!";
  }
    }
function teenager(age) {
  if(age<=19 && age>=13) {
    return "You are a teenager!";
  } else {
      return "You are not a teenager";
  }
}

function ageChecker(age) {
  if(age<=19 && age>=13) {
    return "You are a teenager!";
  } else if (age<=12) {
    return "You are a kid";
  } else (age>19)
  return "You are a grownup";
  }

function ternaryTeenager(age) {
  return age<=19 && age>=13 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
<<<<<<< HEAD
  switch (age) {
    case 13:
      return "You are a teenager";
      break;
    case 14:
      return "You are a teenager";
      break;
    case 15:
      return "You are a teenager";
      break;
    case 16:
      return "You are a teenager";
      break;
    case 17:
      return "You are a teenager";
      break;
    case 18:
        return "You are a teenager";
    break;
    case 19:
      return "You are a teenager";
      break;
    default:
      return "You have an age";
  }
}
=======
  switch (age<=19 && age>=13) {
    case "13":
    console.log("You are a teenager");
    break;
    case "14":
    console.log("You are a teenager");
    break;
    case "15":
    console.log("You are a teenager");
    break;
    case "16":
    console.log("You are a teenager");
    break;
    case "17":
    console.log("You are a teenager");
    break;
    case "18":
    console.log("You are a teenager");
    break;
    case "19":
    console.log("You are a teenager");
    break;
    default:
    return "You have an age";
    break;
  }
  }
>>>>>>> f84342a192da2bdc0786ea1572aea68bc4801598
