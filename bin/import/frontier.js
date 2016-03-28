import fs from 'fs';
import parse from 'csv-parse';
import transform from 'stream-transform';
import Good from '../../server/models/good';

const parser = parse({delimiter: ','}, async(err, data) => {
  if (err) throw err;
  const goodsToInsert = buildData(data);
  await Good.insertMany(goodsToInsert);
})
fs.createReadStream(__dirname + '/../../data/FrontierExcelCatalog.csv').pipe(parser);



function buildData(goodsToImport) {
  let goodsToInsert = [];
  let category = 'default';
  for (var i = 0; i < goodsToImport.length; i++) {
    const good = goodsToImport[i];
    if (!good[1]) {
      category = good[0];
    }
    else {
      goodsToInsert.push({
        barCode: (good[0] || '000'),
        name: (good[4] || 'No Name'),
        wholesalePrice: good[6].trim().replace('$',''),
        category,
        origin: 'stuff',
      });
    }

  }
  return goodsToInsert;
}
