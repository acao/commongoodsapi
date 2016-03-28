import fs from 'fs';
import parse from 'csv-parse';
import Good from '../../server/models/good';

async function generateData() {
  try {
    const parser = parse({delimiter: ','}, async(err, data) => {
      if (err) throw err;
      const goodsToInsert = await buildData(data);
      if (goodsToInsert.length > 100){
        console.log('stuff')
        await Good.insertMany(goodsToInsert);
      }

    })
    fs.createReadStream(__dirname + '/../../data/FrontierExcelCatalog.csv').pipe(parser);
  }
  catch (er) {
    throw er;
  }

}

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

export default generateData;
