// https://kafka.js.org/docs/consuming
// https://kafka.js.org/docs/consumer-example

import { kafka } from "./kafka.client.js";

const group = process.argv[2];

async function init() {
  const consumer = kafka.consumer({ groupId: group });
  console.log("--> Consumer connecting...");
  await consumer.connect();
  console.log("--> Consumer connected");

  await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(
        `--> Message received from [GROUP: ${group}] [TOPIC: ${topic}] [PARTITION: ${partition}] [MESSAGE: ${message.value.toString()}]`
      );
    },
  });
}

init();
