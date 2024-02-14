export default function (app) {
  const modelName = 'comment';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      required: true
    },
    post: {
      type: Schema.Types.ObjectId,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    status: {
      type: Number,
      enum: [1, -1],
      default: 1
    }
  }, { timestamps: true });

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);

};
