var getUserRepos = function(user) {
    fetch("https://api.github.com/users/octocat/repos").then(function(response) {
        var apiUrl = "https://api.github.com/users/" + user + "/repos";
        fetch(apiUrl).then(function(response) {
            response.json().then(function(data) {
                console.log(data);
                });
        
            });
    });

console.log("outside");
};

getUserRepos("facebook");
