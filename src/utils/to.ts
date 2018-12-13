
/**
 * convert
 */
const to = {

  obj__queryString: (obj: any): string => {
    let query = ''
    for (let i in obj) {
      query += `?${ Object.keys(obj) }=${ obj[i] }`;
    }
    return query;
  },
};

export default () => {
  return to;
};