/**
 * Created by jak on 3/19/16.
 */


function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.add = function(vector) {
    this.x += x;
    this.y += y;
    return this;
}

Vector.prototype.subtract = function(vector) {
    this.x -= x;
    this.y -= y;
    return this;
}


/**
 * @param x
 * @param y
 * @returns {Vector}
 */
function newVector(x, y) {
    return new Vector(x, y);
}


