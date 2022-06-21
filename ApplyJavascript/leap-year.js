const IsLeapYear = (year) =>{
    if(year % 4 == 0){
        if(year % 100 !== 0){
            return True
        }
        else{
            if ( year % 100 == 0 && year % 400 == 0){
                return true;
            }
            else{
                return false;
            }
        }
    }
    else{
        return false;
    }
}
const year = 2100;
console.log(IsLeapYear(year));