import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "kafka-express",
  brokers: ["<PRIVATE_IP>:9092"],
});
