var friends = require("../data/friends");
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

      app.post('/api/friends', function(req, res) {
        friends.push(req.body);
        res.json(true);
        var name;
        var image;
        var diff = 0;

        for (i = 0; i <friends.length; i++)
        {
            for (j = 0; j <friends[i].length; j++)
            {
                diff += Math.abs(friends[i].scores[j] - friends[i + 1].scores[j]);
                var totaldiff = [];
                totaldiff.push(diff);
                var a = Math.max(...totaldiff);
                var b = totaldiff.indexOf(a);
                name = friends[b].name
                image = friends[b].photo
            }
        }
      });
};
