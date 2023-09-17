# Kafka Js

1. Admin
2. Producer
3. Consumer

## Setup

1. docker run -p 2181:2181 zookeeper
2. docker run -p 9092:9092 \
   -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
   -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
   -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
   confluentinc/cp-kafka

## Run

1. npm i
2. node admin.js
3. node producer.js
   > name location
4. node consumer.js groupId

## Screenshots

**Running consumer `group1`**

If we run two consumer in same group, it splits the data to different partition. Where partition 0 to take north.

![Screenshot from 2023-09-17 20-46-47](https://github.com/Kaviarasan-R/kafka-js/assets/62686489/5619dbc1-0d8e-4b51-b3dc-fad1284f57df)

**Running consumer `group2`**

If we run one consumer in one group, it doesn't splits the data to different partition. Where put all data to single consumer.

![Screenshot from 2023-09-17 20-47-29](https://github.com/Kaviarasan-R/kafka-js/assets/62686489/9b7eea39-e474-47ce-8133-02fe4900e85a)

## Docs

https://kafka.js.org/docs/introduction
