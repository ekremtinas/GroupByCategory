
 const groupByCategory=(array,field)=>{
    const groupBy = array.reduce((group, items) => {
      const f = items[field];
      group[f] = group[f] ?? [];
      group[f].push(items);
      return group;
    }, {});
    return groupBy;
  }
const groupByCategoryFormatted=(array,field)=>{
    const groupBy = array.reduce((group, items) => {
      const f = items[field];
      group[f] = group[f] ?? [];
      group[f].push(items);
      return group;
    }, {});
    return Object.entries(groupBy).map(item=>{ let obj={}; obj[field]=item[0]; obj['array']=item[1];  return obj});
  }
 module.exports = groupByCategoryFormatted;
 module.exports={groupByCategory};