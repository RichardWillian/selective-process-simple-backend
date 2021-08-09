export { };
declare global {
    export interface Array<T> {
        allElementsAreNumber(): boolean;
    }
}
  
Array.prototype.allElementsAreNumber = function (): boolean {
  return this.every(function(element) {
      return typeof element === 'number';
    });
};
  