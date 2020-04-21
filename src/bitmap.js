class Bitmap {

  /**
   * Create an object with base name and bitmap set
   * from provided strings. The first string should be
   * base name, other strings is modifiers
   * 
   * @param  {...string} args 
   */
  constructor(...args) {
    this.base = args[0];
    this.map = {};
    args.forEach((arg, i) => this.map[arg] = 2 ** i);
  }

  getMask(...args) {
    let mask = 1;
    for (let arg of args) {
      mask = mask | this.map[arg]
    }
    return mask;
  }

  getName(mask, divider='_') {
    let name = [];
    for (let [mod, bit] of Object.entries(this.map)) {
      if (mask & bit) {
        name.push()
      }
    }
  }

  /**
   * Create set where keys is binary numbers like 1, 10, 100, 1000... etc
   * and values is flag names. For HTML class modifiers need to use divider 
   * that will divide base (block or element) from modifier.
   * 
   * @param {string} [divider=false] Divider for class modifiers (i.e. if '_' some-class_modifier)
   * @returns {Object} 
   */
  getState(divider = false) {
    const state = {};
    for (let [arg, bit] of Object.entries(this.map)) {
      if (divider && bit !== 1) {
        state[bit] = this.base + divider + arg;
      }
      else {
        state[bit] = arg;
      }
    }
    return state;
  }
}


export default Bitmap;