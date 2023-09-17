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

## Docs

https://kafka.js.org/docs/introduction
