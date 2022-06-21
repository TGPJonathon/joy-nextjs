import { XMLParser } from 'fast-xml-parser';

const parser = new XMLParser();

export const getShippingRates = async (buyerZipCode) => {
  const xml = `<RateV4Request USERID="990SELF07373"><Package ID="0"><Service>Online</Service><ZipOrigination>21201</ZipOrigination><ZipDestination>${buyerZipCode}</ZipDestination><Pounds>0</Pounds><Ounces>13</Ounces><Container></Container><Machinable>TRUE</Machinable></Package></RateV4Request>`;
  const url =
    'https://secure.shippingapis.com/shippingapi.dll?API=RateV4&XML=' +
    encodeURIComponent(xml);

  const response = await fetch(url);
  const text = await response.text();
  const data = await parser.parse(text);

  return data;
};
