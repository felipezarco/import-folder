const boolean = (variable: any): boolean =>
  ['true', true, 1, '1', 'false', false, 0, '0'].includes(variable)
  
  const number = (variable: any): boolean => !isNaN(variable)
  
  export default {
    boolean,
    number
  }
