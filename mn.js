function sorting()
{
    nameOfTheStudentArray.sort();
    console.log(nameOfTheStudentArray);

    var displayStudentArraySorting = [];

    var lenghtOfNameStudentArray = nameOfTheStudentArray.lenght;
    console.log(lenghtOfNameStudentArray);

    for (var k = 0; k < lenghtOfNameStudentArray; k++)
    {
        displayStudentArraySorting.push("<h4>NOME - " + nameOfTheStudentArray[k] + "</h4>")
        ;
        console.log(displayStudentArraySorting);
    }

    var removeCommas = displayStudentArraySorting.join(" ");
    console.logI(removeCommas);

    document.getElementById("display NameWithoutCommas").innerHTML = removeCommas;
}