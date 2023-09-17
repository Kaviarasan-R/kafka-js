// https://kafka.js.org/docs/admin

import { kafka } from "./kafka.client.js";

async function init() {
  const admin = kafka.admin();
  console.log("--> Admin connecting...");
  await admin.connect();
  console.log("--> Admin connected");

  /* 
  {
    topic: <String>,
    numPartitions: <Number>,     // default: -1 (uses broker `num.partitions` configuration)
    replicationFactor: <Number>, // default: -1 (uses broker `default.replication.factor` configuration)
    replicaAssignment: <Array>,  // Example: [{ partition: 0, replicas: [0,1,2] }] - default: []
    configEntries: <Array>       // Example: [{ name: 'cleanup.policy', value: 'compact' }] - default: []
  }
  */
  console.log("--> Creating topics [rider-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("--> Topic created success [rider-updates]");

  console.log("--> Disconnecing admin...");
  await admin.disconnect();
}

init();
