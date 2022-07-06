import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const client = new SESClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.EMAIL_ACCESS_KEY,
    secretAccessKey: process.env.EMAIL_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const params = {
    ConfigurationSetName: 'test',
    Destination: {
      ToAddresses: ['jonathonm12@yahoo.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: `Hey! Their name is "${req.body.name}" and their email is "${req.body.email}". Here's what they said "${req.body.message}"`,
        },
      },
      Subject: {
        Data: 'Joy Someone Wants To Talk To You!',
      },
    },
    Source: 'jonathon.moodyt@gmail.com',
  };
  const command = new SendEmailCommand(params);

  try {
    const data = await client.send(command);
    // process data.
    return res.status(200).json({ message: 'Successfully sent email' });
  } catch (error) {
    // error handling.
    console.log(error);
  }
  return res.status(404).json({ message: 'Error Sending Email' });
}
