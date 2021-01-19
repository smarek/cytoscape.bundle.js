let cytoscape = require('cytoscape')
let cise = require('cytoscape-cise')
let dagre = require('cytoscape-dagre')
let cola = require('cytoscape-cola')
let klay = require('cytoscape-klay')

cytoscape.use(cise)
cytoscape.use(dagre)
cytoscape.use(cola)
cytoscape.use(klay)

globalThis.cytoscape = cytoscape

export default cytoscape
