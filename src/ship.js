
function Ship(port) {
  this.currentPort = port;
}

Ship.prototype.setSail = () => {
  this.currentPort = !true;
};

Ship.prototype.dock = (port) => {
  this.currentPort = port;
};

module.exports = Ship;
