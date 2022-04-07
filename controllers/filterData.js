import query from '../services/db.js';
import {
    filterList,
} from '../services/filterList.js';
import SoapClient from '../services/soapClient.js';

const soapClient = new SoapClient('http://example.com/wsdl?wsdl');

export default async function filterData(req, res) {
    try {
        console.log(`Getting array from DB...\n`);
        const data = await query(
            `SELECT id, name, code 
                FROM pl_task`
        );
        console.log(`Array from DB: ${JSON.stringify(data, null, 4)}\n`);

        const filtered = filterList(data);
        console.log(`Filtered array: ${JSON.stringify(filtered, null, 4)}`);

        const response = await soapClient.request('PutFilteredData', SoapClient.generateXml(filtered));

        res
            .sendStatus(response.status);
    } catch (ex) {
        res.sendStatus(500);
    }
}