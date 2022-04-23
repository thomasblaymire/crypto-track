import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

interface WatchListAttrs {
  cryptoId: string;
  userId: string;
}

interface WatchListModel extends mongoose.Model<WatchListDoc> {
  build(attrs: WatchListAttrs): WatchListDoc;
}

interface WatchListDoc extends mongoose.Document {
  cryptoId: string;
  userId: string;
}

const watchList = new mongoose.Schema(
  {
    cryptoId: {
      type: String,
      required: true,
    },
    userId: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

// Created for TS Type checking
watchList.statics.build = (attrs: WatchListAttrs) => {
  return new WatchList(attrs);
};

const WatchList = mongoose.model<WatchListDoc, WatchListModel>('WatchList', watchList);

export { WatchList };
