export { };
declare global {
    export interface String {
        toCapitalize(): string;
    }
}
  
String.prototype.toCapitalize = function (): string {
  return this.replace(/\b\w/g, s => s.toUpperCase())
};
  