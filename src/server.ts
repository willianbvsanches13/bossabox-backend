import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes';

class Server {
  public server: Application;

  public constructor() {
    this.server = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors());
  }

  // eslint-disable-next-line class-methods-use-this
  private database(): void {
    mongoose.connect('mongodb://mongo/bossabox', {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
    });
  }

  private routes(): void {
    this.server.use(routes);
  }
}

export default new Server().server;
