import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const client = new SESClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.EMAIL_ACCESS_KEY,
    secretAccessKey: process.env.EMAIL_SECRET_ACCESS_KEY,
  },
});

const params = {
  ConfigurationSetName: 'test',
  Destination: {
    ToAddresses: ['jonathonm12@yahoo.com'],
  },
  Message: {
    Body: {
      Text: {
        Data: 'Hello',
      },
    },
    Subject: {
      Data: 'Testing',
    },
  },
  Source: 'jonathon.moodyt@gmail.com',
};
const command = new SendEmailCommand(params);

export default async function handler(req, res) {
  console.log(req.body);
  try {
    // const data = await client.send(command);
    // process data.
    // console.log(data);
    console.log('Should be something here');
    return res.status(200).json({ message: 'Successfully sent email' });
  } catch (error) {
    // error handling.
    console.log('Didnt Work');
    console.log(error);
  } finally {
    // finally.
  }
  return res.status(404).json({ message: 'Error Sending Email' });
}
