export const setItem = (name: any, result: any) =>{
    localStorage.setItem(name, JSON.stringify(result));
}

export const getItem = (name: any) =>{
  return  JSON.parse(localStorage.getItem(name)!);
}

export const removeItem = (name: any) =>{
  localStorage.removeItem(name);
}