// This security helper is used to limit what is returned from an object by speicified keys.
export const filterObject = (obj: any, ...allowedFields: any) => {
  const newObject: any = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObject[el] = obj[el];
    }
  });
  return newObject;
};
