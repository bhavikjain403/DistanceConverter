(function(){
    var c = "mToK"
    window.addEventListener("keydown", function(event){
        if(event.key=="K" || event.key=="k")
        {
            document.querySelector("h1").innerHTML = "Kilometers to Miles Converter"
            document.querySelector("p").innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles."
            document.getElementById("answer").innerHTML = ""
            c = "kToM"
        }
        else if(event.key=="M" || event.key=="m")
        {
            document.querySelector("h1").innerHTML = "Miles to Kilometers Converter"
            document.querySelector("p").innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers."
            document.getElementById("answer").innerHTML = ""
            c = "mToK"
        }
    })
    document.getElementById("convert").addEventListener("submit", function(evt){
        evt.preventDefault();		//So that page does not refreshes after submission
        var distance = document.getElementById("distance").value;
        if(c=="mToK")
        {
            if(distance>=0)
            {
                var km = distance*1.60934;
                km = km.toFixed(3);
                document.getElementById("answer").innerHTML = `<h2>${distance} miles converts to ${km} kilometers</h2>`;
            }
            else
                document.getElementById("answer").innerHTML = `<h2>Please provide a non-negative number</h2>`;
        }
        else if(c=="kToM")
        {
            if(distance>=0)
            {
                var miles = distance/1.60934;
                miles = miles.toFixed(3);
                document.getElementById("answer").innerHTML = `<h2>${distance} kilometers converts to ${miles} miles</h2>`;
            }
            else
                document.getElementById("answer").innerHTML = `<h2>Please provide a non-negative number</h2>`;
        }
    })
})();