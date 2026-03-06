import * as tf from "@tensorflow/tfjs"

const model = tf.sequential()

model.add(tf.layers.dense({
units:24,
inputShape:[8],
activation:"relu"
}))

model.add(tf.layers.dense({
units:24,
activation:"relu"
}))

model.add(tf.layers.dense({
units:4,
activation:"softmax"
}))

model.compile({
optimizer:"adam",
loss:"categoricalCrossentropy"
})

export default model
