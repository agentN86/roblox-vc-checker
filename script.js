function dostuff() {
    // basically grab the json file from the input
    // do stuff
    // and then return it back to the user
    var fileList = document.getElementById('jsonFile');
    var data = fileList.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {

        try {
            var data = JSON.parse(event.target.result);
            if (data.isBanned) {
                console.log("banned");
                var reasons = [
                    "NOTBANNED", // 0 (not banned)
                    "unknown reasons", // 1
                    "unknown reasons", // 2
                    "unknown reasons", // 3
                    "unknown reasons", // 4
                    "harassing/bullying others", // 5
                    "self-harm/threating others" // 6
                ];

                document.getElementById('reason').innerText = " for " + reasons[data.banReason];
                document.getElementById('until').style.display = "block";
                const stamp = new Date(data.bannedUntil.Seconds * 1000);
                document.getElementById('timestamp').innerText = `${stamp.toDateString()}, ${stamp.toTimeString()}`;

            } else {

                console.log("not banned");
                document.getElementById('result').innerText = "not";
                var stuff = ["go enjoy a nice dinner, or whatever you can do", "keep it moving"];
                document.getElementById('oneliner').innerText = stuff[Math.floor(Math.random() * stuff.length)];

            }

        } catch (error) {
            console.error("Error parsing JSON:", error);
        }

    };


    reader.onerror = function (event) {
        console.error("Error reading file:", event.target.error);
    };

    reader.readAsText(data);
}
