import mongoose from 'mongoose';

// An interface that describes the properties
// that are requried to create a new Watchlist item
interface UserAttrs {
  crypto: string;
  userId: string;
}

// An interface that describes the properties
// that a User Model has
interface WatchListModel extends mongoose.Model<WatchListDoc> {
  build(attrs: UserAttrs): WatchListDoc;
}

// An interface that describes the properties
// that a Watchlist Document has
interface WatchListDoc extends mongoose.Document {
  crypto: string;
  userId: string;
}

const watchList = new mongoose.Schema(
  {
    crypto: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
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
watchList.statics.build = (attrs: UserAttrs) => {
  return new WatchList(attrs);
};

const WatchList = mongoose.model<WatchListDoc, WatchListModel>('WatchList', watchList);

export { WatchList };
