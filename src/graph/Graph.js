/**
 *
 Created by zhangzhao on 2017/8/15.
 Email: zhangzhao@gomeplus.com
 */
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    for (var i = 0;i < this.vertices;i++) {
        this.adj[i] = [];
        this.marked[i] = false;
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
        console.log(i + " -> ");
        for (var j = 0;j < this.vertices; j++) {
            if (this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] + ' ');
            }
        }
    }
}

var g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);

g.showGraph();

function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
        console.log('vistied vertex:', v);
    }
    for (var i = 0; i < this.adj[v].length; i++) {
        var w = this.adj[v][i];
        if (!this.marked[w]) {
            this.dfs(w);
        }
    }
}
//g.dfs(0);

function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
        var v = queue.shift();
        if (v !== undefined) {
            console.log("Visited vertex:", v);
        }
        for (var i = 0; i<this.adj[v].length; i++) {
            var w = this.adj[v][i];
            if (!this.marked[w]) {
                this.marked[w] = true;
                queue.push(w)
            }
        }
    }
}
g.bfs(0)