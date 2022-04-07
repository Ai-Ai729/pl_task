import xml2js from 'xml2js';

const xmlBuilder = new xml2js.Builder();

export default class SoapClient {
    wsdlUrl;

    static generateXml(data) {
        return xmlBuilder.buildObject({
            body: data,
        });
    }

    constructor(url) {
        this.wsdlUrl = url;
    }

    async request(action, xml) {
        // make request via http
        const httpOptions = {
            method: 'POST',
            data: xml,
            headers: {
                'Content-Type': 'text/xml;charset=UTF-8',
                'soapAction': action,
            }
        };

        console.log(`Request to SOAP\nWeb Service URL: ${this.wsdlUrl}\n${JSON.stringify(httpOptions, null, 4)}`);

        // imitate async request with 500ms delay
        return new Promise((resolve) => setTimeout(() => resolve({
            status: 201,
        }), 500));
    }
}