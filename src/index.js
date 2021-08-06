let cytoscape = require('cytoscape')
let cise = require('cytoscape-cise')
let dagre = require('cytoscape-dagre')
let cola = require('cytoscape-cola')
let klay = require('cytoscape-klay')
let markovCluster = require('cytoscape-markov-cluster');
let hierarchical = require('cytoscape-hierarchical');

cytoscape.use(cise)
cytoscape.use(dagre)
cytoscape.use(cola)
cytoscape.use(klay)
cytoscape.use(markovCluster)
cytoscape.use(hierarchical)

globalThis.cytoscape = cytoscape

export default cytoscape
